import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, Star, ArrowRight, PlayCircle } from 'lucide-react';
import './PopularCourses.css';

const PopularCourses = () => {
  const courses = [
    {
      id: 1,
      title: "Complete Data Structures & Algorithms",
      description: "Master DSA with comprehensive coverage from basics to advanced topics including trees, graphs, dynamic programming, and more.",
      image: "/course-dsa.jpg",
      instructor: "Sandeep Jain",
      rating: 4.8,
      students: 125000,
      duration: "40 hours",
      price: "₹2,999",
      originalPrice: "₹4,999",
      level: "Beginner to Advanced",
      highlights: ["Live Classes", "Doubt Support", "Certificate", "Interview Prep"]
    },
    {
      id: 2,
      title: "Full Stack Web Development",
      description: "Learn MERN stack development from scratch. Build real-world projects with React, Node.js, MongoDB, and Express.",
      image: "/course-web.jpg",
      instructor: "Akash Sharma",
      rating: 4.7,
      students: 89000,
      duration: "60 hours",
      price: "₹3,499",
      originalPrice: "₹5,999",
      level: "Beginner",
      highlights: ["Projects", "Live Sessions", "Job Assistance", "Lifetime Access"]
    },
    {
      id: 3,
      title: "System Design Masterclass",
      description: "Learn to design scalable systems. Cover load balancing, databases, caching, microservices, and distributed systems.",
      image: "/course-system.jpg",
      instructor: "Prateek Narang",
      rating: 4.9,
      students: 67000,
      duration: "35 hours",
      price: "₹4,999",
      originalPrice: "₹7,999",
      level: "Intermediate",
      highlights: ["Case Studies", "Real Examples", "Interview Focused", "Expert Support"]
    },
    {
      id: 4,
      title: "Machine Learning & AI",
      description: "Complete ML course covering supervised/unsupervised learning, neural networks, deep learning, and practical applications.",
      image: "/course-ml.jpg",
      instructor: "Dr. Raj Kumar",
      rating: 4.6,
      students: 54000,
      duration: "45 hours",
      price: "₹3,999",
      originalPrice: "₹6,499",
      level: "Intermediate",
      highlights: ["Hands-on Projects", "Python & R", "Industry Cases", "Research Papers"]
    },
    {
      id: 5,
      title: "Competitive Programming",
      description: "Master competitive programming with advanced algorithms, optimization techniques, and contest strategies.",
      image: "/course-cp.jpg",
      instructor: "Striver",
      rating: 4.8,
      students: 78000,
      duration: "30 hours",
      price: "₹2,499",
      originalPrice: "₹3,999",
      level: "Advanced",
      highlights: ["Contest Problems", "Live Contests", "Ranking System", "Practice Platform"]
    },
    {
      id: 6,
      title: "Android Development",
      description: "Build native Android apps using Kotlin and Java. Learn UI/UX design, APIs, databases, and play store publishing.",
      image: "/course-android.jpg",
      instructor: "Mohit Sharma",
      rating: 4.5,
      students: 42000,
      duration: "50 hours",
      price: "₹3,299",
      originalPrice: "₹5,499",
      level: "Beginner",
      highlights: ["Real Apps", "Kotlin & Java", "Material Design", "Publishing Guide"]
    }
  ];

  return (
    <section className="popular-courses section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Popular Courses</h2>
          <p className="section-subtitle">
            Choose from our most popular courses designed by industry experts
          </p>
          <Link to="/courses" className="view-all-btn">
            View All Courses <ArrowRight size={16} />
          </Link>
        </div>

        <div className="courses-grid">
          {courses.map(course => (
            <div key={course.id} className="course-card">
              <div className="course-image">
                <img 
                  src={course.image} 
                  alt={course.title}
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/400x240/2f8d46/ffffff?text=${encodeURIComponent(course.title)}`;
                  }}
                />
                <div className="course-overlay">
                  <button className="play-btn">
                    <PlayCircle size={40} />
                  </button>
                </div>
                <div className="course-level">{course.level}</div>
              </div>

              <div className="course-content">
                <div className="course-header">
                  <h3 className="course-title">{course.title}</h3>
                  <div className="course-rating">
                    <Star fill="#ffc107" color="#ffc107" size={16} />
                    <span>{course.rating}</span>
                  </div>
                </div>

                <p className="course-description">{course.description}</p>

                <div className="course-meta">
                  <div className="meta-item">
                    <Clock size={16} />
                    <span>{course.duration}</span>
                  </div>
                  <div className="meta-item">
                    <Users size={16} />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                </div>

                <div className="course-highlights">
                  {course.highlights.map((highlight, index) => (
                    <span key={index} className="highlight-tag">{highlight}</span>
                  ))}
                </div>

                <div className="course-instructor">
                  <span>By <strong>{course.instructor}</strong></span>
                </div>

                <div className="course-footer">
                  <div className="course-price">
                    <span className="current-price">{course.price}</span>
                    <span className="original-price">{course.originalPrice}</span>
                  </div>
                  <Link to={`/courses/${course.id}`} className="btn btn-primary">
                    Enroll Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="course-features">
          <div className="feature">
            <h4>🎓 Expert Instructors</h4>
            <p>Learn from industry professionals</p>
          </div>
          <div className="feature">
            <h4>📱 Mobile Learning</h4>
            <p>Access courses anytime, anywhere</p>
          </div>
          <div className="feature">
            <h4>🏆 Certificates</h4>
            <p>Get recognized for your achievements</p>
          </div>
          <div className="feature">
            <h4>💼 Job Support</h4>
            <p>Career guidance and placement assistance</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;