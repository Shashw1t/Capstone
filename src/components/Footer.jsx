import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer Top */}
        <div className="footer-top">
          <div className="footer-section">
            <h3>Company</h3>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Learn</h3>
            <ul>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/practice">Practice</Link></li>
              <li><Link to="/articles">Articles</Link></li>
              <li><Link to="/tutorials">Tutorials</Link></li>
              <li><Link to="/algorithms">Algorithms</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Languages</h3>
            <ul>
              <li><Link to="/python">Python</Link></li>
              <li><Link to="/java">Java</Link></li>
              <li><Link to="/cpp">C++</Link></li>
              <li><Link to="/javascript">JavaScript</Link></li>
              <li><Link to="/c">C</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Data Structures</h3>
            <ul>
              <li><Link to="/arrays">Arrays</Link></li>
              <li><Link to="/linked-list">Linked List</Link></li>
              <li><Link to="/stack">Stack</Link></li>
              <li><Link to="/queue">Queue</Link></li>
              <li><Link to="/tree">Tree</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Web Technologies</h3>
            <ul>
              <li><Link to="/html">HTML</Link></li>
              <li><Link to="/css">CSS</Link></li>
              <li><Link to="/javascript">JavaScript</Link></li>
              <li><Link to="/react">React</Link></li>
              <li><Link to="/nodejs">Node.js</Link></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="newsletter-section">
          <h3>Subscribe to our Newsletter</h3>
          <p>Get the latest updates on courses, articles, and coding challenges</p>
          <div className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email address"
              className="newsletter-input"
            />
            <button className="newsletter-btn">
              <Mail size={20} />
              Subscribe
            </button>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="footer-bottom">
          <div className="social-links">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#" aria-label="Facebook"><Facebook size={24} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={24} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={24} /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin size={24} /></a>
              <a href="#" aria-label="YouTube"><Youtube size={24} /></a>
            </div>
          </div>

          <div className="footer-logo">
            <Link to="/">
              <span className="logo-text">GeeksforGeeks</span>
            </Link>
            <p>A Computer Science Portal for Geeks</p>
          </div>

          <div className="copyright">
            <p>&copy; 2025 GeeksforGeeks. All rights reserved.</p>
            <p>Built with ❤️ for the coding community</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;