import React, { useState } from 'react';
import { MapPin, Clock, Building, Search, Briefcase, DollarSign, TrendingUp, Filter } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Jobs = () => {
  const { isDarkMode } = useTheme();
  const [selectedType, setSelectedType] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const jobs = [
    {
      id: 1,
      title: "Software Engineer",
      company: "Google Inc.",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "3+ years",
      salary: "₹25-35 LPA",
      skills: ["Java", "Python", "System Design"],
      posted: "2 days ago",
      applicants: 145,
      category: "Development"
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Microsoft Corporation",
      location: "Hyderabad, India",
      type: "Full-time",
      experience: "2+ years",
      salary: "₹18-28 LPA",
      skills: ["React", "TypeScript", "CSS"],
      posted: "1 day ago",
      applicants: 98,
      category: "Development"
    },
    {
      id: 3,
      title: "Data Scientist",
      company: "Amazon Web Services",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "4+ years",
      salary: "₹30-40 LPA",
      skills: ["Python", "ML", "Statistics"],
      posted: "3 days ago",
      applicants: 203,
      category: "Data Science"
    },
    {
      id: 4,
      title: "Backend Developer",
      company: "Netflix",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "3-5 years",
      salary: "₹28-38 LPA",
      skills: ["Node.js", "MongoDB", "AWS"],
      posted: "1 week ago",
      applicants: 167,
      category: "Development"
    },
    {
      id: 5,
      title: "DevOps Engineer",
      company: "Adobe Systems",
      location: "Noida, India",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₹22-32 LPA",
      skills: ["Docker", "Kubernetes", "CI/CD"],
      posted: "4 days ago",
      applicants: 89,
      category: "DevOps"
    },
    {
      id: 6,
      title: "Machine Learning Engineer",
      company: "Apple Inc.",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "4+ years",
      salary: "₹35-45 LPA",
      skills: ["TensorFlow", "PyTorch", "Python"],
      posted: "5 days ago",
      applicants: 178,
      category: "Data Science"
    },
    {
      id: 7,
      title: "Mobile App Developer",
      company: "Meta Platforms",
      location: "Gurgaon, India",
      type: "Full-time",
      experience: "3+ years",
      salary: "₹26-36 LPA",
      skills: ["React Native", "iOS", "Android"],
      posted: "2 days ago",
      applicants: 112,
      category: "Mobile"
    },
    {
      id: 8,
      title: "Product Manager",
      company: "Flipkart",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "5+ years",
      salary: "₹32-42 LPA",
      skills: ["Product Strategy", "Analytics", "Agile"],
      posted: "1 week ago",
      applicants: 234,
      category: "Product"
    },
    {
      id: 9,
      title: "Full Stack Developer",
      company: "Paytm",
      location: "Noida, India",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₹20-30 LPA",
      skills: ["MERN Stack", "PostgreSQL", "Redis"],
      posted: "3 days ago",
      applicants: 156,
      category: "Development"
    },
    {
      id: 10,
      title: "Data Analyst",
      company: "Swiggy",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "1-3 years",
      salary: "₹12-18 LPA",
      skills: ["SQL", "Python", "Tableau"],
      posted: "2 days ago",
      applicants: 187,
      category: "Data Science"
    },
    {
      id: 11,
      title: "Cloud Architect",
      company: "IBM India",
      location: "Pune, India",
      type: "Full-time",
      experience: "5+ years",
      salary: "₹38-48 LPA",
      skills: ["AWS", "Azure", "Architecture"],
      posted: "1 week ago",
      applicants: 94,
      category: "Cloud"
    },
    {
      id: 12,
      title: "UI/UX Designer",
      company: "Zomato",
      location: "Gurgaon, India",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₹15-25 LPA",
      skills: ["Figma", "Adobe XD", "Prototyping"],
      posted: "4 days ago",
      applicants: 142,
      category: "Design"
    },
    {
      id: 13,
      title: "Cybersecurity Analyst",
      company: "Razorpay",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "3+ years",
      salary: "₹24-34 LPA",
      skills: ["Security", "Penetration Testing", "Compliance"],
      posted: "5 days ago",
      applicants: 76,
      category: "Security"
    },
    {
      id: 14,
      title: "QA Engineer",
      company: "Ola Cabs",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "2-3 years",
      salary: "₹14-22 LPA",
      skills: ["Selenium", "Jest", "Automation"],
      posted: "3 days ago",
      applicants: 103,
      category: "Testing"
    },
    {
      id: 15,
      title: "Blockchain Developer",
      company: "PhonePe",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "3-5 years",
      salary: "₹28-38 LPA",
      skills: ["Solidity", "Ethereum", "Smart Contracts"],
      posted: "1 week ago",
      applicants: 68,
      category: "Blockchain"
    },
    {
      id: 16,
      title: "SRE Engineer",
      company: "LinkedIn",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "4+ years",
      salary: "₹32-42 LPA",
      skills: ["Monitoring", "Incident Response", "Python"],
      posted: "2 days ago",
      applicants: 91,
      category: "DevOps"
    },
    {
      id: 17,
      title: "Game Developer",
      company: "Zynga",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₹18-28 LPA",
      skills: ["Unity", "C#", "3D Graphics"],
      posted: "6 days ago",
      applicants: 124,
      category: "Gaming"
    },
    {
      id: 18,
      title: "Business Analyst",
      company: "Accenture",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "3+ years",
      salary: "₹16-24 LPA",
      skills: ["Requirements", "SQL", "Business Intelligence"],
      posted: "4 days ago",
      applicants: 198,
      category: "Business"
    },
    {
      id: 19,
      title: "AI Research Scientist",
      company: "NVIDIA",
      location: "Pune, India",
      type: "Full-time",
      experience: "5+ years",
      salary: "₹40-55 LPA",
      skills: ["Deep Learning", "Computer Vision", "Research"],
      posted: "1 week ago",
      applicants: 156,
      category: "Research"
    },
    {
      id: 20,
      title: "Software Architect",
      company: "Oracle",
      location: "Hyderabad, India",
      type: "Full-time",
      experience: "7+ years",
      salary: "₹45-60 LPA",
      skills: ["Architecture", "Java", "Microservices"],
      posted: "5 days ago",
      applicants: 87,
      category: "Development"
    },
    {
      id: 21,
      title: "iOS Developer",
      company: "Shopify",
      location: "Remote",
      type: "Remote",
      experience: "3+ years",
      salary: "₹24-34 LPA",
      skills: ["Swift", "SwiftUI", "iOS SDK"],
      posted: "3 days ago",
      applicants: 109,
      category: "Mobile"
    },
    {
      id: 22,
      title: "Data Engineer",
      company: "Walmart Labs",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "3-5 years",
      salary: "₹26-36 LPA",
      skills: ["Spark", "Hadoop", "ETL"],
      posted: "2 days ago",
      applicants: 143,
      category: "Data Science"
    },
    {
      id: 23,
      title: "Technical Writer",
      company: "Atlassian",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₹14-20 LPA",
      skills: ["Documentation", "API Docs", "Technical Writing"],
      posted: "1 week ago",
      applicants: 67,
      category: "Content"
    },
    {
      id: 24,
      title: "Scrum Master",
      company: "Infosys",
      location: "Pune, India",
      type: "Full-time",
      experience: "4+ years",
      salary: "₹18-26 LPA",
      skills: ["Agile", "Scrum", "Team Management"],
      posted: "4 days ago",
      applicants: 134,
      category: "Management"
    },
    {
      id: 25,
      title: "React Native Developer",
      company: "Dream11",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₹18-28 LPA",
      skills: ["React Native", "JavaScript", "Redux"],
      posted: "2 days ago",
      applicants: 118,
      category: "Mobile"
    }
  ];

  const locations = ['all', 'Bangalore', 'Hyderabad', 'Mumbai', 'Pune', 'Noida', 'Remote'];
  const types = ['all', 'Full-time', 'Part-time', 'Contract', 'Remote', 'Internship'];

  const filteredJobs = jobs.filter(job => {
    const matchesType = selectedType === 'all' || job.type === selectedType;
    const matchesLocation = selectedLocation === 'all' || job.location.includes(selectedLocation);
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesType && matchesLocation && matchesSearch;
  });

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
            💼 Job Opportunities
          </h1>
          <p style={{
            color: isDarkMode ? '#a3a3a3' : '#718096',
            fontSize: '1.1rem'
          }}>
            Explore {jobs.length}+ tech job openings from top companies
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
            <Briefcase size={32} color="#16a34a" style={{ margin: '0 auto 10px' }} />
            <h3 style={{ margin: 0, fontSize: '1.8rem', color: '#15803d' }}>{jobs.length}+</h3>
            <p style={{ margin: '5px 0 0', color: '#166534' }}>Active Jobs</p>
          </div>
          <div style={{
            backgroundColor: '#dbeafe',
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'center',
            border: '2px solid #93c5fd'
          }}>
            <Building size={32} color="#2563eb" style={{ margin: '0 auto 10px' }} />
            <h3 style={{ margin: 0, fontSize: '1.8rem', color: '#1e40af' }}>50+</h3>
            <p style={{ margin: '5px 0 0', color: '#1e3a8a' }}>Top Companies</p>
          </div>
          <div style={{
            backgroundColor: '#fef3c7',
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'center',
            border: '2px solid #fde047'
          }}>
            <TrendingUp size={32} color="#ca8a04" style={{ margin: '0 auto 10px' }} />
            <h3 style={{ margin: 0, fontSize: '1.8rem', color: '#a16207' }}>₹15-60L</h3>
            <p style={{ margin: '5px 0 0', color: '#854d0e' }}>Salary Range</p>
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
              placeholder="Search by job title, company, or skills..."
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
            
            {/* Type Filter */}
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              style={{
                padding: '8px 16px',
                border: '2px solid #e5e7eb',
                borderRadius: '6px',
                fontSize: '14px',
                outline: 'none',
                cursor: 'pointer',
                backgroundColor: 'white'
              }}
            >
              {types.map(type => (
                <option key={type} value={type}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </option>
              ))}
            </select>

            {/* Location Filter */}
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              style={{
                padding: '8px 16px',
                border: '2px solid #e5e7eb',
                borderRadius: '6px',
                fontSize: '14px',
                outline: 'none',
                cursor: 'pointer',
                backgroundColor: 'white'
              }}
            >
              {locations.map(loc => (
                <option key={loc} value={loc}>
                  {loc === 'all' ? 'All Locations' : loc}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div style={{
          marginBottom: '20px',
          color: '#6b7280',
          fontSize: '14px'
        }}>
          Showing {filteredJobs.length} of {jobs.length} jobs
        </div>

        {/* Jobs Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '25px'
        }}>
          {filteredJobs.map(job => (
            <div
              key={job.id}
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
              {/* Job Title and Company */}
              <h3 style={{
                color: '#2d8f2d',
                fontSize: '1.3rem',
                marginBottom: '8px',
                fontWeight: '600'
              }}>
                {job.title}
              </h3>
              <p style={{
                color: '#666',
                marginBottom: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.95rem'
              }}>
                <Building size={16} />
                {job.company}
              </p>

              {/* Job Details */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
                marginBottom: '15px',
                fontSize: '0.85rem',
                color: '#6b7280'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <MapPin size={14} />
                  <span>{job.location}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <Clock size={14} />
                  <span>{job.type}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <Briefcase size={14} />
                  <span>{job.experience}</span>
                </div>
              </div>

              {/* Salary */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                marginBottom: '15px',
                color: '#2d8f2d',
                fontWeight: '600',
                fontSize: '1rem'
              }}>
                <DollarSign size={18} />
                <span>{job.salary}</span>
              </div>

              {/* Skills */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                marginBottom: '15px'
              }}>
                {job.skills.map((skill, idx) => (
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
                    {skill}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div style={{
                paddingTop: '15px',
                borderTop: '1px solid #e5e7eb',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '0.8rem',
                color: '#9ca3af'
              }}>
                <span>Posted {job.posted}</span>
                <span>{job.applicants} applicants</span>
              </div>

              {/* Apply Button */}
              <button style={{
                width: '100%',
                marginTop: '15px',
                padding: '10px',
                backgroundColor: '#2d8f2d',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontSize: '0.95rem',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#257a25'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2d8f2d'}
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '60px 20px',
            color: '#6b7280'
          }}>
            <h3>No jobs found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Jobs;