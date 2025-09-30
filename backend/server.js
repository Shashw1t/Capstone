const express = require('express');
const cors = require('cors');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Create temp directory for code files
const tempDir = path.join(__dirname, 'temp');
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir);
}

// Test cases for problems
const testCases = {
  '1': { // Two Sum
    cases: [
      { input: { nums: [2, 7, 11, 15], target: 9 }, expected: [0, 1] },
      { input: { nums: [3, 2, 4], target: 6 }, expected: [1, 2] },
      { input: { nums: [3, 3], target: 6 }, expected: [0, 1] }
    ]
  },
  '2': { // Binary Tree Inorder Traversal
    cases: [
      { input: 'tree:[1,null,2,3]', expected: [1, 3, 2] }
    ]
  },
  '3': { // Maximum Subarray
    cases: [
      { input: { nums: [-2, 1, -3, 4, -1, 2, 1, -5, 4] }, expected: 6 },
      { input: { nums: [1] }, expected: 1 },
      { input: { nums: [5, 4, -1, 7, 8] }, expected: 23 }
    ]
  }
};

// Language configurations
const languageConfig = {
  javascript: {
    extension: '.js',
    compile: null,
    run: (filename) => `node "${filename}"`
  },
  python: {
    extension: '.py',
    compile: null,
    run: (filename) => `python "${filename}"`
  },
  java: {
    extension: '.java',
    compile: (filename) => `javac "${filename}"`,
    run: (filename) => {
      const className = path.basename(filename, '.java');
      return `java -cp "${path.dirname(filename)}" ${className}`;
    }
  },
  cpp: {
    extension: '.cpp',
    compile: (filename) => `g++ "${filename}" -o "${filename.replace('.cpp', '.exe')}"`,
    run: (filename) => `"${filename.replace('.cpp', '.exe')}"`
  }
};

// Execute code endpoint
app.post('/api/execute', async (req, res) => {
  const { code, language, input = '' } = req.body;
  
  if (!code || !language) {
    return res.status(400).json({ error: 'Code and language are required' });
  }

  if (!languageConfig[language]) {
    return res.status(400).json({ error: 'Unsupported language' });
  }

  const config = languageConfig[language];
  const fileId = uuidv4();
  const filename = path.join(tempDir, fileId + config.extension);
  
  try {
    // Write code to file
    fs.writeFileSync(filename, code);
    
    const startTime = Date.now();
    
    // Compile if needed
    if (config.compile) {
      const compileCommand = config.compile(filename);
      
      await new Promise((resolve, reject) => {
        exec(compileCommand, { timeout: 10000 }, (error, stdout, stderr) => {
          if (error) {
            reject(new Error(`Compilation failed: ${stderr || error.message}`));
          } else {
            resolve();
          }
        });
      });
    }
    
    // Run the code
    const runCommand = config.run(filename);
    
    exec(runCommand, { timeout: 5000 }, (error, stdout, stderr) => {
      const executionTime = Date.now() - startTime;
      
      // Clean up files
      try {
        fs.unlinkSync(filename);
        if (language === 'java') {
          const classFile = filename.replace('.java', '.class');
          if (fs.existsSync(classFile)) {
            fs.unlinkSync(classFile);
          }
        }
        if (language === 'cpp') {
          const exeFile = filename.replace('.cpp', '.exe');
          if (fs.existsSync(exeFile)) {
            fs.unlinkSync(exeFile);
          }
        }
      } catch (cleanupError) {
        console.error('Cleanup error:', cleanupError);
      }
      
      if (error) {
        if (error.signal === 'SIGTERM') {
          return res.json({
            success: false,
            output: '',
            error: 'Time Limit Exceeded (5 seconds)',
            executionTime
          });
        }
        
        return res.json({
          success: false,
          output: stdout || '',
          error: stderr || error.message,
          executionTime
        });
      }
      
      res.json({
        success: true,
        output: stdout,
        error: stderr,
        executionTime
      });
    });
    
  } catch (error) {
    // Clean up on error
    try {
      if (fs.existsSync(filename)) {
        fs.unlinkSync(filename);
      }
    } catch (cleanupError) {
      console.error('Cleanup error:', cleanupError);
    }
    
    res.json({
      success: false,
      output: '',
      error: error.message,
      executionTime: 0
    });
  }
});

