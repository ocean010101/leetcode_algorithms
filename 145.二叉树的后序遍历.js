/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-postorder-traversal/description/
 *
 * algorithms
 * Hard (69.90%)
 * Likes:    224
 * Dislikes: 0
 * Total Accepted:    49.8K
 * Total Submissions: 71.1K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树，返回它的 后序 遍历。
 * 
 * 示例:
 * 
 * 输入: [1,null,2,3]  
 * ⁠  1
 * ⁠   \
 * ⁠    2
 * ⁠   /
 * ⁠  3 
 * 
 * 输出: [3,2,1]
 * 
 * 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
/*
Accepted
68/68 cases passed (60 ms)
Your runtime beats 83.87 % of javascript submissions
Your memory usage beats 56.18 % of javascript submissions (33.8 MB)
*/
var helper = function (node, res) {
    if (node.left != null) {
        helper(node.left, res);
    }
    if (node.right != null) {
        helper(node.right, res);
    }
    if (node.val) {
        res.push(node.val);
    }
}

var postorderTraversal1 = function (root) {
    if (root == null) {
        return [];
    }
    let res = [];
    helper(root, res);
    return res;
};
/*
Accepted
68/68 cases passed (64 ms)
Your runtime beats 64.16 % of javascript submissions
Your memory usage beats 87.08 % of javascript submissions (33.6 MB)
*/
/*
左右根
eg：
          1
        /   \
       2     3
      / \   /
     4   5 6
[4,5,2,6,3,1]
*/
/*
Accepted
68/68 cases passed (56 ms)
Your runtime beats 95.1 % of javascript submissions
Your memory usage beats 54.49 % of javascript submissions (33.8 MB)
*/
var postorderTraversal = function (root) {
    let res = [];
    if (root == null) {
        return res;
    }
    
    let stack = [root];
    while (stack.length) {
        let node = stack.pop();
        res.unshift(node.val);
        if (node.left != null) {
            stack.push(node.left);
        }
        if (node.right != null) {
            stack.push(node.right);
        }
    }
    return res;
}
// @lc code=end

