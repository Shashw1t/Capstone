import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Target, Zap, Trophy, ArrowRight, CheckCircle } from 'lucide-react';
import './PracticeSection.css';

const PracticeSection = () => {
  const practiceCategories = [
    {
      icon: <Code size={32} />,
      title: "Data Structures",
      problems: 2500,
      difficulty: "Easy to Hard",
      color: "#3498db",
      topics: ["Arrays", "Linked Lists", "Stacks", "Trees", "Graphs"]
    },
    {
      icon: <Target size={32} />,
      title: "Algorithms",
      problems: 1800,
      difficulty: "Medium to Hard",
      color: "#e74c3c",
      topics: ["Sorting", "Searching", "DP", "Greedy", "Backtracking"]
    },
    {
      icon: <Zap size={32} />,
      title: "Interview Prep",
      problems: 1200,
      difficulty: "All Levels",
      color: "#f39c12",
      topics: ["Top Questions", "Company Wise", "Mock Tests", "System Design"]
    },
    {
      icon: <Trophy size={32} />,
      title: "Competitive",
      problems: 950,
      difficulty: "Hard",
      color: "#9b59b6",
      topics: ["Contests", "Math", "Game Theory", "Advanced DS", "Optimization"]
    }
  ];

  const recentProblems = [
    {
      title: "Two Sum",
      difficulty: "Easy",
      acceptance: "89%",
      tags: ["Array", "Hash Table"]
    },
    {
      title: "Longest Palindromic Substring",
      difficulty: "Medium",
      acceptance: "67%",
      tags: ["String", "Dynamic Programming"]
    },
    {
      title: "Merge k Sorted Lists",
      difficulty: "Hard",
      acceptance: "45%",
      tags: ["Linked List", "Heap", "Merge Sort"]
    },
    {
      title: "Binary Tree Maximum Path Sum",
      difficulty: "Hard",
      acceptance: "38%",
      tags: ["Tree", "Depth-First Search"]
    }
  ];

  return (
    <section className="practice-section section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Practice Coding Problems</h2>
          <p className="section-subtitle">
            Sharpen your programming skills with thousands of problems across different topics
          </p>
        </div>

        <div className="practice-content">
          {/* Categories Grid */}
          <div className="categories-grid">
            {practiceCategories.map((category, index) => (
              <div key={index} className="category-card" style={{'--accent-color': category.color}}>
                <div className="category-icon" style={{backgroundColor: category.color}}>
                  {category.icon}
                </div>
                <div className="category-info">
                  <h3>{category.title}</h3>
                  <p className="problem-count">{category.problems}+ Problems</p>
                  <p className="difficulty">Difficulty: {category.difficulty}</p>
                  <div className="topics-list">
                    {category.topics.map((topic, idx) => (
                      <span key={idx} className="topic-tag">{topic}</span>
                    ))}
                  </div>
                  <Link to={`/practice/${category.title.toLowerCase().replace(' ', '-')}`} className="practice-btn">
                    Start Practicing <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Practice Features */}
          <div className="practice-features">
            <div className="features-content">
              <h3>Why Practice with GeeksforGeeks?</h3>
              <div className="features-list">
                <div className="feature-item">
                  <CheckCircle size={20} color="#2f8d46" />
                  <div>
                    <h4>Comprehensive Problem Set</h4>
                    <p>5000+ carefully curated problems covering all major topics</p>
                  </div>
                </div>
                <div className="feature-item">
                  <CheckCircle size={20} color="#2f8d46" />
                  <div>
                    <h4>Multiple Programming Languages</h4>
                    <p>Solve in C++, Java, Python, JavaScript, and more</p>
                  </div>
                </div>
                <div className="feature-item">
                  <CheckCircle size={20} color="#2f8d46" />
                  <div>
                    <h4>Detailed Explanations</h4>
                    <p>Step-by-step solutions with time & space complexity analysis</p>
                  </div>
                </div>
                <div className="feature-item">
                  <CheckCircle size={20} color="#2f8d46" />
                  <div>
                    <h4>Progress Tracking</h4>
                    <p>Monitor your improvement with detailed analytics</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Problems */}
            <div className="recent-problems">
              <h4>Recently Added Problems</h4>
              <div className="problems-list">
                {recentProblems.map((problem, index) => (
                  <div key={index} className="problem-item">
                    <div className="problem-info">
                      <h5>{problem.title}</h5>
                      <div className="problem-meta">
                        <span className={`difficulty ${problem.difficulty.toLowerCase()}`}>
                          {problem.difficulty}
                        </span>
                        <span className="acceptance">Acceptance: {problem.acceptance}</span>
                      </div>
                      <div className="problem-tags">
                        {problem.tags.map((tag, idx) => (
                          <span key={idx} className="tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <Link to={`/practice/problem/${index + 1}`} className="solve-btn">
                      Solve
                    </Link>
                  </div>
                ))}
              </div>
              <Link to="/practice" className="view-all-problems">
                View All Problems <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Practice Stats */}
        <div className="practice-stats">
          <div className="stat-item">
            <h4>Daily Challenge</h4>
            <p>Solve today's problem and maintain your streak</p>
            <Link to="/practice/daily" className="btn btn-primary">Take Challenge</Link>
          </div>
          <div className="stat-item">
            <h4>Weekly Contest</h4>
            <p>Compete with thousands of programmers worldwide</p>
            <Link to="/contest/weekly" className="btn btn-secondary">Join Contest</Link>
          </div>
          <div className="stat-item">
            <h4>Interview Prep</h4>
            <p>Get ready for your dream job with curated questions</p>
            <Link to="/practice/interview" className="btn btn-primary">Start Prep</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeSection;