import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Code, Target, Trophy, Search, Filter } from 'lucide-react';

const Practice = () => {
  const navigate = useNavigate();
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const problems = [
    { id: '1', title: 'Two Sum Problem', description: 'Find two numbers in an array that add up to a target sum', difficulty: 'easy', category: 'Array', solved: '89%' },
    { id: '2', title: 'Binary Tree Traversal', description: 'Implement inorder, preorder and postorder traversals', difficulty: 'medium', category: 'Tree', solved: '67%' },
    { id: '3', title: 'Maximum Subarray Problem', description: 'Find the contiguous subarray with the largest sum', difficulty: 'hard', category: 'Dynamic Programming', solved: '45%' },
    { id: '4', title: 'Valid Parentheses', description: 'Check if string of brackets is valid', difficulty: 'easy', category: 'Stack', solved: '82%' },
    { id: '5', title: 'Reverse Linked List', description: 'Reverse a singly linked list', difficulty: 'easy', category: 'Linked List', solved: '78%' },
    { id: '6', title: 'Merge Two Sorted Lists', description: 'Merge two sorted linked lists into one', difficulty: 'easy', category: 'Linked List', solved: '75%' },
    { id: '7', title: 'Best Time to Buy and Sell Stock', description: 'Find maximum profit from stock prices', difficulty: 'easy', category: 'Array', solved: '71%' },
    { id: '8', title: 'Longest Substring Without Repeating', description: 'Find length of longest substring without repeating characters', difficulty: 'medium', category: 'String', solved: '58%' },
    { id: '9', title: 'Container With Most Water', description: 'Find two lines that form container with most water', difficulty: 'medium', category: 'Array', solved: '62%' },
    { id: '10', title: '3Sum Problem', description: 'Find all triplets that sum to zero', difficulty: 'medium', category: 'Array', solved: '54%' },
    { id: '11', title: 'Letter Combinations of Phone Number', description: 'Generate all letter combinations for a phone number', difficulty: 'medium', category: 'Backtracking', solved: '61%' },
    { id: '12', title: 'Generate Parentheses', description: 'Generate all valid parentheses combinations', difficulty: 'medium', category: 'Backtracking', solved: '59%' },
    { id: '13', title: 'Merge K Sorted Lists', description: 'Merge k sorted linked lists', difficulty: 'hard', category: 'Linked List', solved: '38%' },
    { id: '14', title: 'Valid Sudoku', description: 'Check if Sudoku board is valid', difficulty: 'medium', category: 'Array', solved: '64%' },
    { id: '15', title: 'Climbing Stairs', description: 'Count ways to climb stairs with 1 or 2 steps', difficulty: 'easy', category: 'Dynamic Programming', solved: '77%' },
    { id: '16', title: 'House Robber', description: 'Maximum money you can rob without alerting police', difficulty: 'medium', category: 'Dynamic Programming', solved: '56%' },
    { id: '17', title: 'Coin Change', description: 'Minimum coins needed to make amount', difficulty: 'medium', category: 'Dynamic Programming', solved: '52%' },
    { id: '18', title: 'Longest Common Subsequence', description: 'Find length of longest common subsequence', difficulty: 'medium', category: 'Dynamic Programming', solved: '51%' },
    { id: '19', title: 'Word Break', description: 'Check if string can be segmented into dictionary words', difficulty: 'medium', category: 'Dynamic Programming', solved: '49%' },
    { id: '20', title: 'Number of Islands', description: 'Count number of islands in 2D grid', difficulty: 'medium', category: 'Graph', solved: '57%' },
    { id: '21', title: 'Course Schedule', description: 'Check if you can finish all courses', difficulty: 'medium', category: 'Graph', solved: '53%' },
    { id: '22', title: 'Binary Tree Level Order Traversal', description: 'Return level order traversal of tree', difficulty: 'medium', category: 'Tree', solved: '63%' },
    { id: '23', title: 'Lowest Common Ancestor', description: 'Find LCA of two nodes in BST', difficulty: 'medium', category: 'Tree', solved: '60%' },
    { id: '24', title: 'Serialize and Deserialize Binary Tree', description: 'Design algorithm to serialize/deserialize tree', difficulty: 'hard', category: 'Tree', solved: '42%' },
    { id: '25', title: 'Implement Trie', description: 'Implement a trie (prefix tree)', difficulty: 'medium', category: 'Tree', solved: '58%' },
    { id: '26', title: 'Find Median from Data Stream', description: 'Design data structure for median', difficulty: 'hard', category: 'Heap', solved: '39%' },
    { id: '27', title: 'Longest Palindromic Substring', description: 'Find the longest palindromic substring', difficulty: 'medium', category: 'String', solved: '55%' },
    { id: '28', title: 'Regular Expression Matching', description: 'Implement regex matching with . and *', difficulty: 'hard', category: 'String', solved: '34%' },
    { id: '29', title: 'Edit Distance', description: 'Minimum operations to convert one string to another', difficulty: 'hard', category: 'Dynamic Programming', solved: '41%' },
    { id: '30', title: 'Trapping Rain Water', description: 'Calculate trapped rain water between bars', difficulty: 'hard', category: 'Array', solved: '43%' },
    { id: '31', title: 'Sliding Window Maximum', description: 'Find maximum in each sliding window', difficulty: 'hard', category: 'Array', solved: '37%' },
    { id: '32', title: 'Merge Intervals', description: 'Merge all overlapping intervals', difficulty: 'medium', category: 'Array', solved: '61%' },
    { id: '33', title: 'Rotate Image', description: 'Rotate NxN matrix by 90 degrees', difficulty: 'medium', category: 'Array', solved: '65%' },
    { id: '34', title: 'Group Anagrams', description: 'Group strings that are anagrams', difficulty: 'medium', category: 'String', solved: '62%' },
    { id: '35', title: 'Permutations', description: 'Generate all permutations of array', difficulty: 'medium', category: 'Backtracking', solved: '68%' },
    { id: '36', title: 'Subsets', description: 'Generate all possible subsets', difficulty: 'medium', category: 'Backtracking', solved: '70%' },
    { id: '37', title: 'N-Queens Problem', description: 'Place N queens on NxN chessboard', difficulty: 'hard', category: 'Backtracking', solved: '36%' },
    { id: '38', title: 'Word Search', description: 'Find if word exists in board', difficulty: 'medium', category: 'Backtracking', solved: '55%' },
    { id: '39', title: 'Palindrome Partitioning', description: 'Partition string into palindrome substrings', difficulty: 'medium', category: 'Backtracking', solved: '52%' },
    { id: '40', title: 'Kth Largest Element', description: 'Find kth largest element in array', difficulty: 'medium', category: 'Heap', solved: '64%' },
    { id: '41', title: 'Top K Frequent Elements', description: 'Find k most frequent elements', difficulty: 'medium', category: 'Heap', solved: '63%' },
    { id: '42', title: 'Meeting Rooms II', description: 'Minimum conference rooms required', difficulty: 'medium', category: 'Heap', solved: '57%' },
    { id: '43', title: 'Binary Search', description: 'Implement binary search algorithm', difficulty: 'easy', category: 'Binary Search', solved: '84%' },
    { id: '44', title: 'Search in Rotated Array', description: 'Search in rotated sorted array', difficulty: 'medium', category: 'Binary Search', solved: '59%' },
    { id: '45', title: 'Find Peak Element', description: 'Find a peak element in array', difficulty: 'medium', category: 'Binary Search', solved: '62%' },
  ];

  const difficulties = ['all', 'easy', 'medium', 'hard'];
  const categories = ['all', 'Array', 'String', 'Tree', 'Graph', 'Dynamic Programming', 'Linked List', 'Stack', 'Backtracking', 'Heap', 'Binary Search'];

  const filteredProblems = problems.filter(problem => {
    const matchesDifficulty = selectedDifficulty === 'all' || problem.difficulty === selectedDifficulty;
    const matchesCategory = selectedCategory === 'all' || problem.category === selectedCategory;
    const matchesSearch = problem.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          problem.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDifficulty && matchesCategory && matchesSearch;
  });

  const handleProblemClick = (problemId) => {
    navigate(`/problem/${problemId}`);
  };

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'easy': return { bg: '#d1fae5', color: '#065f46', border: '#10b981' };
      case 'medium': return { bg: '#fef3c7', color: '#92400e', border: '#f59e0b' };
      case 'hard': return { bg: '#fee2e2', color: '#991b1b', border: '#dc2626' };
      default: return { bg: '#f3f4f6', color: '#374151', border: '#9ca3af' };
    }
  };

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
            🎯 Practice Problems
          </h1>
          <p style={{
            color: '#718096',
            fontSize: '1.1rem'
          }}>
            Sharpen your coding skills with {problems.length}+ practice problems. Click on any problem to start solving!
          </p>
        </div>

        {/* Search and Filters */}
        <div style={{ marginBottom: '30px' }}>
          {/* Search Bar */}
          <div style={{ position: 'relative', marginBottom: '20px' }}>
            <Search size={20} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#6b7280' }} />
            <input
              type="text"
              placeholder="Search problems..."
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

          {/* Difficulty Filter */}
          <div style={{ marginBottom: '15px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <Filter size={18} />
              <strong>Difficulty:</strong>
            </div>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {difficulties.map(diff => (
                <button
                  key={diff}
                  onClick={() => setSelectedDifficulty(diff)}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: selectedDifficulty === diff ? '#2d8f2d' : '#f3f4f6',
                    color: selectedDifficulty === diff ? 'white' : '#374151',
                    border: 'none',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: '500',
                    textTransform: 'capitalize'
                  }}
                >
                  {diff}
                </button>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <Code size={18} />
              <strong>Category:</strong>
            </div>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: selectedCategory === cat ? '#2d8f2d' : '#f3f4f6',
                    color: selectedCategory === cat ? 'white' : '#374151',
                    border: 'none',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: '500'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div style={{ marginBottom: '20px', color: '#6b7280', fontSize: '14px' }}>
          Showing {filteredProblems.length} of {problems.length} problems
        </div>

        {/* Problems Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '25px'
        }}>
          {filteredProblems.map(problem => {
            const colors = getDifficultyColor(problem.difficulty);
            return (
              <div
                key={problem.id}
                onClick={() => handleProblemClick(problem.id)}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  padding: '25px',
                  borderLeft: `4px solid ${colors.border}`,
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 12px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                }}
              >
                <h3 style={{
                  color: '#2d8f2d',
                  fontSize: '1.3rem',
                  marginBottom: '15px',
                  fontWeight: '600'
                }}>
                  {problem.title}
                </h3>
                <p style={{
                  color: '#666',
                  marginBottom: '15px',
                  lineHeight: '1.6'
                }}>
                  {problem.description}
                </p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '0.9rem',
                  color: '#888',
                  flexWrap: 'wrap',
                  gap: '10px'
                }}>
                  <span style={{
                    backgroundColor: colors.bg,
                    color: colors.color,
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '0.8rem',
                    textTransform: 'capitalize',
                    fontWeight: '500'
                  }}>
                    {problem.difficulty}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Code size={16} />
                    <span>{problem.category}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Trophy size={16} />
                    <span>{problem.solved} solved</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredProblems.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '60px 20px',
            color: '#6b7280'
          }}>
            <h3>No problems found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Practice;