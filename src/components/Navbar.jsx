import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X, User, ChevronDown } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

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
          
          <Link to="/login" className="user-btn">
            <User size={20} />
          </Link>

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