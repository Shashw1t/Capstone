import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
// Import real pages
import Login from './pages/Login';
import Courses from './pages/Courses';
import Practice from './pages/Practice';
import Articles from './pages/Articles';
import Jobs from './pages/Jobs';
import StudentChapter from './pages/StudentChapter';
import Contest from './pages/Contest';
import ProblemSolver from './pages/ProblemSolver';
import './App.css';

const Home = () => (
  <div className="home-wrapper">
    <div className="app-hero-section">
      <h1 className="app-hero-title">
        A Computer Science Portal for Geeks
      </h1>
      <p className="app-hero-description">
        Learn, Practice & Prepare for interviews with our comprehensive platform
      </p>
      <div className="app-hero-buttons">
        <button className="app-hero-btn app-hero-btn-primary">
          Start Learning
        </button>
        <button className="app-hero-btn app-hero-btn-secondary">
          Explore Courses
        </button>
      </div>
    </div>

    {/* Stats Section */}
    <div className="app-stats-section">
      <div className="app-stats-grid">
        <div className="app-stat-card">
          <h3 className="app-stat-number">10M+</h3>
          <p className="app-stat-label">Students Learning</p>
        </div>
        <div className="app-stat-card">
          <h3 className="app-stat-number">5000+</h3>
          <p className="app-stat-label">Practice Problems</p>
        </div>
        <div className="app-stat-card">
          <h3 className="app-stat-number">500+</h3>
          <p className="app-stat-label">Programming Courses</p>
        </div>
        <div className="app-stat-card">
          <h3 className="app-stat-number">100+</h3>
          <p className="app-stat-label">Weekly Contests</p>
        </div>
      </div>
    </div>

    {/* Popular Courses Section */}
    <div className="app-courses-section">
      <div className="app-courses-container">
        <h2 className="app-section-title">Popular Courses</h2>
        <div className="app-courses-grid">
          <div className="app-course-card">
            <h3 className="app-course-title">DSA Self Paced</h3>
            <p className="app-course-description">Master Data Structures and Algorithms</p>
            <button className="app-course-btn">View Details</button>
          </div>
          <div className="app-course-card">
            <h3 className="app-course-title">Complete Interview Preparation</h3>
            <p className="app-course-description">Crack any coding interview</p>
            <button className="app-course-btn">View Details</button>
          </div>
          <div className="app-course-card">
            <h3 className="app-course-title">System Design</h3>
            <p className="app-course-description">Design scalable systems</p>
            <button className="app-course-btn">View Details</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const PlaceholderPage = ({ title }) => (
  <div className="placeholder-page">
    <div className="placeholder-content">
      <h1 className="placeholder-title">{title}</h1>
      <p className="placeholder-text">This page is under construction</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/courses/*" element={<Courses />} />
            <Route 
              path="/practice" 
              element={
                <ProtectedRoute>
                  <Practice />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/problem/:problemId" 
              element={
                <ProtectedRoute>
                  <ProblemSolver />
                </ProtectedRoute>
              } 
            />
            <Route path="/articles" element={<Articles />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/student-chapter" element={<StudentChapter />} />
            <Route path="/contest" element={<Contest />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
