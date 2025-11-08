import React, { useState } from 'react';
import { Clock, Calendar, Trophy, Users, DollarSign, Target, TrendingUp, Award, Search, Filter } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Contest = () => {
  const { isDarkMode } = useTheme();
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const contests = [
    {
      id: 1,
      name: "Weekly Contest #127",
      description: "4 challenging problems covering arrays, trees, and dynamic programming",
      duration: "90 minutes",
      startTime: "Starts in 2 days",
      participants: 1520,
      problems: 4,
      difficulty: "Medium",
      prize: "Certificates",
      status: "Upcoming",
      category: "Weekly",
      color: "#2d8f2d",
      rating: "1200-1800"
    },
    {
      id: 2,
      name: "Biweekly Contest #89",
      description: "Extended contest with complex algorithmic challenges and optimization problems",
      duration: "105 minutes",
      startTime: "Starts in 5 days",
      participants: 890,
      problems: 4,
      difficulty: "Hard",
      prize: "₹10,000 Pool",
      status: "Upcoming",
      category: "Biweekly",
      color: "#f59e0b",
      rating: "1400-2000"
    },
    {
      id: 3,
      name: "Monthly Challenge",
      description: "Premium monthly contest with cash prizes and certifications for top performers",
      duration: "3 hours",
      startTime: "Starts in 1 week",
      participants: 2580,
      problems: 6,
      difficulty: "Hard",
      prize: "₹50,000 Pool",
      status: "Upcoming",
      category: "Monthly",
      color: "#dc2626",
      rating: "1600-2200"
    },
    {
      id: 4,
      name: "Beginner's Sprint #45",
      description: "Perfect for newcomers to competitive programming. Easy to medium problems",
      duration: "60 minutes",
      startTime: "Live Now",
      participants: 3420,
      problems: 3,
      difficulty: "Easy",
      prize: "Badges",
      status: "Live",
      category: "Beginner",
      color: "#10b981",
      rating: "800-1200"
    },
    {
      id: 5,
      name: "DSA Championship 2024",
      description: "Grand finale with the toughest data structure and algorithm problems",
      duration: "4 hours",
      startTime: "Starts Nov 15",
      participants: 5680,
      problems: 8,
      difficulty: "Expert",
      prize: "₹1,00,000 Pool",
      status: "Upcoming",
      category: "Championship",
      color: "#8b5cf6",
      rating: "1800-2500"
    },
    {
      id: 6,
      name: "Speed Coding Battle",
      description: "Fast-paced contest testing coding speed and accuracy under time pressure",
      duration: "45 minutes",
      startTime: "Starts Tomorrow",
      participants: 2140,
      problems: 5,
      difficulty: "Medium",
      prize: "₹15,000 Pool",
      status: "Upcoming",
      category: "Special",
      color: "#06b6d4",
      rating: "1200-1600"
    },
    {
      id: 7,
      name: "Graph Theory Marathon",
      description: "Specialized contest focused on graph algorithms and network problems",
      duration: "2.5 hours",
      startTime: "Ended 1 day ago",
      participants: 1890,
      problems: 5,
      difficulty: "Hard",
      prize: "₹20,000 Pool",
      status: "Ended",
      category: "Themed",
      color: "#6b7280",
      rating: "1500-2000"
    },
    {
      id: 8,
      name: "Dynamic Programming Special",
      description: "Master DP concepts with problems ranging from basic to advanced optimization",
      duration: "2 hours",
      startTime: "Starts in 3 days",
      participants: 1670,
      problems: 4,
      difficulty: "Medium",
      prize: "Certificates",
      status: "Upcoming",
      category: "Themed",
      color: "#f59e0b",
      rating: "1300-1800"
    },
    {
      id: 9,
      name: "Array Manipulation Contest",
      description: "Focus on array-based problems including subarrays, sliding window, and two pointers",
      duration: "90 minutes",
      startTime: "Starts in 4 days",
      participants: 2340,
      problems: 4,
      difficulty: "Easy",
      prize: "Badges",
      status: "Upcoming",
      category: "Themed",
      color: "#10b981",
      rating: "900-1400"
    },
    {
      id: 10,
      name: "String Algorithms Battle",
      description: "String manipulation, pattern matching, and advanced string techniques",
      duration: "2 hours",
      startTime: "Starts in 6 days",
      participants: 1450,
      problems: 4,
      difficulty: "Medium",
      prize: "₹8,000 Pool",
      status: "Upcoming",
      category: "Themed",
      color: "#f59e0b",
      rating: "1200-1700"
    },
    {
      id: 11,
      name: "Binary Tree Challenge",
      description: "Tree traversals, BST operations, and complex tree-based algorithms",
      duration: "2 hours",
      startTime: "Live Now",
      participants: 1980,
      problems: 5,
      difficulty: "Medium",
      prize: "Certificates",
      status: "Live",
      category: "Themed",
      color: "#2d8f2d",
      rating: "1300-1800"
    },
    {
      id: 12,
      name: "Backtracking Bonanza",
      description: "Master backtracking with problems on permutations, combinations, and puzzles",
      duration: "2.5 hours",
      startTime: "Starts in 8 days",
      participants: 1120,
      problems: 4,
      difficulty: "Hard",
      prize: "₹12,000 Pool",
      status: "Upcoming",
      category: "Themed",
      color: "#dc2626",
      rating: "1500-2100"
    },
    {
      id: 13,
      name: "Greedy Algorithms Showdown",
      description: "Optimal solution finding with greedy approach and activity selection problems",
      duration: "90 minutes",
      startTime: "Ended 2 days ago",
      participants: 1560,
      problems: 4,
      difficulty: "Medium",
      prize: "Certificates",
      status: "Ended",
      category: "Themed",
      color: "#6b7280",
      rating: "1200-1700"
    },
    {
      id: 14,
      name: "Bit Manipulation Magic",
      description: "Bitwise operations, XOR tricks, and bit-level problem solving",
      duration: "90 minutes",
      startTime: "Starts in 10 days",
      participants: 980,
      problems: 3,
      difficulty: "Medium",
      prize: "Badges",
      status: "Upcoming",
      category: "Themed",
      color: "#06b6d4",
      rating: "1300-1800"
    },
    {
      id: 15,
      name: "Heap & Priority Queue Contest",
      description: "Problems involving heaps, priority queues, and median finding techniques",
      duration: "2 hours",
      startTime: "Starts in 12 days",
      participants: 1340,
      problems: 4,
      difficulty: "Medium",
      prize: "₹10,000 Pool",
      status: "Upcoming",
      category: "Themed",
      color: "#f59e0b",
      rating: "1400-1900"
    },
    {
      id: 16,
      name: "Weekly Contest #128",
      description: "Mix of algorithmic challenges covering multiple data structures and techniques",
      duration: "90 minutes",
      startTime: "Starts in 9 days",
      participants: 1680,
      problems: 4,
      difficulty: "Medium",
      prize: "Certificates",
      status: "Upcoming",
      category: "Weekly",
      color: "#2d8f2d",
      rating: "1200-1800"
    },
    {
      id: 17,
      name: "College Championship Qualifier",
      description: "Qualifier round for inter-college programming championship with big prizes",
      duration: "3.5 hours",
      startTime: "Starts Nov 20",
      participants: 4520,
      problems: 7,
      difficulty: "Hard",
      prize: "₹75,000 Pool",
      status: "Upcoming",
      category: "Championship",
      color: "#8b5cf6",
      rating: "1600-2300"
    },
    {
      id: 18,
      name: "Matrix Problems Marathon",
      description: "2D arrays, matrix operations, and grid-based problem solving",
      duration: "2 hours",
      startTime: "Ended 3 days ago",
      participants: 1780,
      problems: 4,
      difficulty: "Medium",
      prize: "Certificates",
      status: "Ended",
      category: "Themed",
      color: "#6b7280",
      rating: "1200-1700"
    },
    {
      id: 19,
      name: "Sliding Window Special",
      description: "Master the sliding window technique with varied array and string problems",
      duration: "90 minutes",
      startTime: "Starts in 7 days",
      participants: 1890,
      problems: 4,
      difficulty: "Easy",
      prize: "Badges",
      status: "Upcoming",
      category: "Themed",
      color: "#10b981",
      rating: "1000-1500"
    },
    {
      id: 20,
      name: "Two Pointers Technique Contest",
      description: "Efficient problem solving using two-pointer and multiple-pointer approaches",
      duration: "90 minutes",
      startTime: "Starts in 11 days",
      participants: 1450,
      problems: 4,
      difficulty: "Easy",
      prize: "Badges",
      status: "Upcoming",
      category: "Themed",
      color: "#10b981",
      rating: "1000-1400"
    }
  ];

  const statuses = ['all', 'Live', 'Upcoming', 'Ended'];
  const difficulties = ['all', 'Easy', 'Medium', 'Hard', 'Expert'];

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Easy': return '#10b981';
      case 'Medium': return '#f59e0b';
      case 'Hard': return '#dc2626';
      case 'Expert': return '#8b5cf6';
      default: return '#6b7280';
    }
  };

  const getStatusStyle = (status) => {
    switch(status) {
      case 'Live': return { bg: '#dcfce7', text: '#166534', border: '#86efac' };
      case 'Upcoming': return { bg: '#dbeafe', text: '#1e40af', border: '#93c5fd' };
      case 'Ended': return { bg: '#f3f4f6', text: '#6b7280', border: '#d1d5db' };
      default: return { bg: '#f3f4f6', text: '#6b7280', border: '#d1d5db' };
    }
  };

  const filteredContests = contests.filter(contest => {
    const matchesStatus = selectedStatus === 'all' || contest.status === selectedStatus;
    const matchesDifficulty = selectedDifficulty === 'all' || contest.difficulty === selectedDifficulty;
    const matchesSearch = contest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          contest.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          contest.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesDifficulty && matchesSearch;
  });

  const liveContests = contests.filter(c => c.status === 'Live');

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
        {/* Header */}
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
            🏆 Programming Contests
          </h1>
          <p style={{
            color: '#718096',
            fontSize: '1.1rem'
          }}>
            Participate in {contests.length}+ competitive programming challenges and win prizes
          </p>
        </div>

        {/* Stats Banner */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
          marginBottom: '30px'
        }}>
          <div style={{
            backgroundColor: '#dcfce7',
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'center',
            border: '2px solid #86efac'
          }}>
            <Trophy size={32} color="#16a34a" style={{ margin: '0 auto 10px' }} />
            <h3 style={{ margin: 0, fontSize: '1.8rem', color: '#15803d' }}>{contests.length}+</h3>
            <p style={{ margin: '5px 0 0', color: '#166534' }}>Total Contests</p>
          </div>
          <div style={{
            backgroundColor: '#dbeafe',
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'center',
            border: '2px solid #93c5fd'
          }}>
            <TrendingUp size={32} color="#2563eb" style={{ margin: '0 auto 10px' }} />
            <h3 style={{ margin: 0, fontSize: '1.8rem', color: '#1e40af' }}>{liveContests.length}</h3>
            <p style={{ margin: '5px 0 0', color: '#1e3a8a' }}>Live Contests</p>
          </div>
          <div style={{
            backgroundColor: '#fef3c7',
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'center',
            border: '2px solid #fde047'
          }}>
            <Users size={32} color="#ca8a04" style={{ margin: '0 auto 10px' }} />
            <h3 style={{ margin: 0, fontSize: '1.8rem', color: '#a16207' }}>50K+</h3>
            <p style={{ margin: '5px 0 0', color: '#854d0e' }}>Participants</p>
          </div>
        </div>

        {/* Live Contests Banner */}
        {liveContests.length > 0 && (
          <div style={{
            backgroundColor: '#dcfce7',
            borderLeft: '4px solid #16a34a',
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
              <div style={{
                width: '12px',
                height: '12px',
                backgroundColor: '#16a34a',
                borderRadius: '50%',
                animation: 'pulse 2s infinite'
              }}></div>
              <h3 style={{ margin: 0, color: '#166534', fontWeight: '600' }}>
                {liveContests.length} Contest{liveContests.length > 1 ? 's' : ''} Live Now!
              </h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {liveContests.map(contest => (
                <div key={contest.id} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span style={{ color: '#166534', fontWeight: '500' }}>{contest.name}</span>
                  <button style={{
                    backgroundColor: '#16a34a',
                    color: 'white',
                    padding: '6px 16px',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '14px',
                    cursor: 'pointer',
                    fontWeight: '500'
                  }}>
                    Join Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Search and Filters */}
        <div style={{ marginBottom: '30px' }}>
          {/* Search */}
          <div style={{ position: 'relative', marginBottom: '20px' }}>
            <Search size={20} style={{
              position: 'absolute',
              left: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#6b7280'
            }} />
            <input
              type="text"
              placeholder="Search contests by name or category..."
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

          {/* Filters */}
          <div style={{
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap',
            alignItems: 'center'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Filter size={18} color="#6b7280" />
              <span style={{ color: '#374151', fontWeight: '500' }}>Filters:</span>
            </div>

            {/* Status Buttons */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {statuses.map(status => (
                <button
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: selectedStatus === status ? '#2d8f2d' : '#f3f4f6',
                    color: selectedStatus === status ? 'white' : '#374151',
                    border: 'none',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: '500',
                    textTransform: 'capitalize'
                  }}
                >
                  {status === 'all' ? 'All Status' : status}
                </button>
              ))}
            </div>

            {/* Difficulty Buttons */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {difficulties.map(diff => (
                <button
                  key={diff}
                  onClick={() => setSelectedDifficulty(diff)}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: selectedDifficulty === diff ? getDifficultyColor(diff) : '#f3f4f6',
                    color: selectedDifficulty === diff ? 'white' : '#374151',
                    border: 'none',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: '500',
                    textTransform: 'capitalize'
                  }}
                >
                  {diff === 'all' ? 'All Difficulty' : diff}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div style={{
          marginBottom: '20px',
          color: '#6b7280',
          fontSize: '14px'
        }}>
          Showing {filteredContests.length} of {contests.length} contests
        </div>

        {/* Contests Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '25px'
        }}>
          {filteredContests.map(contest => {
            const statusStyle = getStatusStyle(contest.status);
            return (
              <div
                key={contest.id}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  padding: '25px',
                  borderTop: `4px solid ${contest.color}`,
                  cursor: 'pointer',
                  transition: 'transform 0.2s, box-shadow 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                }}
              >
                {/* Header with Status and Category */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '12px'
                }}>
                  <div style={{
                    backgroundColor: statusStyle.bg,
                    color: statusStyle.text,
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: '600',
                    border: `1px solid ${statusStyle.border}`
                  }}>
                    {contest.status}
                  </div>
                  <div style={{
                    backgroundColor: '#f3f4f6',
                    color: '#6b7280',
                    padding: '4px 10px',
                    borderRadius: '10px',
                    fontSize: '11px',
                    fontWeight: '500'
                  }}>
                    {contest.category}
                  </div>
                </div>

                {/* Contest Name */}
                <h3 style={{
                  color: contest.color,
                  fontSize: '1.3rem',
                  marginBottom: '10px',
                  fontWeight: '600'
                }}>
                  {contest.name}
                </h3>

                {/* Description */}
                <p style={{
                  color: '#6b7280',
                  marginBottom: '15px',
                  lineHeight: '1.6',
                  fontSize: '0.9rem'
                }}>
                  {contest.description}
                </p>

                {/* Contest Details */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '10px',
                  marginBottom: '15px',
                  fontSize: '0.85rem',
                  color: '#6b7280'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Clock size={14} />
                    <span>{contest.duration}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Calendar size={14} />
                    <span>{contest.startTime}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Target size={14} />
                    <span>{contest.problems} problems</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Users size={14} />
                    <span>{contest.participants}+ joined</span>
                  </div>
                </div>

                {/* Difficulty and Rating */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '15px',
                  paddingBottom: '15px',
                  borderBottom: '1px solid #e5e7eb'
                }}>
                  <div style={{
                    display: 'inline-block',
                    backgroundColor: getDifficultyColor(contest.difficulty) + '15',
                    color: getDifficultyColor(contest.difficulty),
                    padding: '6px 12px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: '600'
                  }}>
                    {contest.difficulty}
                  </div>
                  <div style={{
                    fontSize: '12px',
                    color: '#6b7280',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <TrendingUp size={14} />
                    Rating: {contest.rating}
                  </div>
                </div>

                {/* Prize */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '15px',
                  backgroundColor: '#fef3c7',
                  padding: '10px',
                  borderRadius: '8px'
                }}>
                  {contest.prize.includes('₹') ? (
                    <DollarSign size={18} color="#92400e" />
                  ) : (
                    <Award size={18} color="#92400e" />
                  )}
                  <span style={{
                    color: '#92400e',
                    fontWeight: '600',
                    fontSize: '0.95rem'
                  }}>
                    Prize: {contest.prize}
                  </span>
                </div>

                {/* Register Button */}
                <button 
                  style={{
                    backgroundColor: contest.status === 'Ended' ? '#9ca3af' : contest.color,
                    color: 'white',
                    padding: '12px 24px',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: contest.status === 'Ended' ? 'not-allowed' : 'pointer',
                    width: '100%',
                    fontWeight: '600',
                    fontSize: '0.95rem',
                    transition: 'background-color 0.2s'
                  }}
                  disabled={contest.status === 'Ended'}
                  onMouseEnter={(e) => {
                    if (contest.status !== 'Ended') {
                      e.currentTarget.style.opacity = '0.9';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '1';
                  }}
                >
                  {contest.status === 'Live' ? 'Join Now' : 
                   contest.status === 'Ended' ? 'View Results' : 'Register Now'}
                </button>
              </div>
            );
          })}
        </div>

        {filteredContests.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '60px 20px',
            color: '#6b7280'
          }}>
            <h3>No contests found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contest;