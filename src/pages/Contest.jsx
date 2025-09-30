import React from 'react';
import { Clock, Calendar, Trophy } from 'lucide-react';

const Contest = () => {
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
            🏆 Programming Contests
          </h1>
          <p style={{
            color: '#718096',
            fontSize: '1.1rem'
          }}>
            Participate in competitive programming challenges
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
            borderTop: '4px solid #2d8f2d'
          }}>
            <h3 style={{
              color: '#2d8f2d',
              fontSize: '1.3rem',
              marginBottom: '15px',
              fontWeight: '600'
            }}>
              Weekly Contest #127
            </h3>
            <p style={{
              color: '#666',
              marginBottom: '15px',
              lineHeight: '1.6'
            }}>
              4 challenging problems to solve in competitive programming style
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
                <Clock size={16} />
                <span>90 minutes</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Calendar size={16} />
                <span>Starts in 2 days</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Trophy size={16} />
                <span>1500+ registered</span>
              </div>
            </div>
            <button style={{
              backgroundColor: '#2d8f2d',
              color: 'white',
              padding: '12px 24px',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              width: '100%',
              fontWeight: '600'
            }}>
              Register Now
            </button>
          </div>

          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            padding: '25px',
            borderTop: '4px solid #f59e0b'
          }}>
            <h3 style={{
              color: '#2d8f2d',
              fontSize: '1.3rem',
              marginBottom: '15px',
              fontWeight: '600'
            }}>
              Biweekly Contest #89
            </h3>
            <p style={{
              color: '#666',
              marginBottom: '15px',
              lineHeight: '1.6'
            }}>
              Extended contest with more complex algorithmic challenges
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
                <Clock size={16} />
                <span>105 minutes</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Calendar size={16} />
                <span>Starts in 5 days</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Trophy size={16} />
                <span>890+ registered</span>
              </div>
            </div>
            <button style={{
              backgroundColor: '#f59e0b',
              color: 'white',
              padding: '12px 24px',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              width: '100%',
              fontWeight: '600'
            }}>
              Register Now
            </button>
          </div>

          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            padding: '25px',
            borderTop: '4px solid #dc2626'
          }}>
            <h3 style={{
              color: '#2d8f2d',
              fontSize: '1.3rem',
              marginBottom: '15px',
              fontWeight: '600'
            }}>
              Monthly Challenge
            </h3>
            <p style={{
              color: '#666',
              marginBottom: '15px',
              lineHeight: '1.6'
            }}>
              Premium monthly contest with cash prizes and certifications
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
                <Clock size={16} />
                <span>3 hours</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Calendar size={16} />
                <span>Starts in 1 week</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Trophy size={16} />
                <span>2.5k+ registered</span>
              </div>
            </div>
            <button style={{
              backgroundColor: '#dc2626',
              color: 'white',
              padding: '12px 24px',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              width: '100%',
              fontWeight: '600'
            }}>
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contest;