import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu, X, User, ChevronDown, LogOut } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  useEffect(() => {
    const checkAuth = () => {
      const authStatus = localStorage.getItem('isAuthenticated') === 'true';
      const storedUsername = localStorage.getItem('username') || '';
      setIsAuthenticated(authStatus);
      setUsername(storedUsername);
    };

    checkAuth();
    // Listen for storage changes to update auth status
    window.addEventListener('storage', checkAuth);
    return () => window.removeEventListener('storage', checkAuth);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('username');
    setIsAuthenticated(false);
    setUsername('');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img src="/logo.png" alt="GeeksforGeeks" onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
          }} />
          <span style={{display: 'none', color: '#2f8d46', fontWeight: 'bold', fontSize: '24px'}}>
            GeeksforGeeks
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item dropdown">
            <Link to="/courses" className="navbar-link">
              Courses <ChevronDown size={16} />
            </Link>
            <div className="dropdown-content">
              <Link to="/courses/dsa">Data Structures & Algorithms</Link>
              <Link to="/courses/web">Web Development</Link>
              <Link to="/courses/python">Python Programming</Link>
              <Link to="/courses/java">Java Programming</Link>
              <Link to="/courses/cpp">C++ Programming</Link>
              <Link to="/courses/machine-learning">Machine Learning</Link>
            </div>
          </li>
          
          <li className="navbar-item dropdown">
            <Link to="/practice" className="navbar-link">
              Practice <ChevronDown size={16} />
            </Link>
            <div className="dropdown-content">
              <Link to="/practice/problems">Practice Problems</Link>
              <Link to="/practice/interview">Interview Questions</Link>
              <Link to="/practice/company">Company Wise</Link>
              <Link to="/practice/topic">Topic Wise</Link>
            </div>
          </li>

          <li className="navbar-item">
            <Link to="/articles" className="navbar-link">Articles</Link>
          </li>

          <li className="navbar-item">
            <Link to="/jobs" className="navbar-link">Jobs</Link>
          </li>

          <li className="navbar-item">
            <Link to="/student-chapter" className="navbar-link">Student Chapter</Link>
          </li>

          <li className="navbar-item">
            <Link to="/contest" className="navbar-link">Contest</Link>
          </li>
        </ul>

        {/* Search and User Actions */}
        <div className="navbar-actions">
          <button className="search-btn" onClick={toggleSearch}>
            <Search size={20} />
          </button>
          
          {isAuthenticated ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ 
                color: '#2f8d46', 
                fontWeight: '500', 
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
                gap: '5px'
              }}>
                <User size={16} />
                {username}
              </span>
              <button 
                onClick={handleLogout}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '6px 12px',
                  backgroundColor: '#dc2626',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '12px',
                  fontWeight: '500'
                }}
                title="Logout"
              >
                <LogOut size={14} />
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="user-btn">
              <User size={20} />
            </Link>
          )}

          <button className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="search-overlay">
            <div className="search-container">
              <input
                type="text"
                placeholder="Search for articles, courses, problems..."
                className="search-input"
                autoFocus
              />
              <button className="search-close" onClick={toggleSearch}>
                <X size={20} />
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;