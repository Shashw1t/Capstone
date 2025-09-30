import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// Import real pages
import Courses from './pages/Courses';
import Practice from './pages/Practice';
import Articles from './pages/Articles';
import Jobs from './pages/Jobs';
import StudentChapter from './pages/StudentChapter';
import Contest from './pages/Contest';
import ProblemSolver from './pages/ProblemSolver';
import './App.css';

const Home = () => (
  <div>
    <div style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '100px 20px',
      textAlign: 'center'
    }}>
      <h1 style={{
        fontSize: '3.5rem',
        marginBottom: '20px',
        fontWeight: 'bold'
      }}>
        A Computer Science Portal for Geeks
      </h1>
      <p style={{
        fontSize: '1.3rem',
        marginBottom: '30px',
        opacity: 0.9
      }}>
        Learn, Practice & Prepare for interviews with our comprehensive platform
      </p>
      <div style={{
        display: 'flex',
        gap: '15px',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}>
        <button style={{
          backgroundColor: '#2d8f2d',
          color: 'white',
          padding: '15px 30px',
          border: 'none',
          borderRadius: '8px',
          fontSize: '1.1rem',
          cursor: 'pointer',
          fontWeight: '600'
        }}>
          Start Learning
        </button>
        <button style={{
          backgroundColor: 'transparent',
          color: 'white',
          padding: '15px 30px',
          border: '2px solid white',
          borderRadius: '8px',
          fontSize: '1.1rem',
          cursor: 'pointer',
          fontWeight: '600'
        }}>
          Explore Courses
        </button>
      </div>
    </div>

    {/* Stats Section */}
    <div style={{
      padding: '60px 20px',
      backgroundColor: '#f8f9fa'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '30px',
        textAlign: 'center'
      }}>
        <div>
          <h3 style={{
            fontSize: '2.5rem',
            color: '#2d8f2d',
            marginBottom: '10px',
            fontWeight: 'bold'
          }}>10M+</h3>
          <p style={{ color: '#666', fontSize: '1.1rem' }}>Students Learning</p>
        </div>
        <div>
          <h3 style={{
            fontSize: '2.5rem',
            color: '#2d8f2d',
            marginBottom: '10px',
            fontWeight: 'bold'
          }}>5000+</h3>
          <p style={{ color: '#666', fontSize: '1.1rem' }}>Practice Problems</p>
        </div>
        <div>
          <h3 style={{
            fontSize: '2.5rem',
            color: '#2d8f2d',
            marginBottom: '10px',
            fontWeight: 'bold'
          }}>500+</h3>
          <p style={{ color: '#666', fontSize: '1.1rem' }}>Programming Courses</p>
        </div>
        <div>
          <h3 style={{
            fontSize: '2.5rem',
            color: '#2d8f2d',
            marginBottom: '10px',
            fontWeight: 'bold'
          }}>100+</h3>
          <p style={{ color: '#666', fontSize: '1.1rem' }}>Weekly Contests</p>
        </div>
      </div>
    </div>

    {/* Popular Courses Section */}
    <div style={{
      padding: '60px 20px',
      backgroundColor: 'white'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          marginBottom: '50px',
          color: '#2d3748'
        }}>Popular Courses</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px'
        }}>
          <div style={{
            backgroundColor: '#f8f9fa',
            borderRadius: '12px',
            padding: '30px',
            textAlign: 'left'
          }}>
            <h3 style={{ color: '#2d8f2d', marginBottom: '15px' }}>DSA Self Paced</h3>
            <p style={{ color: '#666', marginBottom: '20px' }}>Master Data Structures and Algorithms</p>
            <button style={{
              backgroundColor: '#2d8f2d',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer'
            }}>View Details</button>
          </div>
          <div style={{
            backgroundColor: '#f8f9fa',
            borderRadius: '12px',
            padding: '30px',
            textAlign: 'left'
          }}>
            <h3 style={{ color: '#2d8f2d', marginBottom: '15px' }}>Complete Interview Preparation</h3>
            <p style={{ color: '#666', marginBottom: '20px' }}>Crack any coding interview</p>
            <button style={{
              backgroundColor: '#2d8f2d',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer'
            }}>View Details</button>
          </div>
          <div style={{
            backgroundColor: '#f8f9fa',
            borderRadius: '12px',
            padding: '30px',
            textAlign: 'left'
          }}>
            <h3 style={{ color: '#2d8f2d', marginBottom: '15px' }}>System Design</h3>
            <p style={{ color: '#666', marginBottom: '20px' }}>Learn to design scalable systems</p>
            <button style={{
              backgroundColor: '#2d8f2d',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer'
            }}>View Details</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const TestFooter = () => (
  <footer style={{background: '#333', color: 'white', padding: '1rem', textAlign: 'center'}}>
    <p>&copy; 2025 GeeksforGeeks Clone</p>
  </footer>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/problem/:problemId" element={<ProblemSolver />} />
          <Route path="*" element={
            <>
              <Navbar />
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/courses" element={<Courses />} />
                  <Route path="/practice" element={<Practice />} />
                  <Route path="/articles" element={<Articles />} />
                  <Route path="/jobs" element={<Jobs />} />
                  <Route path="/student-chapter" element={<StudentChapter />} />
                  <Route path="/contest" element={<Contest />} />
                </Routes>
              </main>
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
