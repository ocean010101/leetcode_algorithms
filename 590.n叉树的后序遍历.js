/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N叉树的后序遍历
 *
 * https://leetcode-cn.com/problems/n-ary-tree-postorder-traversal/description/
 *
 * algorithms
 * Easy (72.17%)
 * Likes:    50
 * Dislikes: 0
 * Total Accepted:    16K
 * Total Submissions: 22.2K
 * Testcase Example:  '[1,null,3,2,4,null,5,6]\r'
 *
 * 给定一个 N 叉树，返回其节点值的后序遍历。
 * 
 * 例如，给定一个 3叉树 :
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 返回其后序遍历: [5,6,3,2,4,1].
 * 
 * 
 * 
 * 说明: 递归法很简单，你可以使用迭代法完成此题吗?
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
/*
Accepted
37/37 cases passed (88 ms)
Your runtime beats 74.19 % of javascript submissions
Your memory usage beats 73.28 % of javascript submissions (37.6 MB)
*/
var postorder = function(root) {
    let res = [];
    if (root == null) {
        return res;
    }
    let stack = [root];
    while (stack.length) {
        let node = stack.pop();
        res.unshift(node.val);
        if (node.children != null) {
            stack.push(...node.children);
        }
    }
    return res;
};
// @lc code=end

