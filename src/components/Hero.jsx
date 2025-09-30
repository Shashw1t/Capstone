import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Code, BookOpen, Trophy, ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              A Computer Science Portal for{' '}
              <span className="highlight">Geeks</span>
            </h1>
            <p className="hero-description">
              Learn programming, practice coding, read articles, and prepare for 
              technical interviews. Join millions of developers in the world's 
              largest coding community.
            </p>
            
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">1M+</span>
                <span className="stat-label">Students</span>
              </div>
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Courses</span>
              </div>
              <div className="stat">
                <span className="stat-number">10K+</span>
                <span className="stat-label">Problems</span>
              </div>
            </div>

            <div className="hero-buttons">
              <Link to="/courses" className="btn btn-primary btn-large">
                <BookOpen size={20} />
                Start Learning
                <ArrowRight size={16} />
              </Link>
              <Link to="/practice" className="btn btn-secondary btn-large">
                <Code size={20} />
                Practice Coding
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="code-window">
              <div className="code-header">
                <div className="code-buttons">
                  <span className="code-btn red"></span>
                  <span className="code-btn yellow"></span>
                  <span className="code-btn green"></span>
                </div>
                <span className="code-title">algorithm.js</span>
              </div>
              <div className="code-content">
                <pre>{`function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return -1;
}`}</pre>
              </div>
            </div>

            <div className="floating-elements">
              <div className="floating-card card-1">
                <Play size={24} />
                <span>Video Tutorials</span>
              </div>
              <div className="floating-card card-2">
                <Code size={24} />
                <span>Practice Problems</span>
              </div>
              <div className="floating-card card-3">
                <Trophy size={24} />
                <span>Coding Contests</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="quick-links">
          <h3>Popular Topics</h3>
          <div className="topic-tags">
            <Link to="/dsa" className="topic-tag">Data Structures</Link>
            <Link to="/algorithms" className="topic-tag">Algorithms</Link>
            <Link to="/system-design" className="topic-tag">System Design</Link>
            <Link to="/interview-prep" className="topic-tag">Interview Prep</Link>
            <Link to="/competitive-programming" className="topic-tag">Competitive Programming</Link>
            <Link to="/web-development" className="topic-tag">Web Development</Link>
            <Link to="/machine-learning" className="topic-tag">Machine Learning</Link>
            <Link to="/database" className="topic-tag">Database</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;