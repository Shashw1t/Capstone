import React from 'react';
import { Star, Clock, Users } from 'lucide-react';

const Courses = () => {
  return (
    <div style={{
      padding: '60px 20px 20px',
      backgroundColor: '#f8f9fa',
      minHeight: '100vh'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          <h1 style={{
            fontSize: '2.5rem',
            color: '#2d3748',
            marginBottom: '10px',
            fontWeight: 'bold'
          }}>
            💻 Programming Courses
          </h1>
          <p style={{
            color: '#718096',
            fontSize: '1.1rem'
          }}>
            Master programming skills with our comprehensive courses
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '25px'
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            padding: '25px',
            transition: 'transform 0.3s ease'
          }}>
            <h3 style={{
              color: '#2d8f2d',
              fontSize: '1.3rem',
              marginBottom: '15px',
              fontWeight: '600'
            }}>
              Complete Data Structures & Algorithms Course
            </h3>
            <p style={{
              color: '#666',
              marginBottom: '15px',
              lineHeight: '1.6'
            }}>
              Master DSA concepts with hands-on coding problems
            </p>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '0.9rem',
              color: '#888'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Star size={16} fill="#fbbf24" color="#fbbf24" />
                <span>4.8 (15k)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Clock size={16} />
                <span>40 hours</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Users size={16} />
                <span>125k enrolled</span>
              </div>
            </div>
          </div>

          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            padding: '25px'
          }}>
            <h3 style={{
              color: '#2d8f2d',
              fontSize: '1.3rem',
              marginBottom: '15px',
              fontWeight: '600'
            }}>
              Full Stack Web Development
            </h3>
            <p style={{
              color: '#666',
              marginBottom: '15px',
              lineHeight: '1.6'
            }}>
              Learn React, Node.js, MongoDB
            </p>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '0.9rem',
              color: '#888'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Star size={16} fill="#fbbf24" color="#fbbf24" />
                <span>4.7 (8.5k)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Clock size={16} />
                <span>60 hours</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Users size={16} />
                <span>89k enrolled</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;