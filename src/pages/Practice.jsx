import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Code, Target, Trophy } from 'lucide-react';

const Practice = () => {
  const navigate = useNavigate();

  const handleProblemClick = (problemId) => {
    navigate(`/problem/${problemId}`);
  };

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
            🎯 Practice Problems
          </h1>
          <p style={{
            color: '#718096',
            fontSize: '1.1rem'
          }}>
            Sharpen your coding skills with practice problems. Click on any problem to start solving!
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '25px'
        }}>
          <div 
            onClick={() => handleProblemClick('1')}
            style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              padding: '25px',
              borderLeft: '4px solid #10b981',
              cursor: 'pointer',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 12px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
            }}
          >
            <h3 style={{
              color: '#2d8f2d',
              fontSize: '1.3rem',
              marginBottom: '15px',
              fontWeight: '600'
            }}>
              Two Sum Problem
            </h3>
            <p style={{
              color: '#666',
              marginBottom: '15px',
              lineHeight: '1.6'
            }}>
              Find two numbers in an array that add up to a target sum
            </p>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '0.9rem',
              color: '#888'
            }}>
              <span style={{
                backgroundColor: '#d1fae5',
                color: '#065f46',
                padding: '4px 8px',
                borderRadius: '4px',
                fontSize: '0.8rem'
              }}>Easy</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Code size={16} />
                <span>Array</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Trophy size={16} />
                <span>89% solved</span>
              </div>
            </div>
          </div>

          <div 
            onClick={() => handleProblemClick('2')}
            style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              padding: '25px',
              borderLeft: '4px solid #f59e0b',
              cursor: 'pointer',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 12px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
            }}
          >
            <h3 style={{
              color: '#2d8f2d',
              fontSize: '1.3rem',
              marginBottom: '15px',
              fontWeight: '600'
            }}>
              Binary Tree Traversal
            </h3>
            <p style={{
              color: '#666',
              marginBottom: '15px',
              lineHeight: '1.6'
            }}>
              Implement inorder, preorder and postorder traversals
            </p>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '0.9rem',
              color: '#888'
            }}>
              <span style={{
                backgroundColor: '#fef3c7',
                color: '#92400e',
                padding: '4px 8px',
                borderRadius: '4px',
                fontSize: '0.8rem'
              }}>Medium</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Code size={16} />
                <span>Tree</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Trophy size={16} />
                <span>67% solved</span>
              </div>
            </div>
          </div>

          <div 
            onClick={() => handleProblemClick('3')}
            style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              padding: '25px',
              borderLeft: '4px solid #dc2626',
              cursor: 'pointer',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 12px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
            }}
          >
            <h3 style={{
              color: '#2d8f2d',
              fontSize: '1.3rem',
              marginBottom: '15px',
              fontWeight: '600'
            }}>
              Maximum Subarray Problem
            </h3>
            <p style={{
              color: '#666',
              marginBottom: '15px',
              lineHeight: '1.6'
            }}>
              Find the contiguous subarray with the largest sum
            </p>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '0.9rem',
              color: '#888'
            }}>
              <span style={{
                backgroundColor: '#fee2e2',
                color: '#991b1b',
                padding: '4px 8px',
                borderRadius: '4px',
                fontSize: '0.8rem'
              }}>Hard</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Code size={16} />
                <span>Dynamic Programming</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Trophy size={16} />
                <span>45% solved</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practice;