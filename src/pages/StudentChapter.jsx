import React from 'react';
import { Users, Calendar, Award } from 'lucide-react';

const StudentChapter = () => {
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
            🎓 Student Chapters
          </h1>
          <p style={{
            color: '#718096',
            fontSize: '1.1rem'
          }}>
            Join GeeksforGeeks student communities at your college
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
            padding: '25px'
          }}>
            <h3 style={{
              color: '#2d8f2d',
              fontSize: '1.3rem',
              marginBottom: '15px',
              fontWeight: '600'
            }}>
              IIT Delhi Chapter
            </h3>
            <p style={{
              color: '#666',
              marginBottom: '15px',
              lineHeight: '1.6'
            }}>
              Leading computer science community with regular coding contests
            </p>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '0.9rem',
              color: '#888',
              marginBottom: '15px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Users size={16} />
                <span>500+ members</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Calendar size={16} />
                <span>Weekly events</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Award size={16} />
                <span>Top chapter</span>
              </div>
            </div>
            <button style={{
              backgroundColor: '#2d8f2d',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              width: '100%'
            }}>
              Join Chapter
            </button>
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
              IIT Bombay Chapter
            </h3>
            <p style={{
              color: '#666',
              marginBottom: '15px',
              lineHeight: '1.6'
            }}>
              Most active chapter with hackathons and workshop sessions
            </p>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '0.9rem',
              color: '#888',
              marginBottom: '15px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Users size={16} />
                <span>750+ members</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Calendar size={16} />
                <span>Daily events</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Award size={16} />
                <span>Gold tier</span>
              </div>
            </div>
            <button style={{
              backgroundColor: '#2d8f2d',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              width: '100%'
            }}>
              Join Chapter
            </button>
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
              BITS Pilani Chapter
            </h3>
            <p style={{
              color: '#666',
              marginBottom: '15px',
              lineHeight: '1.6'
            }}>
              Growing community focused on placement preparation
            </p>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '0.9rem',
              color: '#888',
              marginBottom: '15px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Users size={16} />
                <span>300+ members</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Calendar size={16} />
                <span>Bi-weekly</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Award size={16} />
                <span>Silver tier</span>
              </div>
            </div>
            <button style={{
              backgroundColor: '#2d8f2d',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              width: '100%'
            }}>
              Join Chapter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentChapter;