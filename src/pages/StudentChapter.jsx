import React, { useState } from 'react';
import { Users, Calendar, Award, Search, MapPin, Star, TrendingUp, BookOpen, Code, Trophy } from 'lucide-react';

const StudentChapter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTier, setSelectedTier] = useState('all');

  const chapters = [
    {
      id: 1,
      name: "IIT Delhi Chapter",
      college: "Indian Institute of Technology, Delhi",
      location: "New Delhi",
      description: "Leading computer science community with regular coding contests and tech talks",
      members: 520,
      events: "Weekly",
      tier: "Platinum",
      rating: 4.9,
      activities: ["Coding Contests", "Workshops", "Hackathons"],
      established: "2018",
      achievements: ["Best Chapter 2023", "Most Active Community"]
    },
    {
      id: 2,
      name: "IIT Bombay Chapter",
      college: "Indian Institute of Technology, Bombay",
      location: "Mumbai",
      description: "Most active chapter with hackathons, workshops, and industry mentorship sessions",
      members: 780,
      events: "Daily",
      tier: "Platinum",
      rating: 4.9,
      activities: ["Hackathons", "Industry Talks", "Research Seminars"],
      established: "2017",
      achievements: ["Highest Participation", "Innovation Award"]
    },
    {
      id: 3,
      name: "BITS Pilani Chapter",
      college: "Birla Institute of Technology and Science",
      location: "Pilani",
      description: "Growing community focused on placement preparation and competitive programming",
      members: 420,
      events: "Bi-weekly",
      tier: "Gold",
      rating: 4.7,
      activities: ["Mock Interviews", "DSA Sessions", "Career Guidance"],
      established: "2019",
      achievements: ["Fastest Growing Chapter"]
    },
    {
      id: 4,
      name: "IIT Madras Chapter",
      college: "Indian Institute of Technology, Madras",
      location: "Chennai",
      description: "Excellence in research and development with focus on AI/ML projects",
      members: 650,
      events: "Weekly",
      tier: "Platinum",
      rating: 4.8,
      activities: ["ML Workshops", "Research Projects", "Tech Symposium"],
      established: "2018",
      achievements: ["Research Excellence Award"]
    },
    {
      id: 5,
      name: "IIT Kanpur Chapter",
      college: "Indian Institute of Technology, Kanpur",
      location: "Kanpur",
      description: "Strong competitive programming culture with ICPC training and contests",
      members: 480,
      events: "Weekly",
      tier: "Platinum",
      rating: 4.8,
      activities: ["ICPC Training", "Contests", "Algorithm Classes"],
      established: "2018",
      achievements: ["ICPC Regional Winners"]
    },
    {
      id: 6,
      name: "NIT Trichy Chapter",
      college: "National Institute of Technology, Tiruchirappalli",
      location: "Tiruchirappalli",
      description: "Vibrant community with focus on web development and open source",
      members: 380,
      events: "Bi-weekly",
      tier: "Gold",
      rating: 4.6,
      activities: ["Web Dev", "Open Source", "DevOps"],
      established: "2019",
      achievements: ["Open Source Contributions"]
    },
    {
      id: 7,
      name: "IIIT Hyderabad Chapter",
      college: "International Institute of Information Technology",
      location: "Hyderabad",
      description: "Premier chapter for cybersecurity and blockchain technology enthusiasts",
      members: 540,
      events: "Weekly",
      tier: "Platinum",
      rating: 4.9,
      activities: ["Security Workshops", "Blockchain", "CTF Competitions"],
      established: "2018",
      achievements: ["Cybersecurity Excellence"]
    },
    {
      id: 8,
      name: "DTU Chapter",
      college: "Delhi Technological University",
      location: "New Delhi",
      description: "Active chapter with strong focus on mobile app development and UI/UX",
      members: 460,
      events: "Weekly",
      tier: "Gold",
      rating: 4.7,
      activities: ["App Development", "UI/UX Design", "Product Management"],
      established: "2019",
      achievements: ["Best App Projects"]
    },
    {
      id: 9,
      name: "VIT Vellore Chapter",
      college: "Vellore Institute of Technology",
      location: "Vellore",
      description: "Large community organizing mega hackathons and tech fests",
      members: 820,
      events: "Weekly",
      tier: "Gold",
      rating: 4.6,
      activities: ["Mega Hackathons", "Tech Fests", "Startup Bootcamp"],
      established: "2019",
      achievements: ["Largest Student Community"]
    },
    {
      id: 10,
      name: "NIT Surathkal Chapter",
      college: "National Institute of Technology Karnataka",
      location: "Surathkal",
      description: "Dynamic chapter with emphasis on full-stack development and cloud computing",
      members: 340,
      events: "Bi-weekly",
      tier: "Gold",
      rating: 4.5,
      activities: ["Full Stack Dev", "Cloud Computing", "DevOps"],
      established: "2020",
      achievements: ["Best Technical Projects"]
    },
    {
      id: 11,
      name: "IIIT Delhi Chapter",
      college: "Indraprastha Institute of Information Technology",
      location: "New Delhi",
      description: "Research-focused chapter with AI/ML study groups and paper discussions",
      members: 410,
      events: "Weekly",
      tier: "Gold",
      rating: 4.7,
      activities: ["AI/ML Research", "Paper Discussions", "Kaggle Competitions"],
      established: "2019",
      achievements: ["Research Publications"]
    },
    {
      id: 12,
      name: "NSIT Chapter",
      college: "Netaji Subhas University of Technology",
      location: "New Delhi",
      description: "Growing chapter with focus on data science and analytics",
      members: 290,
      events: "Bi-weekly",
      tier: "Silver",
      rating: 4.5,
      activities: ["Data Science", "Analytics", "Python Workshops"],
      established: "2020",
      achievements: ["Data Science Projects"]
    },
    {
      id: 13,
      name: "IIT Roorkee Chapter",
      college: "Indian Institute of Technology, Roorkee",
      location: "Roorkee",
      description: "Strong chapter with excellence in software engineering and system design",
      members: 510,
      events: "Weekly",
      tier: "Platinum",
      rating: 4.8,
      activities: ["System Design", "Software Engineering", "Architecture"],
      established: "2018",
      achievements: ["System Design Excellence"]
    },
    {
      id: 14,
      name: "BITS Goa Chapter",
      college: "Birla Institute of Technology and Science, Goa",
      location: "Goa",
      description: "Innovative chapter focusing on IoT and embedded systems",
      members: 280,
      events: "Bi-weekly",
      tier: "Silver",
      rating: 4.4,
      activities: ["IoT Projects", "Embedded Systems", "Hardware"],
      established: "2020",
      achievements: ["IoT Innovation Award"]
    },
    {
      id: 15,
      name: "Manipal Chapter",
      college: "Manipal Institute of Technology",
      location: "Manipal",
      description: "Diverse chapter with activities spanning multiple tech domains",
      members: 560,
      events: "Weekly",
      tier: "Gold",
      rating: 4.6,
      activities: ["Multi-domain", "Tech Talks", "Industry Visits"],
      established: "2019",
      achievements: ["Diverse Technology Excellence"]
    },
    {
      id: 16,
      name: "IIT Kharagpur Chapter",
      college: "Indian Institute of Technology, Kharagpur",
      location: "Kharagpur",
      description: "Historic chapter with strong alumni network and mentorship programs",
      members: 590,
      events: "Weekly",
      tier: "Platinum",
      rating: 4.8,
      activities: ["Alumni Mentorship", "Career Guidance", "Networking"],
      established: "2017",
      achievements: ["Best Alumni Network"]
    },
    {
      id: 17,
      name: "Anna University Chapter",
      college: "Anna University",
      location: "Chennai",
      description: "Large community with focus on placement training and soft skills",
      members: 670,
      events: "Weekly",
      tier: "Gold",
      rating: 4.5,
      activities: ["Placement Training", "Soft Skills", "Resume Building"],
      established: "2019",
      achievements: ["Placement Success Rate"]
    },
    {
      id: 18,
      name: "Jadavpur University Chapter",
      college: "Jadavpur University",
      location: "Kolkata",
      description: "Active chapter with emphasis on competitive programming and contests",
      members: 390,
      events: "Weekly",
      tier: "Gold",
      rating: 4.6,
      activities: ["Competitive Programming", "Weekly Contests", "Training"],
      established: "2019",
      achievements: ["Contest Winners"]
    },
    {
      id: 19,
      name: "PES University Chapter",
      college: "PES University",
      location: "Bangalore",
      description: "Industry-connected chapter with regular startup and corporate visits",
      members: 450,
      events: "Weekly",
      tier: "Gold",
      rating: 4.6,
      activities: ["Industry Visits", "Startup Culture", "Internships"],
      established: "2019",
      achievements: ["Industry Partnerships"]
    },
    {
      id: 20,
      name: "SRM Institute Chapter",
      college: "SRM Institute of Science and Technology",
      location: "Chennai",
      description: "Enthusiastic community organizing workshops and coding bootcamps",
      members: 620,
      events: "Weekly",
      tier: "Gold",
      rating: 4.5,
      activities: ["Workshops", "Bootcamps", "Tech Events"],
      established: "2020",
      achievements: ["Community Engagement"]
    }
  ];

  const tiers = ['all', 'Platinum', 'Gold', 'Silver'];

  const getTierColor = (tier) => {
    switch(tier) {
      case 'Platinum': return { bg: '#e0e7ff', text: '#4338ca', border: '#818cf8' };
      case 'Gold': return { bg: '#fef3c7', text: '#92400e', border: '#fbbf24' };
      case 'Silver': return { bg: '#f3f4f6', text: '#374151', border: '#9ca3af' };
      default: return { bg: '#f3f4f6', text: '#374151', border: '#9ca3af' };
    }
  };

  const filteredChapters = chapters.filter(chapter => {
    const matchesTier = selectedTier === 'all' || chapter.tier === selectedTier;
    const matchesSearch = chapter.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          chapter.college.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          chapter.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTier && matchesSearch;
  });

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
            🎓 Student Chapters
          </h1>
          <p style={{
            color: '#718096',
            fontSize: '1.1rem'
          }}>
            Join {chapters.length}+ GeeksforGeeks student communities at top colleges across India
          </p>
        </div>

        {/* Stats Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
          marginBottom: '40px'
        }}>
          <div style={{
            backgroundColor: '#dcfce7',
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'center',
            border: '2px solid #86efac'
          }}>
            <Users size={32} color="#16a34a" style={{ margin: '0 auto 10px' }} />
            <h3 style={{ margin: 0, fontSize: '1.8rem', color: '#15803d' }}>10K+</h3>
            <p style={{ margin: '5px 0 0', color: '#166534' }}>Active Members</p>
          </div>
          <div style={{
            backgroundColor: '#dbeafe',
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'center',
            border: '2px solid #93c5fd'
          }}>
            <BookOpen size={32} color="#2563eb" style={{ margin: '0 auto 10px' }} />
            <h3 style={{ margin: 0, fontSize: '1.8rem', color: '#1e40af' }}>500+</h3>
            <p style={{ margin: '5px 0 0', color: '#1e3a8a' }}>Events/Month</p>
          </div>
          <div style={{
            backgroundColor: '#fef3c7',
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'center',
            border: '2px solid #fde047'
          }}>
            <Trophy size={32} color="#ca8a04" style={{ margin: '0 auto 10px' }} />
            <h3 style={{ margin: 0, fontSize: '1.8rem', color: '#a16207' }}>{chapters.length}+</h3>
            <p style={{ margin: '5px 0 0', color: '#854d0e' }}>College Chapters</p>
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
              color: '#6b7280'
            }} />
            <input
              type="text"
              placeholder="Search by college name or location..."
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

          {/* Tier Filters */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {tiers.map(tier => (
              <button
                key={tier}
                onClick={() => setSelectedTier(tier)}
                style={{
                  padding: '8px 16px',
                  backgroundColor: selectedTier === tier ? '#2d8f2d' : '#f3f4f6',
                  color: selectedTier === tier ? 'white' : '#374151',
                  border: 'none',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '500',
                  textTransform: 'capitalize'
                }}
              >
                {tier === 'all' ? 'All Tiers' : `${tier} Tier`}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div style={{
          marginBottom: '20px',
          color: '#6b7280',
          fontSize: '14px'
        }}>
          Showing {filteredChapters.length} of {chapters.length} chapters
        </div>

        {/* Chapters Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '25px'
        }}>
          {filteredChapters.map(chapter => {
            const tierColors = getTierColor(chapter.tier);
            return (
              <div
                key={chapter.id}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  padding: '25px',
                  cursor: 'pointer',
                  border: '1px solid #e5e7eb',
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
                {/* Tier Badge */}
                <div style={{
                  display: 'inline-block',
                  backgroundColor: tierColors.bg,
                  color: tierColors.text,
                  padding: '4px 12px',
                  borderRadius: '12px',
                  fontSize: '12px',
                  fontWeight: '600',
                  marginBottom: '12px',
                  border: `1px solid ${tierColors.border}`
                }}>
                  {chapter.tier} Tier
                </div>

                {/* Chapter Name */}
                <h3 style={{
                  color: '#2d8f2d',
                  fontSize: '1.3rem',
                  marginBottom: '8px',
                  fontWeight: '600'
                }}>
                  {chapter.name}
                </h3>

                {/* College Name */}
                <p style={{
                  color: '#374151',
                  fontSize: '0.9rem',
                  marginBottom: '10px',
                  fontWeight: '500'
                }}>
                  {chapter.college}
                </p>

                {/* Location and Rating */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '12px',
                  fontSize: '0.85rem'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    color: '#6b7280'
                  }}>
                    <MapPin size={14} />
                    <span>{chapter.location}</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    color: '#f59e0b'
                  }}>
                    <Star size={14} fill="#f59e0b" />
                    <span style={{ fontWeight: '600' }}>{chapter.rating}</span>
                  </div>
                </div>

                {/* Description */}
                <p style={{
                  color: '#6b7280',
                  marginBottom: '15px',
                  lineHeight: '1.6',
                  fontSize: '0.9rem'
                }}>
                  {chapter.description}
                </p>

                {/* Stats */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '0.85rem',
                  color: '#6b7280',
                  marginBottom: '15px',
                  paddingBottom: '15px',
                  borderBottom: '1px solid #e5e7eb'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Users size={14} />
                    <span>{chapter.members}+ members</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Calendar size={14} />
                    <span>{chapter.events} events</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Award size={14} />
                    <span>Est. {chapter.established}</span>
                  </div>
                </div>

                {/* Activities */}
                <div style={{ marginBottom: '15px' }}>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '6px'
                  }}>
                    {chapter.activities.map((activity, idx) => (
                      <span
                        key={idx}
                        style={{
                          backgroundColor: '#f3f4f6',
                          color: '#374151',
                          padding: '4px 10px',
                          borderRadius: '12px',
                          fontSize: '0.75rem',
                          fontWeight: '500'
                        }}
                      >
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                {chapter.achievements.length > 0 && (
                  <div style={{
                    backgroundColor: '#fef3c7',
                    padding: '10px',
                    borderRadius: '6px',
                    marginBottom: '15px'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.75rem',
                      color: '#92400e'
                    }}>
                      <Trophy size={14} />
                      <span style={{ fontWeight: '600' }}>
                        {chapter.achievements.join(' • ')}
                      </span>
                    </div>
                  </div>
                )}

                {/* Join Button */}
                <button 
                  style={{
                    backgroundColor: '#2d8f2d',
                    color: 'white',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    width: '100%',
                    fontSize: '0.95rem',
                    fontWeight: '500',
                    transition: 'background-color 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#257a25'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2d8f2d'}
                >
                  Join Chapter
                </button>
              </div>
            );
          })}
        </div>

        {filteredChapters.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '60px 20px',
            color: '#6b7280'
          }}>
            <h3>No chapters found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentChapter;