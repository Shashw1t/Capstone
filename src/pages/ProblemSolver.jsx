import React, { useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Editor from '@monaco-editor/react';
import axios from 'axios';
import { Play, RotateCcw, Settings, ArrowLeft, CheckCircle, Clock, Users } from 'lucide-react';

const ProblemSolver = () => {
  const { problemId } = useParams();
  const navigate = useNavigate();
  const editorRef = useRef(null);
  
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  // Mock problem data - in real app, fetch by problemId
  const problems = {
    '1': {
      id: 1,
      title: "Two Sum Problem",
      difficulty: "Easy",
      acceptance: "89%",
      submissions: "1.2M",
      description: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.`,
      examples: [
        {
          input: "nums = [2,7,11,15], target = 9",
          output: "[0,1]",
          explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
        },
        {
          input: "nums = [3,2,4], target = 6", 
          output: "[1,2]",
          explanation: "Because nums[1] + nums[2] == 6, we return [1, 2]."
        }
      ],
      constraints: [
        "2 ≤ nums.length ≤ 10⁴",
        "-10⁹ ≤ nums[i] ≤ 10⁹", 
        "-10⁹ ≤ target ≤ 10⁹",
        "Only one valid answer exists."
      ]
    },
    '2': {
      id: 2,
      title: "Binary Tree Traversal",
      difficulty: "Medium", 
      acceptance: "67%",
      submissions: "800K",
      description: `Given the root of a binary tree, return the inorder traversal of its nodes' values.

Inorder traversal visits nodes in the following order: Left → Root → Right

Follow up: Recursive solution is trivial, could you do it iteratively?`,
      examples: [
        {
          input: "root = [1,null,2,3]",
          output: "[1,3,2]",
          explanation: "Inorder traversal: left subtree, root, right subtree"
        }
      ],
      constraints: [
        "The number of nodes in the tree is in the range [0, 100].",
        "-100 ≤ Node.val ≤ 100"
      ]
    },
    '3': {
      id: 3,
      title: "Maximum Subarray Problem",
      difficulty: "Hard",
      acceptance: "45%", 
      submissions: "500K",
      description: `Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.

This is a classic dynamic programming problem, also known as Kadane's Algorithm.`,
      examples: [
        {
          input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
          output: "6",
          explanation: "[4,-1,2,1] has the largest sum = 6."
        },
        {
          input: "nums = [1]", 
          output: "1",
          explanation: "The array has only one element."
        }
      ],
      constraints: [
        "1 ≤ nums.length ≤ 10⁵",
        "-10⁴ ≤ nums[i] ≤ 10⁴"
      ]
    }
  };

  const problem = problems[problemId] || problems['1'];

  const getLanguageTemplate = (problemId, language) => {
    const templates = {
      '1': { // Two Sum Problem
        javascript: `function twoSum(nums, target) {
    // Write your code here
    
}

// Do not modify the test code below
const testCases = [
    { nums: [2, 7, 11, 15], target: 9, expected: [0, 1] },
    { nums: [3, 2, 4], target: 6, expected: [1, 2] },
    { nums: [3, 3], target: 6, expected: [0, 1] }
];

testCases.forEach((test, index) => {
    const result = twoSum(test.nums, test.target);
    console.log(\`Test \${index + 1}: \${JSON.stringify(result)}\`);
});`,

        python: `def twoSum(nums, target):
    # Write your code here
    pass

# Do not modify the test code below
test_cases = [
    {"nums": [2, 7, 11, 15], "target": 9, "expected": [0, 1]},
    {"nums": [3, 2, 4], "target": 6, "expected": [1, 2]}, 
    {"nums": [3, 3], "target": 6, "expected": [0, 1]}
]

for i, test in enumerate(test_cases):
    result = twoSum(test["nums"], test["target"])
    print(f"Test {i + 1}: {result}")`,

        java: `import java.util.*;

public class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Write your code here
        return new int[]{};
    }
    
    // Do not modify the test code below
    public static void main(String[] args) {
        Solution sol = new Solution();
        
        int[][] testNums = {{2, 7, 11, 15}, {3, 2, 4}, {3, 3}};
        int[] testTargets = {9, 6, 6};
        
        for (int i = 0; i < testNums.length; i++) {
            int[] result = sol.twoSum(testNums[i], testTargets[i]);
            System.out.println("Test " + (i + 1) + ": " + Arrays.toString(result));
        }
    }
}`,

        cpp: `#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        // Write your code here
        return {};
    }
};

// Do not modify the test code below
int main() {
    Solution sol;
    
    vector<vector<int>> testNums = {{2, 7, 11, 15}, {3, 2, 4}, {3, 3}};
    vector<int> testTargets = {9, 6, 6};
    
    for (int i = 0; i < testNums.size(); i++) {
        vector<int> result = sol.twoSum(testNums[i], testTargets[i]);
        
        cout << "Test " << (i + 1) << ": [";
        for (int j = 0; j < result.size(); j++) {
            cout << result[j];
            if (j < result.size() - 1) cout << ", ";
        }
        cout << "]" << endl;
    }
    return 0;
}`
      },
      '2': { // Binary Tree Traversal  
        javascript: `class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function inorderTraversal(root) {
    // Write your code here
    
}

// Do not modify the test code below
const root1 = new TreeNode(1);
root1.right = new TreeNode(2);
root1.right.left = new TreeNode(3);

const result = inorderTraversal(root1);
console.log("Test 1: " + JSON.stringify(result));`,

        python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def inorderTraversal(root):
    # Write your code here
    pass

# Do not modify the test code below
root1 = TreeNode(1)
root1.right = TreeNode(2) 
root1.right.left = TreeNode(3)

result = inorderTraversal(root1)
print(f"Test 1: {result}")`
      },
      '3': { // Maximum Subarray
        javascript: `function maxSubArray(nums) {
    // Write your code here
    
}

// Do not modify the test code below
const testCases = [
    { nums: [-2, 1, -3, 4, -1, 2, 1, -5, 4], expected: 6 },
    { nums: [1], expected: 1 },
    { nums: [5, 4, -1, 7, 8], expected: 23 }
];

testCases.forEach((test, index) => {
    const result = maxSubArray(test.nums);
    console.log(\`Test \${index + 1}: \${result}\`);
});`,

        python: `def maxSubArray(nums):
    # Write your code here
    pass

# Do not modify the test code below
test_cases = [
    {"nums": [-2, 1, -3, 4, -1, 2, 1, -5, 4], "expected": 6},
    {"nums": [1], "expected": 1},
    {"nums": [5, 4, -1, 7, 8], "expected": 23}
]

for i, test in enumerate(test_cases):
    result = maxSubArray(test["nums"])
    print(f"Test {i + 1}: {result}")`
      }
    };

    return templates[problemId]?.[language] || `// Write your ${language} code here
console.log('Hello World!');`;
  };

  const languages = {
    javascript: { name: 'JavaScript' },
    python: { name: 'Python' },
    java: { name: 'Java' },
    cpp: { name: 'C++' }
  };

  const handleEditorDidMount = (editor) => {
    editorRef.current = editor;
  };

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    setCode(getLanguageTemplate(problemId, lang));
  };

  const runCode = async () => {
    if (!code.trim()) {
      setOutput('Error: Please write some code before running.');
      return;
    }

    setIsRunning(true);
    setOutput('Executing code...\n');
    
    try {
      const response = await axios.post('http://localhost:3001/api/execute', {
        code: code,
        language: selectedLanguage,
        input: ''
      });

      const result = response.data;
      let outputText = '';

      if (result.success) {
        outputText = `✅ Code Execution Successful\n\n`;
        if (result.output) {
          outputText += `Output:\n${result.output}\n`;
        }
        outputText += `\nExecution Time: ${result.executionTime}ms\n`;
        outputText += `\n💡 Tip: Use "Submit" to validate against all test cases.`;
      } else {
        outputText = `❌ Execution Failed\n\n`;
        if (result.error) {
          outputText += `Error:\n${result.error}\n`;
        }
        if (result.output) {
          outputText += `\nOutput:\n${result.output}\n`;
        }
        outputText += `\nExecution Time: ${result.executionTime}ms\n`;
      }

      setOutput(outputText);
    } catch (error) {
      let errorMsg = '❌ Connection Error\n\n';
      if (error.response) {
        errorMsg += `Server Error: ${error.response.data.error || 'Unknown error'}\n`;
      } else if (error.request) {
        errorMsg += 'Could not connect to code execution server.\n';
        errorMsg += 'Make sure the backend server is running on http://localhost:3001\n\n';
        errorMsg += '🔧 To start the backend:\n';
        errorMsg += '1. Open a new terminal\n';
        errorMsg += '2. cd backend\n';
        errorMsg += '3. npm start\n';
      } else {
        errorMsg += `Error: ${error.message}\n`;
      }
      setOutput(errorMsg);
    } finally {
      setIsRunning(false);
    }
  };

  const submitSolution = async () => {
    if (!code.trim()) {
      setOutput('Error: Please write some code before submitting.');
      return;
    }

    setIsRunning(true);
    setOutput('Running test cases...\n');
    
    try {
      const response = await axios.post('http://localhost:3001/api/validate', {
        code: code,
        language: selectedLanguage,
        problemId: problemId
      });

      const result = response.data;
      let outputText = '';

      if (result.success) {
        const { testResults, allTestsPassed, passedTests, totalTests } = result;
        
        outputText = `${allTestsPassed ? '🎉' : '❌'} SUBMISSION RESULT\n\n`;
        outputText += `Status: ${allTestsPassed ? '✅ ACCEPTED' : '❌ WRONG ANSWER'}\n`;
        outputText += `Tests Passed: ${passedTests}/${totalTests}\n`;
        outputText += `Execution Time: ${result.executionTime}ms\n\n`;
        
        outputText += `📊 Test Case Details:\n`;
        outputText += `${'='.repeat(50)}\n`;
        
        testResults.forEach((testResult) => {
          outputText += `Test Case ${testResult.testCase}: ${testResult.passed ? '✅ PASS' : '❌ FAIL'}\n`;
          if (!testResult.passed) {
            outputText += `  Expected: ${JSON.stringify(testResult.expected)}\n`;
            outputText += `  Got: ${JSON.stringify(testResult.actual)}\n`;
          }
          outputText += '\n';
        });
        
        if (result.output) {
          outputText += `Raw Output:\n${result.output}\n`;
        }
        
        if (allTestsPassed) {
          outputText += `\n🎯 Congratulations! Your solution is correct!\n`;
          outputText += `� Try solving more problems to improve your skills.`;
        } else {
          outputText += `\n🔍 Review your solution and try again.\n`;
          outputText += `💡 Check edge cases and ensure your logic handles all scenarios.`;
        }
      } else {
        outputText = `❌ Submission Failed\n\n`;
        if (result.error) {
          outputText += `Error:\n${result.error}\n`;
        }
        if (result.output) {
          outputText += `\nOutput:\n${result.output}\n`;
        }
        outputText += `\nExecution Time: ${result.executionTime || 0}ms\n`;
      }

      setOutput(outputText);
    } catch (error) {
      let errorMsg = '❌ Submission Error\n\n';
      if (error.response) {
        errorMsg += `Server Error: ${error.response.data.error || 'Unknown error'}\n`;
      } else if (error.request) {
        errorMsg += 'Could not connect to validation server.\n';
        errorMsg += 'Make sure the backend server is running on http://localhost:3001\n';
      } else {
        errorMsg += `Error: ${error.message}\n`;
      }
      setOutput(errorMsg);
    } finally {
      setIsRunning(false);
    }
  };

  const resetCode = () => {
    setCode(getLanguageTemplate(problemId, selectedLanguage));
  };

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Easy': return '#10b981';
      case 'Medium': return '#f59e0b'; 
      case 'Hard': return '#dc2626';
      default: return '#6b7280';
    }
  };

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#f8f9fa'
    }}>
      {/* Header */}
      <div style={{
        backgroundColor: 'white',
        borderBottom: '1px solid #e5e7eb',
        padding: '12px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <button 
            onClick={() => navigate('/practice')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              backgroundColor: 'transparent',
              border: 'none',
              color: '#6b7280',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            <ArrowLeft size={16} />
            Back to Problems
          </button>
          <h2 style={{
            margin: 0,
            color: '#2d3748',
            fontSize: '18px'
          }}>
            {problem.title}
          </h2>
          <span style={{
            backgroundColor: getDifficultyColor(problem.difficulty),
            color: 'white',
            padding: '4px 8px',
            borderRadius: '12px',
            fontSize: '12px',
            fontWeight: '500'
          }}>
            {problem.difficulty}
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', fontSize: '14px', color: '#6b7280' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <CheckCircle size={16} />
            <span>{problem.acceptance} Accepted</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <Users size={16} />
            <span>{problem.submissions} Submissions</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{
        flex: 1,
        display: 'flex',
        overflow: 'hidden'
      }}>
        {/* Problem Description - Left Side */}
        <div style={{
          width: '45%',
          backgroundColor: 'white',
          borderRight: '1px solid #e5e7eb',
          padding: '20px',
          overflow: 'auto'
        }}>
          <div style={{ marginBottom: '25px' }}>
            <h3 style={{ 
              color: '#2d3748', 
              marginBottom: '15px',
              fontSize: '16px',
              fontWeight: '600'
            }}>
              Problem Description
            </h3>
            <p style={{
              color: '#4a5568',
              lineHeight: '1.6',
              marginBottom: '20px'
            }}>
              {problem.description}
            </p>
          </div>

          <div style={{ marginBottom: '25px' }}>
            <h4 style={{ 
              color: '#2d3748', 
              marginBottom: '15px',
              fontSize: '14px',
              fontWeight: '600'
            }}>
              Examples:
            </h4>
            {problem.examples.map((example, index) => (
              <div key={index} style={{
                backgroundColor: '#f8f9fa',
                padding: '15px',
                borderRadius: '8px',
                marginBottom: '15px',
                border: '1px solid #e5e7eb'
              }}>
                <div style={{ marginBottom: '8px' }}>
                  <strong>Input:</strong> <code style={{ backgroundColor: '#e5e7eb', padding: '2px 6px', borderRadius: '4px' }}>{example.input}</code>
                </div>
                <div style={{ marginBottom: '8px' }}>
                  <strong>Output:</strong> <code style={{ backgroundColor: '#e5e7eb', padding: '2px 6px', borderRadius: '4px' }}>{example.output}</code>
                </div>
                {example.explanation && (
                  <div style={{ fontSize: '14px', color: '#6b7280' }}>
                    <strong>Explanation:</strong> {example.explanation}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div>
            <h4 style={{ 
              color: '#2d3748', 
              marginBottom: '10px',
              fontSize: '14px',
              fontWeight: '600'
            }}>
              Constraints:
            </h4>
            <ul style={{ 
              color: '#4a5568', 
              paddingLeft: '20px',
              lineHeight: '1.6'
            }}>
              {problem.constraints.map((constraint, index) => (
                <li key={index} style={{ marginBottom: '5px' }}>
                  <code style={{ backgroundColor: '#f1f5f9', padding: '2px 4px', borderRadius: '3px' }}>
                    {constraint}
                  </code>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Code Editor - Right Side */}
        <div style={{
          width: '55%',
          display: 'flex',
          flexDirection: 'column'
        }}>
          {/* Editor Controls */}
          <div style={{
            backgroundColor: 'white',
            borderBottom: '1px solid #e5e7eb',
            padding: '12px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <label style={{ fontSize: '14px', color: '#4a5568' }}>Language:</label>
              <select
                value={selectedLanguage}
                onChange={(e) => handleLanguageChange(e.target.value)}
                style={{
                  padding: '6px 12px',
                  borderRadius: '6px',
                  border: '1px solid #d1d5db',
                  fontSize: '14px',
                  backgroundColor: 'white'
                }}
              >
                {Object.entries(languages).map(([key, lang]) => (
                  <option key={key} value={key}>{lang.name}</option>
                ))}
              </select>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                onClick={resetCode}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '8px 12px',
                  backgroundColor: '#f3f4f6',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  color: '#4a5568'
                }}
              >
                <RotateCcw size={16} />
                Reset
              </button>
              <button
                onClick={runCode}
                disabled={isRunning}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '8px 16px',
                  backgroundColor: isRunning ? '#9ca3af' : '#2d8f2d',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: isRunning ? 'not-allowed' : 'pointer',
                  fontSize: '14px',
                  fontWeight: '500'
                }}
              >
                <Play size={16} />
                {isRunning ? 'Running...' : 'Run Code'}
              </button>
              <button
                onClick={submitSolution}
                disabled={isRunning}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '8px 16px',
                  backgroundColor: isRunning ? '#9ca3af' : '#dc2626',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: isRunning ? 'not-allowed' : 'pointer',
                  fontSize: '14px',
                  fontWeight: '500'
                }}
              >
                <CheckCircle size={16} />
                {isRunning ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </div>

          {/* Monaco Editor */}
          <div style={{ flex: 1, position: 'relative' }}>
            <Editor
              height="60%"
              language={selectedLanguage}
              value={code || getLanguageTemplate(problemId, selectedLanguage)}
              onChange={(value) => setCode(value)}
              onMount={handleEditorDidMount}
              theme="vs-light"
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                lineNumbers: 'on',
                roundedSelection: false,
                scrollBeyondLastLine: false,
                automaticLayout: true,
                tabSize: 2,
                insertSpaces: true
              }}
            />
          </div>

          {/* Output Panel */}
          <div style={{
            height: '40%',
            backgroundColor: '#1a1a1a',
            color: '#e5e7eb',
            padding: '15px',
            overflow: 'auto',
            borderTop: '1px solid #374151'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '10px',
              fontSize: '14px',
              fontWeight: '500'
            }}>
              <span>Output:</span>
              {isRunning && <Clock size={16} className="animate-spin" />}
            </div>
            <pre style={{
              margin: 0,
              fontFamily: 'Monaco, Menlo, "Ubuntu Mono", monospace',
              fontSize: '13px',
              lineHeight: '1.5',
              whiteSpace: 'pre-wrap'
            }}>
              {output || 'Click "Run Code" to see the output...'}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemSolver;