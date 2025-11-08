// Comprehensive problem templates for all 45 problems and 4 languages
// Each template includes the function signature and test execution code

export const problemTemplates = {
  '1': { // Two Sum
    javascript: `function twoSum(nums, target) {
    // Write your code here
    return [];
}

// Test code - DO NOT MODIFY
const tests = [
    {nums: [2,7,11,15], target: 9},
    {nums: [3,2,4], target: 6},
    {nums: [3,3], target: 6},
    {nums: [1,5,3,7,9], target: 8}
];
tests.forEach((t, i) => {
    console.log(\`Test \${i+1}: \${JSON.stringify(twoSum(t.nums, t.target))}\`);
});`,
    python: `def twoSum(nums, target):
    # Write your code here
    return []

# Test code - DO NOT MODIFY
tests = [
    {"nums": [2,7,11,15], "target": 9},
    {"nums": [3,2,4], "target": 6},
    {"nums": [3,3], "target": 6},
    {"nums": [1,5,3,7,9], "target": 8}
]
for i, t in enumerate(tests):
    print(f"Test {i+1}: {twoSum(t['nums'], t['target'])}")`,
    java: `import java.util.*;

public class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Write your code here
        return new int[]{};
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        int[][] nums = {{2,7,11,15}, {3,2,4}, {3,3}, {1,5,3,7,9}};
        int[] targets = {9, 6, 6, 8};
        for (int i = 0; i < nums.length; i++) {
            System.out.println("Test " + (i+1) + ": " + Arrays.toString(sol.twoSum(nums[i], targets[i])));
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

int main() {
    Solution sol;
    vector<vector<int>> nums = {{2,7,11,15}, {3,2,4}, {3,3}, {1,5,3,7,9}};
    vector<int> targets = {9, 6, 6, 8};
    for (int i = 0; i < nums.size(); i++) {
        auto res = sol.twoSum(nums[i], targets[i]);
        cout << "Test " << i+1 << ": [";
        for (int j = 0; j < res.size(); j++) {
            cout << res[j]; if (j < res.size()-1) cout << ",";
        }
        cout << "]" << endl;
    }
    return 0;
}`
  },

  '2': { // Binary Tree Traversal
    javascript: `class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val; this.left = left; this.right = right;
    }
}

function inorderTraversal(root) {
    // Write your code here
    return [];
}

// Test code - DO NOT MODIFY
function buildTree(arr) {
    if (!arr.length) return null;
    let root = new TreeNode(arr[0]), q = [root], i = 1;
    while (q.length && i < arr.length) {
        let node = q.shift();
        if (i < arr.length && arr[i] !== null) {
            node.left = new TreeNode(arr[i]); q.push(node.left);
        }
        i++;
        if (i < arr.length && arr[i] !== null) {
            node.right = new TreeNode(arr[i]); q.push(node.right);
        }
        i++;
    }
    return root;
}
const tests = [[1,null,2,3], [1], []];
tests.forEach((t, i) => {
    console.log(\`Test \${i+1}: \${JSON.stringify(inorderTraversal(buildTree(t)))}\`);
});`,
    python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def inorderTraversal(root):
    # Write your code here
    return []

# Test code - DO NOT MODIFY
def buildTree(arr):
    if not arr: return None
    root = TreeNode(arr[0])
    q, i = [root], 1
    while q and i < len(arr):
        node = q.pop(0)
        if i < len(arr) and arr[i] is not None:
            node.left = TreeNode(arr[i])
            q.append(node.left)
        i += 1
        if i < len(arr) and arr[i] is not None:
            node.right = TreeNode(arr[i])
            q.append(node.right)
        i += 1
    return root

tests = [[1, None, 2, 3], [1], []]
for i, t in enumerate(tests):
    print(f"Test {i+1}: {inorderTraversal(buildTree(t))}")`,
    java: `import java.util.*;

class TreeNode {
    int val;
    TreeNode left, right;
    TreeNode(int v) { val = v; }
}

public class Solution {
    public List<Integer> inorderTraversal(TreeNode root) {
        // Write your code here
        return new ArrayList<>();
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        // Simplified test for Java
        TreeNode root = new TreeNode(1);
        root.right = new TreeNode(2);
        root.right.left = new TreeNode(3);
        System.out.println("Test 1: " + sol.inorderTraversal(root));
        System.out.println("Test 2: " + sol.inorderTraversal(new TreeNode(1)));
        System.out.println("Test 3: " + sol.inorderTraversal(null));
    }
}`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;

struct TreeNode {
    int val;
    TreeNode *left, *right;
    TreeNode(int v) : val(v), left(nullptr), right(nullptr) {}
};

class Solution {
public:
    vector<int> inorderTraversal(TreeNode* root) {
        // Write your code here
        return {};
    }
};

int main() {
    Solution sol;
    TreeNode* root = new TreeNode(1);
    root->right = new TreeNode(2);
    root->right->left = new TreeNode(3);
    auto res = sol.inorderTraversal(root);
    cout << "Test 1: [";
    for (int i = 0; i < res.size(); i++) {
        cout << res[i]; if (i < res.size()-1) cout << ",";
    }
    cout << "]" << endl;
    return 0;
}`
  },

  '3': { // Maximum Subarray
    javascript: `function maxSubArray(nums) {
    // Write your code here
    return 0;
}

// Test code - DO NOT MODIFY
const tests = [
    {nums: [-2,1,-3,4,-1,2,1,-5,4]},
    {nums: [1]},
    {nums: [5,4,-1,7,8]},
    {nums: [-1,-2,-3,-4]}
];
tests.forEach((t, i) => {
    console.log(\`Test \${i+1}: \${maxSubArray(t.nums)}\`);
});`,
    python: `def maxSubArray(nums):
    # Write your code here
    return 0

# Test code - DO NOT MODIFY
tests = [
    {"nums": [-2,1,-3,4,-1,2,1,-5,4]},
    {"nums": [1]},
    {"nums": [5,4,-1,7,8]},
    {"nums": [-1,-2,-3,-4]}
]
for i, t in enumerate(tests):
    print(f"Test {i+1}: {maxSubArray(t['nums'])}")`,
    java: `import java.util.*;

public class Solution {
    public int maxSubArray(int[] nums) {
        // Write your code here
        return 0;
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        int[][] tests = {{-2,1,-3,4,-1,2,1,-5,4}, {1}, {5,4,-1,7,8}, {-1,-2,-3,-4}};
        for (int i = 0; i < tests.length; i++) {
            System.out.println("Test " + (i+1) + ": " + sol.maxSubArray(tests[i]));
        }
    }
}`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        // Write your code here
        return 0;
    }
};

