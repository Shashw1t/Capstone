import React from 'react';
import { Search, Calendar, Clock, User, Eye } from 'lucide-react';

const Articles = () => {
  const articles = [
    {
      title: "Complete Guide to System Design Interviews",
      excerpt: "Master system design interviews with comprehensive coverage of scalability, databases, and distributed systems.",
      author: "Sandeep Jain",
      date: "Jan 15, 2024",
      readTime: "12 min read",
      views: "45K views"
    },
    {
      title: "Advanced Data Structures Every Programmer Should Know", 
      excerpt: "Explore advanced data structures like Trie, Segment Tree, and Fenwick Tree with practical implementations.",
      author: "Prateek Narang",
      date: "Jan 12, 2024",
      readTime: "8 min read",
      views: "32K views"
    },
    {
      title: "React 18 Features and Performance Optimizations",
      excerpt: "Learn about the latest features in React 18 including concurrent rendering and automatic batching.",
      author: "Sarah Johnson", 
      date: "Jan 10, 2024",
      readTime: "10 min read",
      views: "28K views"
    }
  ];

  const cardStyle = {
    backgroundColor: 'white',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '20px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };

  const titleStyle = {
    color: '#2f8d46',
    fontSize: '1.4rem',
    marginBottom: '10px'
  };

  const metaStyle = {
    color: '#666',
    fontSize: '0.9rem',
    marginBottom: '10px'
  };

  return (
    <div style={{padding: '40px 20px', maxWidth: '1200px', margin: '0 auto'}}>
      <div style={{textAlign: 'center', marginBottom: '40px'}}>
        <h1 style={{color: '#2f8d46', fontSize: '2.5rem', marginBottom: '10px'}}>
          📝 Programming Articles
        </h1>
        <p style={{color: '#666', fontSize: '1.2rem'}}>
          Stay updated with the latest trends and insights in technology
        </p>
      </div>

      <div style={{display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))'}}>
        {articles.map((article, index) => (
          <div key={index} style={cardStyle}>
            <h2 style={titleStyle}>{article.title}</h2>
            <p style={{color: '#333', lineHeight: '1.6', marginBottom: '15px'}}>
              {article.excerpt}
            </p>
            <div style={metaStyle}>
              <div>👤 By {article.author}</div>
              <div>📅 {article.date}</div>
              <div>⏱️ {article.readTime}</div>
              <div>👁️ {article.views}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;