import React, { useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Editor from '@monaco-editor/react';
import axios from 'axios';
import { Play, RotateCcw, Settings, ArrowLeft, CheckCircle, Clock, Users } from 'lucide-react';

// Use environment variable for API URL, fallback to localhost for development
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

const ProblemSolver = () => {
  const { problemId } = useParams();
  const navigate = useNavigate();
  const editorRef = useRef(null);
  
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [testCaseInputs, setTestCaseInputs] = useState([]);

  // Problem data for all 45 problems
  const problems = {
    '1': {
      id: 1, title: "Two Sum Problem", difficulty: "Easy", acceptance: "89%", submissions: "1.2M",
      description: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.`,
      examples: [{input: "nums = [2,7,11,15], target = 9", output: "[0,1]", explanation: "Because nums[0] + nums[1] == 9"}],
      constraints: ["2 ≤ nums.length ≤ 10⁴", "-10⁹ ≤ nums[i] ≤ 10⁹", "Only one valid answer exists."]
    },
    '2': {
      id: 2, title: "Binary Tree Traversal", difficulty: "Medium", acceptance: "67%", submissions: "800K",
      description: `Given the root of a binary tree, return the inorder traversal of its nodes' values. Inorder traversal visits nodes in the order: Left → Root → Right.`,
      examples: [{input: "root = [1,null,2,3]", output: "[1,3,2]", explanation: "Inorder: left, root, right"}],
      constraints: ["0 ≤ nodes ≤ 100", "-100 ≤ Node.val ≤ 100"]
    },
    '3': {
      id: 3, title: "Maximum Subarray Problem", difficulty: "Hard", acceptance: "45%", submissions: "500K",
      description: `Given an integer array nums, find the contiguous subarray with the largest sum and return its sum. This is a classic dynamic programming problem (Kadane's Algorithm).`,
      examples: [{input: "nums = [-2,1,-3,4,-1,2,1,-5,4]", output: "6", explanation: "[4,-1,2,1] has the largest sum = 6"}],
      constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"]
    },
    '4': {
      id: 4, title: "Valid Parentheses", difficulty: "Easy", acceptance: "82%", submissions: "950K",
      description: `Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if: Open brackets must be closed by the same type of brackets, and open brackets must be closed in the correct order.`,
      examples: [{input: 's = "()"', output: "true"}, {input: 's = "()[]{}"', output: "true"}, {input: 's = "(]"', output: "false"}],
      constraints: ["1 ≤ s.length ≤ 10⁴", "s consists of parentheses only '()[]{}' "]
    },
    '5': {
      id: 5, title: "Reverse Linked List", difficulty: "Easy", acceptance: "78%", submissions: "1.1M",
      description: `Given the head of a singly linked list, reverse the list, and return the reversed list. You should do this in-place with O(1) extra space.`,
      examples: [{input: "head = [1,2,3,4,5]", output: "[5,4,3,2,1]"}, {input: "head = [1,2]", output: "[2,1]"}],
      constraints: ["0 ≤ list length ≤ 5000", "-5000 ≤ Node.val ≤ 5000"]
    },
    '6': {
      id: 6, title: "Merge Two Sorted Lists", difficulty: "Easy", acceptance: "75%", submissions: "1M",
      description: `You are given the heads of two sorted linked lists list1 and list2. Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists. Return the head of the merged linked list.`,
      examples: [{input: "list1 = [1,2,4], list2 = [1,3,4]", output: "[1,1,2,3,4,4]"}],
      constraints: ["0 ≤ list length ≤ 50", "-100 ≤ Node.val ≤ 100"]
    },
    '7': {
      id: 7, title: "Best Time to Buy and Sell Stock", difficulty: "Easy", acceptance: "71%", submissions: "1.3M",
      description: `You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction.`,
      examples: [{input: "prices = [7,1,5,3,6,4]", output: "5", explanation: "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5"}],
      constraints: ["1 ≤ prices.length ≤ 10⁵", "0 ≤ prices[i] ≤ 10⁴"]
    },
    '8': {
      id: 8, title: "Longest Substring Without Repeating", difficulty: "Medium", acceptance: "58%", submissions: "900K",
      description: `Given a string s, find the length of the longest substring without repeating characters. Use sliding window technique for optimal solution.`,
      examples: [{input: 's = "abcabcbb"', output: "3", explanation: '"abc" is the longest substring'}, {input: 's = "bbbbb"', output: "1"}],
      constraints: ["0 ≤ s.length ≤ 5×10⁴", "s consists of English letters, digits, symbols and spaces"]
    },
    '9': {
      id: 9, title: "Container With Most Water", difficulty: "Medium", acceptance: "62%", submissions: "850K",
      description: `You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]). Find two lines that together with the x-axis form a container, such that the container contains the most water. Return the maximum amount of water a container can store.`,
      examples: [{input: "height = [1,8,6,2,5,4,8,3,7]", output: "49", explanation: "Lines at index 1 and 8 form container with area 49"}],
      constraints: ["n == height.length", "2 ≤ n ≤ 10⁵", "0 ≤ height[i] ≤ 10⁴"]
    },
    '10': {
      id: 10, title: "3Sum Problem", difficulty: "Medium", acceptance: "54%", submissions: "750K",
      description: `Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0. Notice that the solution set must not contain duplicate triplets.`,
      examples: [{input: "nums = [-1,0,1,2,-1,-4]", output: "[[-1,-1,2],[-1,0,1]]"}],
      constraints: ["3 ≤ nums.length ≤ 3000", "-10⁵ ≤ nums[i] ≤ 10⁵"]
    },
    '11': {
      id: 11, title: "Letter Combinations of Phone Number", difficulty: "Medium", acceptance: "61%", submissions: "800K",
      description: `Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order. A mapping of digits to letters (just like on the telephone buttons) is given below.`,
      examples: [{input: 'digits = "23"', output: '["ad","ae","af","bd","be","bf","cd","ce","cf"]'}],
      constraints: ["0 ≤ digits.length ≤ 4", "digits[i] is a digit in the range ['2', '9']"]
    },
    '12': {
      id: 12, title: "Generate Parentheses", difficulty: "Medium", acceptance: "59%", submissions: "700K",
      description: `Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses. Use backtracking to generate all valid combinations.`,
      examples: [{input: "n = 3", output: '["((()))","(()())","(())()","()(())","()()()"]'}],
      constraints: ["1 ≤ n ≤ 8"]
    },
    '13': {
      id: 13, title: "Merge K Sorted Lists", difficulty: "Hard", acceptance: "38%", submissions: "600K",
      description: `You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.`,
      examples: [{input: "lists = [[1,4,5],[1,3,4],[2,6]]", output: "[1,1,2,3,4,4,5,6]"}],
      constraints: ["k == lists.length", "0 ≤ k ≤ 10⁴", "0 ≤ lists[i].length ≤ 500"]
    },
    '14': {
      id: 14, title: "Valid Sudoku", difficulty: "Medium", acceptance: "64%", submissions: "750K",
      description: `Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules: Each row must contain the digits 1-9 without repetition, each column must contain the digits 1-9 without repetition, and each of the nine 3x3 sub-boxes must contain the digits 1-9 without repetition.`,
      examples: [{input: "board = [[\"5\",\"3\",\".\",\".\",\"7\",\".\",\".\",\".\",\".\"],[\"6\",\".\",\".\",\"1\",\"9\",\"5\",\".\",\".\",\".\"]]", output: "true"}],
      constraints: ["board.length == 9", "board[i].length == 9", "board[i][j] is a digit 1-9 or '.'"]
    },
    '15': {
      id: 15, title: "Climbing Stairs", difficulty: "Easy", acceptance: "77%", submissions: "1.5M",
      description: `You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top? This is a classic Fibonacci problem.`,
      examples: [{input: "n = 2", output: "2", explanation: "1+1 or 2"}, {input: "n = 3", output: "3", explanation: "1+1+1, 1+2, or 2+1"}],
      constraints: ["1 ≤ n ≤ 45"]
    },
    '16': {
      id: 16, title: "House Robber", difficulty: "Medium", acceptance: "56%", submissions: "900K",
      description: `You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. Adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night. Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.`,
      examples: [{input: "nums = [1,2,3,1]", output: "4", explanation: "Rob house 1 (money = 1) and then rob house 3 (money = 3). Total = 1 + 3 = 4"}],
      constraints: ["1 ≤ nums.length ≤ 100", "0 ≤ nums[i] ≤ 400"]
    },
    '17': {
      id: 17, title: "Coin Change", difficulty: "Medium", acceptance: "52%", submissions: "850K",
      description: `You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money. Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.`,
      examples: [{input: "coins = [1,2,5], amount = 11", output: "3", explanation: "11 = 5 + 5 + 1"}],
      constraints: ["1 ≤ coins.length ≤ 12", "1 ≤ coins[i] ≤ 2³¹-1", "0 ≤ amount ≤ 10⁴"]
    },
    '18': {
      id: 18, title: "Longest Common Subsequence", difficulty: "Medium", acceptance: "51%", submissions: "700K",
      description: `Given two strings text1 and text2, return the length of their longest common subsequence. A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.`,
      examples: [{input: 'text1 = "abcde", text2 = "ace"', output: "3", explanation: 'The longest common subsequence is "ace"'}],
      constraints: ["1 ≤ text1.length, text2.length ≤ 1000", "text1 and text2 consist of only lowercase English characters"]
    },
    '19': {
      id: 19, title: "Word Break", difficulty: "Medium", acceptance: "49%", submissions: "800K",
      description: `Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words. Note that the same word in the dictionary may be reused multiple times in the segmentation.`,
      examples: [{input: 's = "leetcode", wordDict = ["leet","code"]', output: "true", explanation: 'Return true because "leetcode" can be segmented as "leet code"'}],
      constraints: ["1 ≤ s.length ≤ 300", "1 ≤ wordDict.length ≤ 1000", "1 ≤ wordDict[i].length ≤ 20"]
    },
    '20': {
      id: 20, title: "Number of Islands", difficulty: "Medium", acceptance: "57%", submissions: "950K",
      description: `Given an m x n 2D binary grid which represents a map of '1's (land) and '0's (water), return the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.`,
      examples: [{input: 'grid = [["1","1","1"],["0","1","0"],["1","1","1"]]', output: "1"}],
      constraints: ["m == grid.length", "n == grid[i].length", "1 ≤ m, n ≤ 300", "grid[i][j] is '0' or '1'"]
    },
    '21': {
      id: 21, title: "Course Schedule", difficulty: "Medium", acceptance: "53%", submissions: "750K",
      description: `There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai. Return true if you can finish all courses. Otherwise, return false. This is a graph cycle detection problem.`,
      examples: [{input: "numCourses = 2, prerequisites = [[1,0]]", output: "true", explanation: "Take course 0, then course 1"}],
      constraints: ["1 ≤ numCourses ≤ 2000", "0 ≤ prerequisites.length ≤ 5000"]
    },
    '22': {
      id: 22, title: "Binary Tree Level Order Traversal", difficulty: "Medium", acceptance: "63%", submissions: "900K",
      description: `Given the root of a binary tree, return the level order traversal of its nodes' values (i.e., from left to right, level by level). Use BFS (queue) to traverse level by level.`,
      examples: [{input: "root = [3,9,20,null,null,15,7]", output: "[[3],[9,20],[15,7]]"}],
      constraints: ["0 ≤ nodes ≤ 2000", "-1000 ≤ Node.val ≤ 1000"]
    },
    '23': {
      id: 23, title: "Lowest Common Ancestor", difficulty: "Medium", acceptance: "60%", submissions: "850K",
      description: `Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST. The LCA is defined as the lowest node that has both nodes as descendants.`,
      examples: [{input: "root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8", output: "6"}],
      constraints: ["2 ≤ nodes ≤ 10⁵", "All Node.val are unique", "p != q"]
    },
    '24': {
      id: 24, title: "Serialize and Deserialize Binary Tree", difficulty: "Hard", acceptance: "42%", submissions: "600K",
      description: `Design an algorithm to serialize and deserialize a binary tree. Serialization is converting a tree to a string representation. Deserialization is converting the string back to the original tree structure.`,
      examples: [{input: "root = [1,2,3,null,null,4,5]", output: "[1,2,3,null,null,4,5]"}],
      constraints: ["0 ≤ nodes ≤ 10⁴", "-1000 ≤ Node.val ≤ 1000"]
    },
    '25': {
      id: 25, title: "Implement Trie", difficulty: "Medium", acceptance: "58%", submissions: "700K",
      description: `Implement a trie (prefix tree) with insert, search, and startsWith methods. A trie is an efficient data structure for storing and searching strings.`,
      examples: [{input: '["Trie","insert","search","startsWith"]', output: "[null,null,true,true]"}],
      constraints: ["1 ≤ word.length, prefix.length ≤ 2000", "word and prefix consist only of lowercase English letters"]
    },
    '26': {
      id: 26, title: "Find Median from Data Stream", difficulty: "Hard", acceptance: "39%", submissions: "550K",
      description: `Design a data structure that supports adding integers from a data stream and finding the median of all elements so far. Implement the MedianFinder class with addNum(int num) and findMedian() methods.`,
      examples: [{input: '["addNum","addNum","findMedian","addNum","findMedian"]', output: "[null,null,1.5,null,2.0]"}],
      constraints: ["-10⁵ ≤ num ≤ 10⁵", "At most 5×10⁴ calls to addNum and findMedian"]
    },
    '27': {
      id: 27, title: "Longest Palindromic Substring", difficulty: "Medium", acceptance: "55%", submissions: "1M",
      description: `Given a string s, return the longest palindromic substring in s. A palindrome is a string that reads the same backward as forward.`,
      examples: [{input: 's = "babad"', output: '"bab"', explanation: '"aba" is also valid'}],
      constraints: ["1 ≤ s.length ≤ 1000", "s consist of only digits and English letters"]
    },
    '28': {
      id: 28, title: "Regular Expression Matching", difficulty: "Hard", acceptance: "34%", submissions: "500K",
      description: `Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where '.' matches any single character and '*' matches zero or more of the preceding element.`,
      examples: [{input: 's = "aa", p = "a"', output: "false"}, {input: 's = "aa", p = "a*"', output: "true"}],
      constraints: ["1 ≤ s.length ≤ 20", "1 ≤ p.length ≤ 30", "s contains only lowercase English letters"]
    },
    '29': {
      id: 29, title: "Edit Distance", difficulty: "Hard", acceptance: "41%", submissions: "600K",
      description: `Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2. You can insert, delete, or replace a character. This is the classic Levenshtein distance problem.`,
      examples: [{input: 'word1 = "horse", word2 = "ros"', output: "3", explanation: "horse -> rorse -> rose -> ros"}],
      constraints: ["0 ≤ word1.length, word2.length ≤ 500"]
    },
    '30': {
      id: 30, title: "Trapping Rain Water", difficulty: "Hard", acceptance: "43%", submissions: "700K",
      description: `Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining. Use two-pointer technique for optimal solution.`,
      examples: [{input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]", output: "6"}],
      constraints: ["n == height.length", "1 ≤ n ≤ 2×10⁴", "0 ≤ height[i] ≤ 10⁵"]
    },
    '31': {
      id: 31, title: "Sliding Window Maximum", difficulty: "Hard", acceptance: "37%", submissions: "600K",
      description: `You are given an array of integers nums and an integer k. There is a sliding window of size k which is moving from the very left to the very right. Return the max sliding window. Use deque for optimal O(n) solution.`,
      examples: [{input: "nums = [1,3,-1,-3,5,3,6,7], k = 3", output: "[3,3,5,5,6,7]"}],
      constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴", "1 ≤ k ≤ nums.length"]
    },
    '32': {
      id: 32, title: "Merge Intervals", difficulty: "Medium", acceptance: "61%", submissions: "900K",
      description: `Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals.`,
      examples: [{input: "intervals = [[1,3],[2,6],[8,10],[15,18]]", output: "[[1,6],[8,10],[15,18]]"}],
      constraints: ["1 ≤ intervals.length ≤ 10⁴", "intervals[i].length == 2", "0 ≤ starti ≤ endi ≤ 10⁴"]
    },
    '33': {
      id: 33, title: "Rotate Image", difficulty: "Medium", acceptance: "65%", submissions: "850K",
      description: `You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise). You have to rotate the image in-place.`,
      examples: [{input: "matrix = [[1,2,3],[4,5,6],[7,8,9]]", output: "[[7,4,1],[8,5,2],[9,6,3]]"}],
      constraints: ["n == matrix.length == matrix[i].length", "1 ≤ n ≤ 20", "-1000 ≤ matrix[i][j] ≤ 1000"]
    },
    '34': {
      id: 34, title: "Group Anagrams", difficulty: "Medium", acceptance: "62%", submissions: "950K",
      description: `Given an array of strings strs, group the anagrams together. An Anagram is a word formed by rearranging the letters of a different word.`,
      examples: [{input: 'strs = ["eat","tea","tan","ate","nat","bat"]', output: '[["bat"],["nat","tan"],["ate","eat","tea"]]'}],
      constraints: ["1 ≤ strs.length ≤ 10⁴", "0 ≤ strs[i].length ≤ 100"]
    },
    '35': {
      id: 35, title: "Permutations", difficulty: "Medium", acceptance: "68%", submissions: "1.1M",
      description: `Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order. Use backtracking to generate all permutations.`,
      examples: [{input: "nums = [1,2,3]", output: "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]"}],
      constraints: ["1 ≤ nums.length ≤ 6", "-10 ≤ nums[i] ≤ 10", "All integers are unique"]
    },
    '36': {
      id: 36, title: "Subsets", difficulty: "Medium", acceptance: "70%", submissions: "1M",
      description: `Given an integer array nums of unique elements, return all possible subsets (the power set). The solution set must not contain duplicate subsets.`,
      examples: [{input: "nums = [1,2,3]", output: "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]"}],
      constraints: ["1 ≤ nums.length ≤ 10", "-10 ≤ nums[i] ≤ 10", "All numbers are unique"]
    },
    '37': {
      id: 37, title: "N-Queens Problem", difficulty: "Hard", acceptance: "36%", submissions: "550K",
      description: `The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other. Given an integer n, return all distinct solutions to the n-queens puzzle.`,
      examples: [{input: "n = 4", output: '[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]'}],
      constraints: ["1 ≤ n ≤ 9"]
    },
    '38': {
      id: 38, title: "Word Search", difficulty: "Medium", acceptance: "55%", submissions: "900K",
      description: `Given an m x n grid of characters board and a string word, return true if word exists in the grid. The word can be constructed from letters of sequentially adjacent cells (horizontally or vertically). Use backtracking with visited tracking.`,
      examples: [{input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"', output: "true"}],
      constraints: ["m == board.length", "n = board[i].length", "1 ≤ m, n ≤ 6", "1 ≤ word.length ≤ 15"]
    },
    '39': {
      id: 39, title: "Palindrome Partitioning", difficulty: "Medium", acceptance: "52%", submissions: "700K",
      description: `Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.`,
      examples: [{input: 's = "aab"', output: '[["a","a","b"],["aa","b"]]'}],
      constraints: ["1 ≤ s.length ≤ 16", "s contains only lowercase English letters"]
    },
    '40': {
      id: 40, title: "Kth Largest Element", difficulty: "Medium", acceptance: "64%", submissions: "1M",
      description: `Given an integer array nums and an integer k, return the kth largest element in the array. Note that it is the kth largest element in sorted order, not the kth distinct element. Use quickselect or heap for optimal solution.`,
      examples: [{input: "nums = [3,2,1,5,6,4], k = 2", output: "5"}],
      constraints: ["1 ≤ k ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"]
    },
    '41': {
      id: 41, title: "Top K Frequent Elements", difficulty: "Medium", acceptance: "63%", submissions: "950K",
      description: `Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order. Use bucket sort or heap for optimal solution.`,
      examples: [{input: "nums = [1,1,1,2,2,3], k = 2", output: "[1,2]"}],
      constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴", "k is in the range [1, number of unique elements]"]
    },
    '42': {
      id: 42, title: "Meeting Rooms II", difficulty: "Medium", acceptance: "57%", submissions: "800K",
      description: `Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...], find the minimum number of conference rooms required. Use min-heap to track end times.`,
      examples: [{input: "intervals = [[0,30],[5,10],[15,20]]", output: "2"}],
      constraints: ["1 ≤ intervals.length ≤ 10⁴", "0 ≤ starti < endi ≤ 10⁶"]
    },
    '43': {
      id: 43, title: "Binary Search", difficulty: "Easy", acceptance: "84%", submissions: "1.5M",
      description: `Given a sorted array of integers nums and a target value, return the index of target in nums. If target is not found, return -1. Implement classic binary search algorithm.`,
      examples: [{input: "nums = [-1,0,3,5,9,12], target = 9", output: "4"}],
      constraints: ["1 ≤ nums.length ≤ 10⁴", "-10⁴ < nums[i], target < 10⁴", "All integers in nums are unique", "nums is sorted in ascending order"]
    },
    '44': {
      id: 44, title: "Search in Rotated Array", difficulty: "Medium", acceptance: "59%", submissions: "900K",
      description: `There is an integer array nums sorted in ascending order (with distinct values). Prior to being passed to your function, nums is possibly rotated. Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums. Use modified binary search.`,
      examples: [{input: "nums = [4,5,6,7,0,1,2], target = 0", output: "4"}],
      constraints: ["1 ≤ nums.length ≤ 5000", "-10⁴ ≤ nums[i] ≤ 10⁴", "All values of nums are unique"]
    },
    '45': {
      id: 45, title: "Find Peak Element", difficulty: "Medium", acceptance: "62%", submissions: "850K",
      description: `A peak element is an element that is strictly greater than its neighbors. Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks. Use binary search for O(log n) solution.`,
      examples: [{input: "nums = [1,2,3,1]", output: "2", explanation: "3 is a peak element"}],
      constraints: ["1 ≤ nums.length ≤ 1000", "-2³¹ ≤ nums[i] ≤ 2³¹ - 1", "nums[i] != nums[i + 1] for all valid i"]
    }
  };

  const problem = problems[problemId] || problems['1'];

  // Problem function signatures and metadata
  const problemConfig = {
    '1': { fn: 'twoSum', params: ['nums', 'target'], type: 'array' },
    '2': { fn: 'inorderTraversal', params: ['root'], type: 'array', helper: 'tree' },
    '3': { fn: 'maxSubArray', params: ['nums'], type: 'number' },
    '4': { fn: 'isValid', params: ['s'], type: 'boolean' },
    '5': { fn: 'reverseList', params: ['head'], type: 'list', helper: 'list' },
    '6': { fn: 'mergeTwoLists', params: ['l1', 'l2'], type: 'list', helper: 'list' },
    '7': { fn: 'maxProfit', params: ['prices'], type: 'number' },
    '8': { fn: 'lengthOfLongestSubstring', params: ['s'], type: 'number' },
    '9': { fn: 'maxArea', params: ['height'], type: 'number' },
    '10': { fn: 'threeSum', params: ['nums'], type: 'array' },
    '11': { fn: 'letterCombinations', params: ['digits'], type: 'array' },
    '12': { fn: 'generateParenthesis', params: ['n'], type: 'array' },
    '13': { fn: 'mergeKLists', params: ['lists'], type: 'array' },
    '14': { fn: 'isValidSudoku', params: ['board'], type: 'boolean' },
    '15': { fn: 'climbStairs', params: ['n'], type: 'number' },
    '16': { fn: 'rob', params: ['nums'], type: 'number' },
    '17': { fn: 'coinChange', params: ['coins', 'amount'], type: 'number' },
    '18': { fn: 'longestCommonSubsequence', params: ['text1', 'text2'], type: 'number' },
    '19': { fn: 'wordBreak', params: ['s', 'wordDict'], type: 'boolean' },
    '20': { fn: 'numIslands', params: ['grid'], type: 'number' },
    '21': { fn: 'canFinish', params: ['numCourses', 'prerequisites'], type: 'boolean' },
    '22': { fn: 'levelOrder', params: ['root'], type: 'array', helper: 'tree' },
    '23': { fn: 'lowestCommonAncestor', params: ['root', 'p', 'q'], type: 'number', helper: 'tree' },
    '24': { fn: 'serialize', params: ['root'], type: 'string', helper: 'tree' },
    '25': { fn: 'Trie', params: [], type: 'class' },
    '26': { fn: 'MedianFinder', params: [], type: 'class' },
    '27': { fn: 'longestPalindrome', params: ['s'], type: 'string' },
    '28': { fn: 'isMatch', params: ['s', 'p'], type: 'boolean' },
    '29': { fn: 'minDistance', params: ['word1', 'word2'], type: 'number' },
    '30': { fn: 'trap', params: ['height'], type: 'number' },
    '31': { fn: 'maxSlidingWindow', params: ['nums', 'k'], type: 'array' },
    '32': { fn: 'merge', params: ['intervals'], type: 'array' },
    '33': { fn: 'rotate', params: ['matrix'], type: 'void' },
    '34': { fn: 'groupAnagrams', params: ['strs'], type: 'array' },
    '35': { fn: 'permute', params: ['nums'], type: 'array' },
    '36': { fn: 'subsets', params: ['nums'], type: 'array' },
    '37': { fn: 'solveNQueens', params: ['n'], type: 'array' },
    '38': { fn: 'exist', params: ['board', 'word'], type: 'boolean' },
    '39': { fn: 'partition', params: ['s'], type: 'array' },
    '40': { fn: 'findKthLargest', params: ['nums', 'k'], type: 'number' },
    '41': { fn: 'topKFrequent', params: ['nums', 'k'], type: 'array' },
    '42': { fn: 'minMeetingRooms', params: ['intervals'], type: 'number' },
    '43': { fn: 'binarySearch', params: ['nums', 'target'], type: 'number' },
    '44': { fn: 'search', params: ['nums', 'target'], type: 'number' },
    '45': { fn: 'findPeakElement', params: ['nums'], type: 'number' }
  };

  const getLanguageTemplate = (problemId, language, testInputs = []) => {
    const config = problemConfig[problemId];
    if (!config) {
      return language === 'javascript' ? '// Write your code here\nconsole.log("Test 1: 0");' :
             language === 'python' ? '# Write your code here\nprint("Test 1: 0")' :
             language === 'java' ? 'import java.util.*;\n\npublic class Solution {\n    public int solve() {\n        return 0;\n    }\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        System.out.println("Test 1: " + sol.solve());\n    }\n}' :
             '#include <iostream>\nusing namespace std;\nclass Solution {\npublic:\n    int solve() { return 0; }\n};\nint main() {\n    Solution sol;\n    cout << "Test 1: " << sol.solve() << endl;\n    return 0;\n}';
    }

    return generateTemplate(config, language, testInputs);
  };

  const generateTestCalls = (fn, params, language, testInputs = []) => {
    // Convert test input value to language-specific format
    const formatValue = (value) => {
      if (Array.isArray(value)) {
        if (language === 'java') {
          // Check if it's a 2D array
          if (Array.isArray(value[0])) {
            const rows = value.map(row => `{${row.join(',')}}`).join(',');
            return `new int[][]{ ${rows}}`;
          }
          return `new int[]{${value.join(',')}}`;
        } else if (language === 'cpp') {
          if (Array.isArray(value[0])) {
            const rows = value.map(row => `{${row.join(',')}}`).join(',');
            return `{{${rows}}}`;
          }
          return `{${value.join(',')}}`;
        } else {
          return JSON.stringify(value);
        }
      }
      if (typeof value === 'string') {
        return `"${value}"`;
      }
      return value;
    };
    
    // Generate test calls from actual test inputs
    const testCalls = [];
    const numTests = testInputs.length > 0 ? testInputs.length : 3; // Use actual test count or default to 3
    
    for (let i = 0; i < numTests; i++) {
      const testNum = i + 1;
      let args;
      
      if (i < testInputs.length) {
        // Use actual test input
        const input = testInputs[i];
        args = params.map(p => formatValue(input[p])).join(', ');
      } else {
        // Fallback to sample values if not enough test cases
        args = params.map(p => formatValue(p === 'n' ? 4 : 0)).join(', ');
      }
      
      if (language === 'java') {
        testCalls.push(`        System.out.println("Test ${testNum}: " + toJson(sol.${fn}(${args})));`);
      } else if (language === 'cpp') {
        testCalls.push(`    cout << "Test ${testNum}: " << sol.${fn}(${args}) << endl;`);
      } else if (language === 'python') {
        testCalls.push(`print(f"Test ${testNum}: {${fn}(${args})}")`);
      } else {
        testCalls.push(`console.log("Test ${testNum}: " + JSON.stringify(${fn}(${args})));`);
      }
    }
    
    return testCalls.join('\n');
  };

  const generateTemplate = (config, language, testInputs = []) => {
    const { fn, params, type } = config;
    
    if (language === 'javascript') {
      const defaultRet = type === 'number' ? 'return 0;' : type === 'boolean' ? 'return false;' : type === 'string' ? 'return "";' : type === 'void' ? 'return;' : 'return [];';
      const testCalls = generateTestCalls(fn, params, 'javascript', testInputs);
      
      return `function ${fn}(${params.join(', ')}) {
    // Write your code here
    ${defaultRet}
}

// Test code - DO NOT MODIFY
${testCalls}`;
    } 
    
    else if (language === 'python') {
      const defaultRet = type === 'number' ? 'return 0' : type === 'boolean' ? 'return False' : type === 'string' ? 'return ""' : type === 'void' ? 'return' : 'return []';
      const testCalls = generateTestCalls(fn, params, 'python', testInputs);
      
      return `def ${fn}(${params.join(', ')}):
    # Write your code here
    ${defaultRet}

# Test code - DO NOT MODIFY
${testCalls}`;
    } 
    
    else if (language === 'java') {
      const javaType = type === 'number' ? 'int' : type === 'boolean' ? 'boolean' : type === 'string' ? 'String' : type === 'void' ? 'void' : type === 'list' ? 'ListNode' : type === 'array' ? 'List<List<String>>' : 'List<Integer>';
      const defaultRet = type === 'number' ? 'return 0;' : type === 'boolean' ? 'return false;' : type === 'string' ? 'return "";' : type === 'void' ? 'return;' : type === 'list' ? 'return null;' : 'return new ArrayList<>();';
      const javaParams = params.map(p => {
        if (p.includes('nums') || p.includes('prices') || p.includes('height') || p.includes('coins')) return `int[] ${p}`;
        if (p.includes('target') || p.includes('amount') || p.includes('k') || p === 'n' || p === 'p' || p === 'q') return `int ${p}`;
        if (p === 's' || p.includes('text') || p.includes('word') || p.includes('digits')) return `String ${p}`;
        if (p.includes('List') || p === 'head' || p === 'l1' || p === 'l2') return `ListNode ${p}`;
        if (p.includes('Dict')) return `List<String> ${p}`;
        if (p.includes('grid') || p.includes('board') || p.includes('matrix')) return `int[][] ${p}`;
        if (p === 'root') return `TreeNode ${p}`;
        if (p.includes('intervals')) return `int[][] ${p}`;
        if (p.includes('lists')) return `ListNode[] ${p}`;
        if (p.includes('strs')) return `String[] ${p}`;
        if (p.includes('prerequisites')) return `int[][] ${p}`;
        return `int ${p}`;
      }).join(', ');
      
      // Generate test calls with actual test inputs
      const testCalls = generateTestCalls(fn, params, 'java', testInputs);
      
      return `import java.util.*;

public class Solution {
    public ${javaType} ${fn}(${javaParams}) {
        // Write your code here
        ${defaultRet}
    }
    
    // Helper method to convert List to JSON format
    private static String toJson(Object obj) {
        if (obj == null) return "null";
        if (obj instanceof List) {
            List<?> list = (List<?>) obj;
            if (list.isEmpty()) return "[]";
            StringBuilder sb = new StringBuilder("[");
            for (int i = 0; i < list.size(); i++) {
                if (i > 0) sb.append(",");
                sb.append(toJson(list.get(i)));
            }
            sb.append("]");
            return sb.toString();
        }
        if (obj instanceof String) {
            return "\\"" + obj + "\\"";
        }
        return String.valueOf(obj);
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
${testCalls}
    }
}`;
    } 
    
    else if (language === 'cpp') {
      const cppType = type === 'number' ? 'int' : type === 'boolean' ? 'bool' : type === 'string' ? 'string' : type === 'void' ? 'void' : type === 'list' ? 'ListNode*' : type === 'array' ? 'vector<vector<string>>' : 'vector<int>';
      const defaultRet = type === 'number' ? 'return 0;' : type === 'boolean' ? 'return false;' : type === 'string' ? 'return "";' : type === 'void' ? 'return;' : type === 'list' ? 'return nullptr;' : 'return {};';
      const cppParams = params.map(p => {
        if (p.includes('nums') || p.includes('prices') || p.includes('height') || p.includes('coins')) return `vector<int>& ${p}`;
        if (p.includes('target') || p.includes('amount') || p.includes('k') || p === 'n' || p === 'p' || p === 'q') return `int ${p}`;
        if (p === 's' || p.includes('text') || p.includes('word') || p.includes('digits')) return `string ${p}`;
        if (p.includes('List') || p === 'head' || p === 'l1' || p === 'l2') return `ListNode* ${p}`;
        if (p.includes('Dict')) return `vector<string>& ${p}`;
        if (p.includes('grid') || p.includes('board') || p.includes('matrix')) return `vector<vector<int>>& ${p}`;
        if (p === 'root') return `TreeNode* ${p}`;
        if (p.includes('intervals')) return `vector<vector<int>>& ${p}`;
        if (p.includes('lists')) return `vector<ListNode*>& ${p}`;
        if (p.includes('strs')) return `vector<string>& ${p}`;
        if (p.includes('prerequisites')) return `vector<vector<int>>& ${p}`;
        return `int ${p}`;
      }).join(', ');
      
      const testCalls = generateTestCalls(fn, params, 'cpp', testInputs);
      
      return `#include <iostream>
#include <vector>
#include <string>
using namespace std;

class Solution {
public:
    ${cppType} ${fn}(${cppParams}) {
        // Write your code here
        ${defaultRet}
    }
};

int main() {
    Solution sol;
${testCalls}
    return 0;
}`;
    }
    
    return '// Template not available';
  };

  const languages = {
    javascript: { name: 'JavaScript' },
    python: { name: 'Python' },
    java: { name: 'Java' },
    cpp: { name: 'C++' }
  };

  // Fetch test case inputs
  React.useEffect(() => {
    const fetchTestCases = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/test-cases/${problemId}`);
        if (response.data.success) {
          setTestCaseInputs(response.data.inputs);
          // Regenerate template with actual test inputs
          const template = getLanguageTemplate(problemId, selectedLanguage, response.data.inputs);
          setCode(template);
        }
      } catch (error) {
        console.error('Error fetching test cases:', error);
        // Fallback to template without test inputs
        const template = getLanguageTemplate(problemId, selectedLanguage, []);
        setCode(template);
      }
    };
    
    fetchTestCases();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [problemId, selectedLanguage]);

  const handleEditorDidMount = (editor) => {
    editorRef.current = editor;
  };

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    // Template will be updated by useEffect when testCaseInputs are available
  };

  const runCode = async () => {
    if (!code.trim()) {
      setOutput('Error: Please write some code before running.');
      return;
    }

    setIsRunning(true);
    setOutput('Executing code...\n');
    
    try {
      const response = await axios.post(`${API_URL}/api/execute`, {
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
        errorMsg += `Backend URL: ${API_URL}\n\n`;
        errorMsg += '🔧 If running locally:\n';
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
      const response = await axios.post(`${API_URL}/api/validate`, {
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
        errorMsg += `Backend URL: ${API_URL}\n`;
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