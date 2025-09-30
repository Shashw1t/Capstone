import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Fire, Star } from 'lucide-react';
import './TrendingTopics.css';

const TrendingTopics = () => {
  const trendingTopics = [
    { name: "ChatGPT Integration", posts: 1250, trend: "+25%" },
    { name: "React 18 Features", posts: 980, trend: "+18%" },
    { name: "System Design", posts: 2100, trend: "+12%" },
    { name: "Docker & Kubernetes", posts: 760, trend: "+30%" },
    { name: "TypeScript", posts: 1400, trend: "+22%" },
    { name: "Web3 Development", posts: 650, trend: "+40%" },
    { name: "Cloud Computing", posts: 1100, trend: "+15%" },
    { name: "Microservices", posts: 890, trend: "+20%" }
  ];

  return (
    <section className="trending-topics section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <Fire size={32} color="#ff6b35" />
            Trending Topics
          </h2>
          <p className="section-subtitle">
            Discover what's hot in the programming world right now
          </p>
        </div>

        <div className="trending-grid">
          {trendingTopics.map((topic, index) => (
            <Link key={index} to={`/topics/${topic.name.toLowerCase().replace(/\s+/g, '-')}`} className="topic-card">
              <div className="topic-info">
                <h3>{topic.name}</h3>
                <p>{topic.posts} discussions</p>
              </div>
              <div className="topic-stats">
                <span className="trend-indicator">
                  <TrendingUp size={16} />
                  {topic.trend}
                </span>
                <Star size={16} className="star-icon" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingTopics;