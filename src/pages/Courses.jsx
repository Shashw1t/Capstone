import React, { useState } from 'react';
import { Star, Clock, Users, Search } from 'lucide-react';
import './Pages.css';

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const courses = [
    {
      id: 1,
      title: "Data Structures and Algorithms - Self Paced",
      instructor: "Sandeep Jain",
      rating: 4.8,
      reviews: 15000,
      students: 125000,
      duration: "12 weeks",
      price: "₹4,999",
      originalPrice: "₹9,999",
      category: "dsa",
      image: "🎯",
      description: "Master DSA concepts with 180+ problems, video lectures, and interview preparation."
    },
    {
      id: 2,
      title: "Complete Machine Learning & Data Science",
      instructor: "Harikrishna Patel",
      rating: 4.9,
      reviews: 12000,
      students: 89000,
      duration: "16 weeks",
      price: "₹6,999",
      originalPrice: "₹14,999",
      category: "ml",
      image: "🤖",
      description: "Learn ML from scratch with hands-on projects covering supervised, unsupervised learning, and neural networks."
    },
    {
      id: 3,
      title: "Full Stack Web Development - MERN Stack",
      instructor: "Priya Sharma",
      rating: 4.7,
      reviews: 18000,
      students: 156000,
      duration: "20 weeks",
      price: "₹5,999",
      originalPrice: "₹12,999",
      category: "webdev",
      image: "💻",
      description: "Become a Full Stack Developer. Build real-world applications with MongoDB, Express, React, and Node.js."
    },
    {
      id: 4,
      title: "System Design for Interviews",
      instructor: "Rahul Verma",
      rating: 4.9,
      reviews: 8500,
      students: 67000,
      duration: "8 weeks",
      price: "₹7,999",
      originalPrice: "₹15,999",
      category: "system-design",
      image: "🏗️",
      description: "Master system design concepts with real-world examples. Design scalable systems like Netflix and WhatsApp."
    },
    {
      id: 5,
      title: "Competitive Programming - Complete Course",
      instructor: "Anuj Bhaiya",
      rating: 4.8,
      reviews: 11000,
      students: 98000,
      duration: "14 weeks",
      price: "₹4,499",
      originalPrice: "₹8,999",
      category: "cp",
      image: "🏆",
      description: "Excel in competitive programming with 500+ problems, advanced algorithms, and contest strategies."
    },
    {
      id: 6,
      title: "DevOps Engineering - Complete Bootcamp",
      instructor: "Karan Singh",
      rating: 4.7,
      reviews: 7200,
      students: 54000,
      duration: "12 weeks",
      price: "₹6,499",
      originalPrice: "₹12,999",
      category: "devops",
      image: "⚙️",
      description: "Master DevOps with Docker, Kubernetes, Jenkins, AWS and automate deployment pipelines."
    },
    {
      id: 7,
      title: "Android App Development with Kotlin",
      instructor: "Ayushi Gupta",
      rating: 4.6,
      reviews: 9500,
      students: 72000,
      duration: "16 weeks",
      price: "₹5,499",
      originalPrice: "₹10,999",
      category: "mobile",
      image: "📱",
      description: "Build professional Android apps. Learn Kotlin, UI design, Firebase and publish on Play Store."
    },
    {
      id: 8,
      title: "Python Programming - Zero to Hero",
      instructor: "Ravi Kumar",
      rating: 4.8,
      reviews: 22000,
      students: 145000,
      duration: "10 weeks",
      price: "₹3,999",
      originalPrice: "₹7,999",
      category: "programming",
      image: "🐍",
      description: "Learn Python from scratch with OOP, web scraping, automation and build real applications."
    },
    {
      id: 9,
      title: "Cloud Computing with AWS",
      instructor: "Neha Agarwal",
      rating: 4.7,
      reviews: 8900,
      students: 61000,
      duration: "12 weeks",
      price: "₹6,999",
      originalPrice: "₹13,999",
      category: "cloud",
      image: "☁️",
      description: "Master AWS services - EC2, S3, Lambda, RDS. Prepare for AWS certification with hands-on labs."
    },
    {
      id: 10,
      title: "Blockchain & Smart Contracts",
      instructor: "Vikram Malhotra",
      rating: 4.9,
      reviews: 6700,
      students: 43000,
      duration: "14 weeks",
      price: "₹8,999",
      originalPrice: "₹17,999",
      category: "blockchain",
      image: "⛓️",
      description: "Build DApps with blockchain. Learn Solidity, smart contracts, Web3.js and create your crypto."
    },
    {
      id: 11,
      title: "Cybersecurity Fundamentals",
      instructor: "Amit Joshi",
      rating: 4.6,
      reviews: 5800,
      students: 38000,
      duration: "10 weeks",
      price: "₹5,999",
      originalPrice: "₹11,999",
      category: "security",
      image: "🔒",
      description: "Learn cybersecurity essentials - ethical hacking, network security, and penetration testing."
    },
    {
      id: 12,
      title: "UI/UX Design Masterclass",
      instructor: "Sneha Reddy",
      rating: 4.8,
      reviews: 7100,
      students: 52000,
      duration: "8 weeks",
      price: "₹4,999",
      originalPrice: "₹9,999",
      category: "design",
      image: "🎨",
      description: "Master UI/UX design with Figma, Adobe XD, user research, prototyping and build your portfolio."
    }
  ];

  const categories = [
    { id: 'all', name: 'All Courses' },
    { id: 'dsa', name: 'DSA' },
    { id: 'webdev', name: 'Web Dev' },
    { id: 'ml', name: 'ML/AI' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'cloud', name: 'Cloud' }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="page-container">
      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, #2d8f2d 0%, #1a5c1a 100%)',
        color: 'white',
        padding: '60px 20px',
        textAlign: 'center',
        marginBottom: '40px',
        borderRadius: '12px'
      }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '15px', fontWeight: 'bold' }}>
          Learn from Industry Experts
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>
          Master in-demand skills with our comprehensive courses
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '25px', flexWrap: 'wrap' }}>
          <div><strong>150+</strong> Courses</div>
          <div><strong>500K+</strong> Students</div>
          <div><strong>4.7★</strong> Rating</div>
        </div>
      </div>

      {/* Search */}
      <div style={{ marginBottom: '30px' }}>
        <div style={{ position: 'relative', marginBottom: '20px' }}>
          <Search size={20} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#6b7280' }} />
          <input
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 12px 12px 45px',
              border: '2px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '16px',
              outline: 'none',
              boxSizing: 'border-box'
            }}
          />
        </div>

        {/* Categories */}
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              style={{
                padding: '8px 16px',
                backgroundColor: selectedCategory === cat.id ? '#2d8f2d' : '#f3f4f6',
                color: selectedCategory === cat.id ? 'white' : '#374151',
                border: 'none',
                borderRadius: '20px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '500'
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Courses Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
        gap: '25px'
      }}>
        {filteredCourses.map(course => (
          <div
            key={course.id}
            style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              overflow: 'hidden',
              cursor: 'pointer',
              border: '1px solid #e5e7eb',
              transition: 'transform 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{
              backgroundColor: '#f9fafb',
              padding: '40px',
              textAlign: 'center',
              fontSize: '60px',
              borderBottom: '1px solid #e5e7eb'
            }}>
              {course.image}
            </div>

            <div style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '10px', color: '#1f2937' }}>
                {course.title}
              </h3>

              <p style={{ fontSize: '0.9rem', color: '#6b7280', marginBottom: '12px' }}>
                By {course.instructor}
              </p>

              <p style={{ fontSize: '0.85rem', color: '#4b5563', marginBottom: '15px', lineHeight: '1.5' }}>
                {course.description}
              </p>

              <div style={{
                display: 'flex',
                gap: '15px',
                marginBottom: '15px',
                fontSize: '0.85rem',
                color: '#6b7280'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <Star size={14} fill="#fbbf24" color="#fbbf24" />
                  <span>{course.rating} ({(course.reviews/1000).toFixed(1)}k)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <Users size={14} />
                  <span>{(course.students / 1000).toFixed(0)}K</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <Clock size={14} />
                  <span>{course.duration}</span>
                </div>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '15px',
                borderTop: '1px solid #e5e7eb'
              }}>
                <div>
                  <span style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#2d8f2d' }}>
                    {course.price}
                  </span>
                  <span style={{
                    fontSize: '0.9rem',
                    color: '#9ca3af',
                    textDecoration: 'line-through',
                    marginLeft: '8px'
                  }}>
                    {course.originalPrice}
                  </span>
                </div>
                <button style={{
                  padding: '8px 20px',
                  backgroundColor: '#2d8f2d',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}>
                  Enroll
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;