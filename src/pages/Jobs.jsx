import React from 'react';
import { MapPin, Clock, Building } from 'lucide-react';

const Jobs = () => {
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
            💼 Job Opportunities
          </h1>
          <p style={{
            color: '#718096',
            fontSize: '1.1rem'
          }}>
            Find your dream job in the tech industry
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
              marginBottom: '10px',
              fontWeight: '600'
            }}>
              Software Engineer
            </h3>
            <p style={{
              color: '#666',
              marginBottom: '15px',
              display: 'flex',
              alignItems: 'center',
              gap: '5px'
            }}>
              <Building size={16} />
              Google Inc.
            </p>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '0.9rem',
              color: '#888'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <MapPin size={16} />
                <span>Bangalore, India</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Clock size={16} />
                <span>Full-time</span>
              </div>
              <span style={{
                backgroundColor: '#e6fffa',
                color: '#2d8f2d',
                padding: '4px 8px',
                borderRadius: '4px',
                fontSize: '0.8rem'
              }}>3+ years</span>
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
              marginBottom: '10px',
              fontWeight: '600'
            }}>
              Frontend Developer
            </h3>
            <p style={{
              color: '#666',
              marginBottom: '15px',
              display: 'flex',
              alignItems: 'center',
              gap: '5px'
            }}>
              <Building size={16} />
              Microsoft Corporation
            </p>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '0.9rem',
              color: '#888'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <MapPin size={16} />
                <span>Hyderabad, India</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Clock size={16} />
                <span>Full-time</span>
              </div>
              <span style={{
                backgroundColor: '#e6fffa',
                color: '#2d8f2d',
                padding: '4px 8px',
                borderRadius: '4px',
                fontSize: '0.8rem'
              }}>2+ years</span>
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
              marginBottom: '10px',
              fontWeight: '600'
            }}>
              Data Scientist
            </h3>
            <p style={{
              color: '#666',
              marginBottom: '15px',
              display: 'flex',
              alignItems: 'center',
              gap: '5px'
            }}>
              <Building size={16} />
              Amazon Web Services
            </p>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '0.9rem',
              color: '#888'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <MapPin size={16} />
                <span>Mumbai, India</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Clock size={16} />
                <span>Full-time</span>
              </div>
              <span style={{
                backgroundColor: '#e6fffa',
                color: '#2d8f2d',
                padding: '4px 8px',
                borderRadius: '4px',
                fontSize: '0.8rem'
              }}>4+ years</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;