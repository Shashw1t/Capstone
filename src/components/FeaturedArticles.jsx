import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, Eye, ArrowRight } from 'lucide-react';
import './FeaturedArticles.css';

const FeaturedArticles = () => {
  const articles = [
    {
      id: 1,
      title: "Complete Guide to System Design Interviews",
      excerpt: "Master system design interviews with this comprehensive guide covering scalability, databases, and distributed systems.",
      author: "Sandeep Jain",
      date: "2024-01-15",
      readTime: "12 min",
      views: "45K",
      category: "Interview Prep",
      image: "/article-system-design.jpg"
    },
    {
      id: 2,
      title: "Advanced Data Structures Every Programmer Should Know",
      excerpt: "Explore advanced data structures like Trie, Segment Tree, and Fenwick Tree with practical implementations.",
      author: "Prateek Narang",
      date: "2024-01-12",
      readTime: "8 min",
      views: "32K",
      category: "Data Structures",
      image: "/article-ds.jpg"
    },
    {
      id: 3,
      title: "Machine Learning Algorithms Explained with Code",
      excerpt: "Understand popular ML algorithms including linear regression, decision trees, and neural networks.",
      author: "Dr. Raj Kumar",
      date: "2024-01-10",
      readTime: "15 min",
      views: "28K",
      category: "Machine Learning",
      image: "/article-ml.jpg"
    }
  ];

  return (
    <section className="featured-articles section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Articles</h2>
          <p className="section-subtitle">
            Stay updated with the latest trends and insights in technology
          </p>
          <Link to="/articles" className="view-all-btn">
            View All Articles <ArrowRight size={16} />
          </Link>
        </div>

        <div className="articles-grid">
          {articles.map(article => (
            <article key={article.id} className="article-card">
              <div className="article-image">
                <img 
                  src={article.image} 
                  alt={article.title}
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/400x250/2f8d46/ffffff?text=${encodeURIComponent(article.category)}`;
                  }}
                />
                <div className="article-category">{article.category}</div>
              </div>
              
              <div className="article-content">
                <h3 className="article-title">
                  <Link to={`/articles/${article.id}`}>{article.title}</Link>
                </h3>
                
                <p className="article-excerpt">{article.excerpt}</p>
                
                <div className="article-meta">
                  <div className="meta-item">
                    <User size={14} />
                    <span>{article.author}</span>
                  </div>
                  <div className="meta-item">
                    <Calendar size={14} />
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                  <div className="meta-item">
                    <Clock size={14} />
                    <span>{article.readTime}</span>
                  </div>
                  <div className="meta-item">
                    <Eye size={14} />
                    <span>{article.views}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;