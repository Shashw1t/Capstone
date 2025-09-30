import React from 'react';
import { Users, BookOpen, Code, Trophy, Globe, Award } from 'lucide-react';
import './StatsSection.css';

const StatsSection = () => {
  const stats = [
    {
      icon: <Users size={40} />,
      number: "1M+",
      label: "Active Learners",
      description: "Students from around the world"
    },
    {
      icon: <BookOpen size={40} />,
      number: "500+",
      label: "Courses",
      description: "Comprehensive programming courses"
    },
    {
      icon: <Code size={40} />,
      number: "10K+",
      label: "Practice Problems",
      description: "Coding challenges & exercises"
    },
    {
      icon: <Trophy size={40} />,
      number: "100+",
      label: "Contests",
      description: "Competitive programming events"
    },
    {
      icon: <Globe size={40} />,
      number: "50M+",
      label: "Page Views",
      description: "Monthly traffic worldwide"
    },
    {
      icon: <Award size={40} />,
      number: "1000+",
      label: "Companies",
      description: "Trust our platform for hiring"
    }
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-header">
          <h2 className="section-title">Trusted by Millions Worldwide</h2>
          <p className="section-subtitle">
            Join the largest community of programmers and tech enthusiasts
          </p>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">
                {stat.icon}
              </div>
              <div className="stat-content">
                <h3 className="stat-number">{stat.number}</h3>
                <h4 className="stat-label">{stat.label}</h4>
                <p className="stat-description">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="achievements">
          <div className="achievement-item">
            <h4>🏆 Best Programming Platform 2024</h4>
            <p>Developer Community Choice Award</p>
          </div>
          <div className="achievement-item">
            <h4>🌟 Top 10 EdTech Platforms</h4>
            <p>TechCrunch Recognition</p>
          </div>
          <div className="achievement-item">
            <h4>💼 #1 Interview Prep Resource</h4>
            <p>Used by Fortune 500 companies</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;