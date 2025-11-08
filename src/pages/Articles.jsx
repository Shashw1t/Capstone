import React, { useState } from 'react';
import { Search, Calendar, Clock, User, Eye, BookOpen, TrendingUp, Star } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Articles = () => {
  const { isDarkMode } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const articles = [
    {
      id: 1,
      title: "Complete Guide to System Design Interviews",
      excerpt: "Master system design interviews with comprehensive coverage of scalability, databases, and distributed systems. Learn to design Netflix, WhatsApp, and more.",
      author: "Sandeep Jain",
      date: "Jan 15, 2024",
      readTime: "12 min",
      views: "45K",
      category: "System Design",
      image: "🏗️",
      trending: true
    },
    {
      id: 2,
      title: "Advanced Data Structures Every Programmer Should Know", 
      excerpt: "Explore advanced data structures like Trie, Segment Tree, and Fenwick Tree with practical implementations and real-world use cases.",
      author: "Prateek Narang",
      date: "Jan 12, 2024",
      readTime: "8 min",
      views: "32K",
      category: "Data Structures",
      image: "🎯",
      trending: true
    },
    {
      id: 3,
      title: "React 18 Features and Performance Optimizations",
      excerpt: "Learn about the latest features in React 18 including concurrent rendering, automatic batching, and transitions for better UX.",
      author: "Sarah Johnson", 
      date: "Jan 10, 2024",
      readTime: "10 min",
      views: "28K",
      category: "Web Development",
      image: "⚛️",
      trending: false
    },
    {
      id: 4,
      title: "Machine Learning Algorithms from Scratch",
      excerpt: "Implement popular ML algorithms including Linear Regression, Decision Trees, and Neural Networks without using libraries.",
      author: "Harikrishna Patel",
      date: "Jan 8, 2024",
      readTime: "15 min",
      views: "38K",
      category: "Machine Learning",
      image: "🤖",
      trending: true
    },
    {
      id: 5,
      title: "Docker and Kubernetes for Beginners",
      excerpt: "Complete guide to containerization and orchestration. Learn Docker fundamentals and deploy applications with Kubernetes.",
      author: "Karan Singh",
      date: "Jan 5, 2024",
      readTime: "14 min",
      views: "42K",
      category: "DevOps",
      image: "🐳",
      trending: false
    },
    {
      id: 6,
      title: "Dynamic Programming Patterns and Techniques",
      excerpt: "Master common DP patterns including knapsack, LCS, matrix chain multiplication with step-by-step explanations.",
      author: "Anuj Bhaiya",
      date: "Jan 3, 2024",
      readTime: "11 min",
      views: "51K",
      category: "Algorithms",
      image: "💡",
      trending: true
    },
    {
      id: 7,
      title: "Building RESTful APIs with Node.js and Express",
      excerpt: "Learn to build scalable REST APIs with authentication, validation, error handling, and best practices.",
      author: "Priya Sharma",
      date: "Dec 28, 2023",
      readTime: "13 min",
      views: "36K",
      category: "Web Development",
      image: "🌐",
      trending: false
    },
    {
      id: 8,
      title: "Graph Algorithms: BFS, DFS, and Beyond",
      excerpt: "Comprehensive guide to graph algorithms including shortest path, minimum spanning tree, and topological sorting.",
      author: "Rahul Verma",
      date: "Dec 25, 2023",
      readTime: "16 min",
      views: "44K",
      category: "Algorithms",
      image: "📊",
      trending: false
    },
    {
      id: 9,
      title: "Introduction to Blockchain Technology",
      excerpt: "Understand blockchain fundamentals, cryptocurrency, smart contracts, and decentralized applications (DApps).",
      author: "Vikram Malhotra",
      date: "Dec 22, 2023",
      readTime: "10 min",
      views: "29K",
      category: "Blockchain",
      image: "⛓️",
      trending: false
    },
    {
      id: 10,
      title: "Python for Data Science: Complete Guide",
      excerpt: "Master Python libraries for data science including NumPy, Pandas, Matplotlib, and Scikit-learn with hands-on examples.",
      author: "Ravi Kumar",
      date: "Dec 20, 2023",
      readTime: "18 min",
      views: "55K",
      category: "Data Science",
      image: "🐍",
      trending: true
    },
    {
      id: 11,
      title: "AWS Cloud Services: EC2, S3, Lambda Explained",
      excerpt: "Deep dive into core AWS services with practical examples and best practices for cloud architecture.",
      author: "Neha Agarwal",
      date: "Dec 18, 2023",
      readTime: "12 min",
      views: "39K",
      category: "Cloud Computing",
      image: "☁️",
      trending: false
    },
    {
      id: 12,
      title: "Cybersecurity Best Practices for Developers",
      excerpt: "Learn essential security practices including OWASP Top 10, encryption, authentication, and secure coding.",
      author: "Amit Joshi",
      date: "Dec 15, 2023",
      readTime: "9 min",
      views: "31K",
      category: "Security",
      image: "🔒",
      trending: false
    },
    {
      id: 13,
      title: "Mobile App Development with Flutter",
      excerpt: "Build beautiful cross-platform mobile apps with Flutter. Learn widgets, state management, and Firebase integration.",
      author: "Ayushi Gupta",
      date: "Dec 12, 2023",
      readTime: "14 min",
      views: "34K",
      category: "Mobile Development",
      image: "📱",
      trending: false
    },
    {
      id: 14,
      title: "Git and GitHub: Advanced Workflows",
      excerpt: "Master Git branching strategies, rebasing, cherry-picking, and collaborative workflows for teams.",
      author: "Sandeep Jain",
      date: "Dec 10, 2023",
      readTime: "8 min",
      views: "48K",
      category: "Tools",
      image: "🔀",
      trending: true
    },
    {
      id: 15,
      title: "SQL vs NoSQL: When to Use Which?",
      excerpt: "Compare relational and non-relational databases. Learn MongoDB, PostgreSQL, and choosing the right database.",
      author: "Prateek Narang",
      date: "Dec 8, 2023",
      readTime: "11 min",
      views: "41K",
      category: "Databases",
      image: "💾",
      trending: false
    },
    {
      id: 16,
      title: "Understanding Big O Notation and Time Complexity",
      excerpt: "Master algorithm analysis with detailed explanations of time and space complexity with practical examples.",
      author: "Anuj Bhaiya",
      date: "Dec 5, 2023",
      readTime: "10 min",
      views: "58K",
      category: "Algorithms",
      image: "⏱️",
      trending: true
    },
    {
      id: 17,
      title: "TypeScript for JavaScript Developers",
      excerpt: "Learn TypeScript fundamentals, type systems, interfaces, generics, and migrating JavaScript projects.",
      author: "Sarah Johnson",
      date: "Dec 3, 2023",
      readTime: "13 min",
      views: "37K",
      category: "Web Development",
      image: "📘",
      trending: false
    },
    {
      id: 18,
      title: "Microservices Architecture Patterns",
      excerpt: "Design scalable microservices with service discovery, API gateway, and communication patterns.",
      author: "Rahul Verma",
      date: "Nov 30, 2023",
      readTime: "15 min",
      views: "43K",
      category: "System Design",
      image: "🔧",
      trending: false
    },
    {
      id: 19,
      title: "Deep Learning with TensorFlow and Keras",
      excerpt: "Build neural networks for image classification, NLP, and computer vision using TensorFlow 2.0.",
      author: "Harikrishna Patel",
      date: "Nov 28, 2023",
      readTime: "17 min",
      views: "35K",
      category: "Machine Learning",
      image: "🧠",
      trending: false
    },
    {
      id: 20,
      title: "CI/CD Pipelines with Jenkins and GitLab",
      excerpt: "Automate build, test, and deployment processes with continuous integration and delivery pipelines.",
      author: "Karan Singh",
      date: "Nov 25, 2023",
      readTime: "12 min",
      views: "40K",
      category: "DevOps",
      image: "🚀",
      trending: false
    },
    {
      id: 21,
      title: "Functional Programming in JavaScript",
      excerpt: "Explore functional programming concepts including pure functions, immutability, and higher-order functions.",
      author: "Priya Sharma",
      date: "Nov 22, 2023",
      readTime: "9 min",
      views: "33K",
      category: "Programming",
      image: "🎭",
      trending: false
    },
    {
      id: 22,
      title: "Linked List Problems and Solutions",
      excerpt: "Solve common linked list problems including reversal, cycle detection, and merging with detailed explanations.",
      author: "Anuj Bhaiya",
      date: "Nov 20, 2023",
      readTime: "11 min",
      views: "46K",
      category: "Data Structures",
      image: "🔗",
      trending: false
    },
    {
      id: 23,
      title: "Responsive Web Design with CSS Grid and Flexbox",
      excerpt: "Master modern CSS layout techniques for building responsive and mobile-first websites.",
      author: "Sneha Reddy",
      date: "Nov 18, 2023",
      readTime: "10 min",
      views: "38K",
      category: "Web Development",
      image: "🎨",
      trending: false
    },
    {
      id: 24,
      title: "Binary Search Tree Operations Explained",
      excerpt: "Understand BST insertion, deletion, searching, and traversal with implementation details and optimizations.",
      author: "Prateek Narang",
      date: "Nov 15, 2023",
      readTime: "12 min",
      views: "42K",
      category: "Data Structures",
      image: "🌳",
      trending: false
    },
    {
      id: 25,
      title: "Introduction to Natural Language Processing",
      excerpt: "Learn NLP basics including tokenization, sentiment analysis, and building chatbots with NLTK and spaCy.",
      author: "Harikrishna Patel",
      date: "Nov 12, 2023",
      readTime: "14 min",
      views: "36K",
      category: "Machine Learning",
      image: "💬",
      trending: false
    },
    {
      id: 26,
      title: "Redis for Caching and Performance",
      excerpt: "Implement caching strategies with Redis to improve application performance and reduce database load.",
      author: "Rahul Verma",
      date: "Nov 10, 2023",
      readTime: "8 min",
      views: "34K",
      category: "Databases",
      image: "⚡",
      trending: false
    },
    {
      id: 27,
      title: "Testing in JavaScript: Jest and React Testing Library",
      excerpt: "Write effective unit and integration tests for React applications with modern testing frameworks.",
      author: "Sarah Johnson",
      date: "Nov 8, 2023",
      readTime: "13 min",
      views: "39K",
      category: "Web Development",
      image: "🧪",
      trending: false
    },
    {
      id: 28,
      title: "Sorting Algorithms: Quick, Merge, and Heap Sort",
      excerpt: "Compare and implement efficient sorting algorithms with complexity analysis and use cases.",
      author: "Anuj Bhaiya",
      date: "Nov 5, 2023",
      readTime: "15 min",
      views: "52K",
      category: "Algorithms",
      image: "🔢",
      trending: true
    },
    {
      id: 29,
      title: "GraphQL vs REST: Modern API Design",
      excerpt: "Compare GraphQL and REST APIs. Learn when to use each and how to implement GraphQL servers.",
      author: "Priya Sharma",
      date: "Nov 3, 2023",
      readTime: "11 min",
      views: "37K",
      category: "Web Development",
      image: "🔌",
      trending: false
    },
    {
      id: 30,
      title: "Ethical Hacking and Penetration Testing Basics",
      excerpt: "Introduction to ethical hacking techniques, vulnerability assessment, and security testing methodologies.",
      author: "Amit Joshi",
      date: "Nov 1, 2023",
      readTime: "16 min",
      views: "41K",
      category: "Security",
      image: "🎯",
      trending: false
    }
  ];

  const categories = [
    'all',
    'Algorithms',
    'Data Structures',
    'Web Development',
    'Machine Learning',
    'System Design',
    'DevOps',
    'Security',
    'Databases',
    'Mobile Development'
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          article.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const trendingArticles = articles.filter(a => a.trending).slice(0, 5);

  return (
    <div style={{
      padding: '60px 20px 20px',
      backgroundColor: isDarkMode ? '#121212' : '#f8f9fa',
      minHeight: '100vh'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          <h1 style={{
            fontSize: '2.5rem',
            color: isDarkMode ? '#e5e5e5' : '#2d3748',
            marginBottom: '10px',
            fontWeight: 'bold'
          }}>
            📝 Programming Articles
          </h1>
          <p style={{
            color: isDarkMode ? '#a3a3a3' : '#718096',
            fontSize: '1.1rem'
          }}>
            Stay updated with {articles.length}+ articles on latest tech trends and best practices
          </p>
        </div>

        {/* Trending Section */}
        <div style={{
          backgroundColor: isDarkMode ? '#1e1e1e' : '#fff7ed',
          borderLeft: '4px solid #f59e0b',
          padding: '20px',
          marginBottom: '30px',
          borderRadius: '8px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '15px'
          }}>
            <TrendingUp size={20} color="#f59e0b" />
            <h3 style={{ margin: 0, color: isDarkMode ? '#fbbf24' : '#92400e' }}>Trending Articles</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {trendingArticles.map(article => (
              <div key={article.id} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                cursor: 'pointer'
              }}>
                <span style={{ fontSize: '20px' }}>{article.image}</span>
                <span style={{ color: '#374151', fontSize: '14px' }}>{article.title}</span>
                <span style={{
                  marginLeft: 'auto',
                  fontSize: '12px',
                  color: '#6b7280',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <Eye size={14} />
                  {article.views}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Search and Filters */}
        <div style={{ marginBottom: '30px' }}>
          {/* Search */}
          <div style={{ position: 'relative', marginBottom: '20px' }}>
            <Search size={20} style={{
              position: 'absolute',
              left: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: isDarkMode ? '#a3a3a3' : '#6b7280'
            }} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 12px 12px 45px',
                border: `2px solid ${isDarkMode ? '#2d2d2d' : '#e5e7eb'}`,
                borderRadius: '8px',
                fontSize: '16px',
                outline: 'none',
                boxSizing: 'border-box',
                backgroundColor: isDarkMode ? '#1e1e1e' : 'white',
                color: isDarkMode ? '#e5e5e5' : '#000'
              }}
            />
          </div>

          {/* Categories */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '8px 16px',
                  backgroundColor: selectedCategory === cat ? '#2d8f2d' : (isDarkMode ? '#2d2d2d' : '#f3f4f6'),
                  color: selectedCategory === cat ? 'white' : (isDarkMode ? '#e5e5e5' : '#374151'),
                  border: 'none',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '500',
                  textTransform: 'capitalize'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div style={{
          marginBottom: '20px',
          color: isDarkMode ? '#a3a3a3' : '#6b7280',
          fontSize: '14px'
        }}>
          Showing {filteredArticles.length} of {articles.length} articles
        </div>

        {/* Articles Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '25px'
        }}>
          {filteredArticles.map(article => (
            <div
              key={article.id}
              style={{
                backgroundColor: isDarkMode ? '#1e1e1e' : 'white',
                borderRadius: '12px',
                boxShadow: isDarkMode ? '0 2px 8px rgba(0,0,0,0.4)' : '0 2px 8px rgba(0,0,0,0.1)',
                overflow: 'hidden',
                cursor: 'pointer',
                border: `1px solid ${isDarkMode ? '#2d2d2d' : '#e5e7eb'}`,
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = isDarkMode ? '0 8px 20px rgba(0,0,0,0.6)' : '0 8px 20px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = isDarkMode ? '0 2px 8px rgba(0,0,0,0.4)' : '0 2px 8px rgba(0,0,0,0.1)';
              }}
            >
              {/* Article Icon */}
              <div style={{
                backgroundColor: isDarkMode ? '#252525' : '#f9fafb',
                padding: '30px',
                textAlign: 'center',
                fontSize: '48px',
                borderBottom: `1px solid ${isDarkMode ? '#2d2d2d' : '#e5e7eb'}`
              }}>
                {article.image}
              </div>

              {/* Article Content */}
              <div style={{ padding: '20px' }}>
                <div style={{
                  display: 'inline-block',
                  backgroundColor: '#dcfce7',
                  color: '#166534',
                  padding: '4px 12px',
                  borderRadius: '12px',
                  fontSize: '12px',
                  fontWeight: '500',
                  marginBottom: '12px'
                }}>
                  {article.category}
                </div>

                <h3 style={{
                  fontSize: '1.2rem',
                  marginBottom: '12px',
                  color: isDarkMode ? '#e5e5e5' : '#1f2937',
                  lineHeight: '1.4'
                }}>
                  {article.title}
                </h3>

                <p style={{
                  fontSize: '0.9rem',
                  color: isDarkMode ? '#a3a3a3' : '#6b7280',
                  marginBottom: '15px',
                  lineHeight: '1.6'
                }}>
                  {article.excerpt}
                </p>

                {/* Meta Info */}
                <div style={{
                  paddingTop: '15px',
                  borderTop: '1px solid #e5e7eb'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    marginBottom: '8px',
                    fontSize: '0.85rem',
                    color: '#6b7280'
                  }}>
                    <User size={14} />
                    <span>{article.author}</span>
                  </div>

                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '0.85rem',
                    color: '#6b7280'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <Calendar size={14} />
                      <span>{article.date}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <Clock size={14} />
                      <span>{article.readTime}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <Eye size={14} />
                      <span>{article.views}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '60px 20px',
            color: '#6b7280'
          }}>
            <h3>No articles found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Articles;