int main() {
    Solution sol;
    vector<vector<int>> tests = {{-2,1,-3,4,-1,2,1,-5,4}, {1}, {5,4,-1,7,8}, {-1,-2,-3,-4}};
    for (int i = 0; i < tests.size(); i++) {
        cout << "Test " << i+1 << ": " << sol.maxSubArray(tests[i]) << endl;
    }
    return 0;
}`
  },

  '4': { // Valid Parentheses
    javascript: `function isValid(s) {
    // Write your code here
    return false;
}

// Test code - DO NOT MODIFY
const tests = [{s: '()'}, {s: '()[]{}'}, {s: '(]'}, {s: '{[]}'}];
tests.forEach((t, i) => {
    console.log(\`Test \${i+1}: \${isValid(t.s)}\`);
});`,
    python: `def isValid(s):
    # Write your code here
    return False

# Test code - DO NOT MODIFY
tests = [{"s": "()"}, {"s": "()[]{}"}, {"s": "(]"}, {"s": "{[]}"}]
for i, t in enumerate(tests):
    print(f"Test {i+1}: {isValid(t['s'])}")`,
    java: `import java.util.*;

public class Solution {
    public boolean isValid(String s) {
        // Write your code here
        return false;
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        String[] tests = {"()", "()[]{}", "(]", "{[]}"};
        for (int i = 0; i < tests.length; i++) {
            System.out.println("Test " + (i+1) + ": " + sol.isValid(tests[i]));
        }
    }
}`,
    cpp: `#include <iostream>
#include <string>
using namespace std;

class Solution {
public:
    bool isValid(string s) {
        // Write your code here
        return false;
    }
};

int main() {
    Solution sol;
    string tests[] = {"()", "()[]{}", "(]", "{[]}"};
    for (int i = 0; i < 4; i++) {
        cout << "Test " << i+1 << ": " << (sol.isValid(tests[i]) ? "true" : "false") << endl;
    }
    return 0;
}`
  },

  '5': { // Reverse Linked List
    javascript: `class ListNode {
    constructor(val, next = null) {
        this.val = val; this.next = next;
    }
}

function reverseList(head) {
    // Write your code here
    return null;
}

// Test code - DO NOT MODIFY
function arrayToList(arr) {
    let dummy = new ListNode(0), cur = dummy;
    for (let v of arr) { cur.next = new ListNode(v); cur = cur.next; }
    return dummy.next;
}
function listToArray(head) {
    let arr = [];
    while (head) { arr.push(head.val); head = head.next; }
    return arr;
}
const tests = [[1,2,3,4,5], [1,2], [1]];
tests.forEach((t, i) => {
    console.log(\`Test \${i+1}: \${JSON.stringify(listToArray(reverseList(arrayToList(t))))}\`);
});`,
    python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverseList(head):
    # Write your code here
    return None

# Test code - DO NOT MODIFY
def arrayToList(arr):
    dummy = ListNode(0)
    cur = dummy
    for v in arr:
        cur.next = ListNode(v)
        cur = cur.next
    return dummy.next

def listToArray(head):
    arr = []
    while head:
        arr.append(head.val)
        head = head.next
    return arr

tests = [[1,2,3,4,5], [1,2], [1]]
for i, t in enumerate(tests):
    print(f"Test {i+1}: {listToArray(reverseList(arrayToList(t)))}")`,
    java: `import java.util.*;

class ListNode {
    int val;
    ListNode next;
    ListNode(int v) { val = v; }
}

public class Solution {
    public ListNode reverseList(ListNode head) {
        // Write your code here
        return null;
    }
    
    static ListNode arrayToList(int[] arr) {
        ListNode dummy = new ListNode(0), cur = dummy;
        for (int v : arr) { cur.next = new ListNode(v); cur = cur.next; }
        return dummy.next;
    }
    
    static String listToString(ListNode head) {
        StringBuilder sb = new StringBuilder("[");
        while (head != null) {
            sb.append(head.val);
            if (head.next != null) sb.append(",");
            head = head.next;
        }
        return sb.append("]").toString();
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        int[][] tests = {{1,2,3,4,5}, {1,2}, {1}};
        for (int i = 0; i < tests.length; i++) {
            System.out.println("Test " + (i+1) + ": " + listToString(sol.reverseList(arrayToList(tests[i]))));
        }
    }
}`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int v) : val(v), next(nullptr) {}
};

class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        // Write your code here
        return nullptr;
    }
};

ListNode* arrayToList(vector<int> arr) {
    ListNode* dummy = new ListNode(0), *cur = dummy;
    for (int v : arr) { cur->next = new ListNode(v); cur = cur->next; }
    return dummy->next;
}

int main() {
    Solution sol;
    vector<vector<int>> tests = {{1,2,3,4,5}, {1,2}, {1}};
    for (int i = 0; i < tests.size(); i++) {
        ListNode* res = sol.reverseList(arrayToList(tests[i]));
        cout << "Test " << i+1 << ": [";
        while (res) {
            cout << res->val;
            if (res->next) cout << ",";
            res = res->next;
        }
        cout << "]" << endl;
    }
    return 0;
}`
  }
};

// For problems 6-45, we'll create a generic template generator
const createGenericTemplate = (problemId, functionName, returnType, params) => {
  const templates = {
    javascript: `function ${functionName}(${params.join(', ')}) {
    // Write your code here
    return ${returnType === 'number' ? '0' : returnType === 'boolean' ? 'false' : returnType === 'string' ? '""' : '[]'};
}

// Test code - DO NOT MODIFY
console.log("Test 1: " + JSON.stringify(${functionName}()));
console.log("Test 2: " + JSON.stringify(${functionName}()));
console.log("Test 3: " + JSON.stringify(${functionName}()));`,
    
    python: `def ${functionName}(${params.join(', ')}):
    # Write your code here
    ${returnType === 'number' ? 'return 0' : returnType === 'boolean' ? 'return False' : returnType === 'string' ? 'return ""' : 'return []'}

# Test code - DO NOT MODIFY
print(f"Test 1: {${functionName}()}")
print(f"Test 2: {${functionName}()}")
print(f"Test 3: {${functionName}()}")`,
    
    java: `import java.util.*;

public class Solution {
    public ${returnType === 'number' ? 'int' : returnType === 'boolean' ? 'boolean' : returnType === 'string' ? 'String' : 'int[]'} ${functionName}(${params.map(p => 'int ' + p).join(', ')}) {
        // Write your code here
        return ${returnType === 'number' ? '0' : returnType === 'boolean' ? 'false' : returnType === 'string' ? '""' : 'new int[]{}'};
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println("Test 1: " + sol.${functionName}());
        System.out.println("Test 2: " + sol.${functionName}());
        System.out.println("Test 3: " + sol.${functionName}());
    }
}`,
    
    cpp: `#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    ${returnType === 'number' ? 'int' : returnType === 'boolean' ? 'bool' : returnType === 'string' ? 'string' : 'vector<int>'} ${functionName}(${params.map(p => 'int ' + p).join(', ')}) {
        // Write your code here
        return ${returnType === 'number' ? '0' : returnType === 'boolean' ? 'false' : returnType === 'string' ? '""' : '{}'};
    }
};

int main() {
    Solution sol;
    cout << "Test 1: " << sol.${functionName}() << endl;
    cout << "Test 2: " << sol.${functionName}() << endl;
    cout << "Test 3: " << sol.${functionName}() << endl;
    return 0;
}`
  };
  return templates;
};

// Add remaining problem templates (6-45)
const additionalProblems = {
  '6': createGenericTemplate('6', 'mergeTwoLists', 'array', ['l1', 'l2']),
  '7': createGenericTemplate('7', 'maxProfit', 'number', ['prices']),
  '8': createGenericTemplate('8', 'lengthOfLongestSubstring', 'number', ['s']),
  '9': createGenericTemplate('9', 'maxArea', 'number', ['height']),
  '10': createGenericTemplate('10', 'threeSum', 'array', ['nums']),
  '11': createGenericTemplate('11', 'letterCombinations', 'array', ['digits']),
  '12': createGenericTemplate('12', 'generateParenthesis', 'array', ['n']),
  '13': createGenericTemplate('13', 'mergeKLists', 'array', ['lists']),
  '14': createGenericTemplate('14', 'isValidSudoku', 'boolean', ['board']),
  '15': createGenericTemplate('15', 'climbStairs', 'number', ['n']),
  '16': createGenericTemplate('16', 'rob', 'number', ['nums']),
  '17': createGenericTemplate('17', 'coinChange', 'number', ['coins', 'amount']),
  '18': createGenericTemplate('18', 'longestCommonSubsequence', 'number', ['text1', 'text2']),
  '19': createGenericTemplate('19', 'wordBreak', 'boolean', ['s', 'wordDict']),
  '20': createGenericTemplate('20', 'numIslands', 'number', ['grid']),
  '21': createGenericTemplate('21', 'canFinish', 'boolean', ['numCourses', 'prerequisites']),
  '22': createGenericTemplate('22', 'levelOrder', 'array', ['root']),
  '23': createGenericTemplate('23', 'lowestCommonAncestor', 'number', ['root', 'p', 'q']),
  '24': createGenericTemplate('24', 'serialize', 'string', ['root']),
  '25': createGenericTemplate('25', 'Trie', 'class', []),
  '26': createGenericTemplate('26', 'MedianFinder', 'class', []),
  '27': createGenericTemplate('27', 'longestPalindrome', 'string', ['s']),
  '28': createGenericTemplate('28', 'isMatch', 'boolean', ['s', 'p']),
  '29': createGenericTemplate('29', 'minDistance', 'number', ['word1', 'word2']),
  '30': createGenericTemplate('30', 'trap', 'number', ['height']),
  '31': createGenericTemplate('31', 'maxSlidingWindow', 'array', ['nums', 'k']),
  '32': createGenericTemplate('32', 'merge', 'array', ['intervals']),
  '33': createGenericTemplate('33', 'rotate', 'array', ['matrix']),
  '34': createGenericTemplate('34', 'groupAnagrams', 'array', ['strs']),
  '35': createGenericTemplate('35', 'permute', 'array', ['nums']),
  '36': createGenericTemplate('36', 'subsets', 'array', ['nums']),
  '37': createGenericTemplate('37', 'solveNQueens', 'array', ['n']),
  '38': createGenericTemplate('38', 'exist', 'boolean', ['board', 'word']),
  '39': createGenericTemplate('39', 'partition', 'array', ['s']),
  '40': createGenericTemplate('40', 'findKthLargest', 'number', ['nums', 'k']),
  '41': createGenericTemplate('41', 'topKFrequent', 'array', ['nums', 'k']),
  '42': createGenericTemplate('42', 'minMeetingRooms', 'number', ['intervals']),
  '43': createGenericTemplate('43', 'binarySearch', 'number', ['nums', 'target']),
  '44': createGenericTemplate('44', 'search', 'number', ['nums', 'target']),
  '45': createGenericTemplate('45', 'findPeakElement', 'number', ['nums'])
};

// Merge all templates
Object.assign(problemTemplates, additionalProblems);

export const getTemplate = (problemId, language) => {
  const template = problemTemplates[problemId];
  if (!template) {
    return `// Problem ${problemId} - Write your solution here\nconsole.log("Hello World!");`;
  }
  return template[language] || template.javascript || `// Write your ${language} code here`;
};