// Validate solution endpoint
app.post('/api/validate', async (req, res) => {
  const { code, language, problemId } = req.body;
  
  if (!code || !language || !problemId) {
    return res.status(400).json({ 
      success: false, 
      error: 'Code, language, and problemId are required' 
    });
  }

  if (!languageConfig[language]) {
    return res.status(400).json({ 
      success: false, 
      error: 'Unsupported language' 
    });
  }

  const problemTestCases = testCases[problemId];
  if (!problemTestCases) {
    return res.status(400).json({
      success: false,
      error: 'Invalid problem ID'
    });
  }

  const config = languageConfig[language];
  const fileId = uuidv4();
  const filename = path.join(tempDir, fileId + config.extension);
  
  try {
    // Write code to file
    fs.writeFileSync(filename, code);
    
    const startTime = Date.now();
    
    // Compile if needed
    if (config.compile) {
      const compileCommand = config.compile(filename);
      
      await new Promise((resolve, reject) => {
        exec(compileCommand, { timeout: 10000 }, (error, stdout, stderr) => {
          if (error) {
            reject(new Error(`Compilation failed: ${stderr || error.message}`));
          } else {
            resolve();
          }
        });
      });
    }
    
    // Run the code
    const runCommand = config.run(filename);
    
    exec(runCommand, { timeout: 10000 }, (error, stdout, stderr) => {
      const executionTime = Date.now() - startTime;
      
      // Clean up files
      cleanup(filename, language);
      
      if (error) {
        return res.json({
          success: false,
          output: stderr || error.message,
          testResults: [],
          allTestsPassed: false,
          totalTests: 0,
          passedTests: 0,
          executionTime
        });
      }
      
      // Parse test outputs and validate
      const outputs = stdout.trim().split('\n');
      const results = parseTestResults(outputs, problemTestCases.cases);
      
      res.json({
        success: true,
        output: stdout,
        testResults: results,
        allTestsPassed: results.every(r => r.passed),
        totalTests: results.length,
        passedTests: results.filter(r => r.passed).length,
        executionTime
      });
    });
    
  } catch (error) {
    cleanup(filename, language);
    
    res.json({
      success: false,
      output: '',
      error: error.message,
      testResults: [],
      allTestsPassed: false,
      totalTests: 0,
      passedTests: 0,
      executionTime: 0
    });
  }
});

function parseTestResults(outputs, expectedResults) {
  const results = [];
  
  outputs.forEach((output, index) => {
    if (output.startsWith('Test ')) {
      const testOutput = output.split(': ')[1];
      const expected = expectedResults[index]?.expected;
      
      let actual;
      try {
        actual = JSON.parse(testOutput);
      } catch (e) {
        // Handle non-JSON outputs (like numbers)
        actual = testOutput.trim();
        if (!isNaN(actual)) {
          actual = Number(actual);
        }
      }
      
      const passed = JSON.stringify(actual) === JSON.stringify(expected);
      
      results.push({
        testCase: index + 1,
        expected: expected,
        actual: actual,
        passed: passed
      });
    }
  });
  
  return results;
}

function cleanup(filename, language) {
  try {
    if (fs.existsSync(filename)) {
      fs.unlinkSync(filename);
    }
    
    if (language === 'java') {
      const classFile = filename.replace('.java', '.class');
      if (fs.existsSync(classFile)) {
        fs.unlinkSync(classFile);
      }
    }
    
    if (language === 'cpp') {
      const exeFile = filename.replace('.cpp', '.exe');
      if (fs.existsSync(exeFile)) {
        fs.unlinkSync(exeFile);
      }
    }
  } catch (cleanupError) {
    console.error('Cleanup error:', cleanupError);
  }
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Code execution server is running' });
});

// Test endpoint for supported languages
app.get('/api/languages', (req, res) => {
  res.json({
    supported: Object.keys(languageConfig),
    languages: Object.entries(languageConfig).map(([key, config]) => ({
      key,
      extension: config.extension,
      requiresCompilation: !!config.compile
    }))
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Code execution server running on http://localhost:${PORT}`);
  console.log(`📋 Supported languages: ${Object.keys(languageConfig).join(', ')}`);
});

module.exports = app;