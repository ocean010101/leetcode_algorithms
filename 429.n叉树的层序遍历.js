/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N叉树的层序遍历
 *
 * https://leetcode-cn.com/problems/n-ary-tree-level-order-traversal/description/
 *
 * algorithms
 * Medium (64.51%)
 * Likes:    68
 * Dislikes: 0
 * Total Accepted:    14.3K
 * Total Submissions: 22.2K
 * Testcase Example:  '[1,null,3,2,4,null,5,6]\r'
 *
 * 给定一个 N 叉树，返回其节点值的层序遍历。 (即从左到右，逐层遍历)。
 * 
 * 例如，给定一个 3叉树 :
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 返回其层序遍历:
 * 
 * [
 * ⁠    [1],
 * ⁠    [3,2,4],
 * ⁠    [5,6]
 * ]
 * 
 * 
 * 
 * 
 * 说明:
 * 
 * 
 * 树的深度不会超过 1000。
 * 树的节点总数不会超过 5000。
 * 
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
 * @return {number[][]}
 */
/*
Accepted
37/37 cases passed (88 ms)
Your runtime beats 75.85 % of javascript submissions
Your memory usage beats 70.29 % of javascript submissions (38.2 MB)
*/
var levelOrder = function (root) {
    let res = [];
    if (root == null) {
        return res;
    }
    let queue = [root];
    while (queue.length) {
        let level_size = queue.length,
            current_level = [];
        while (level_size--) {
            let node = queue.shift();
            current_level.push(node.val);
            if (node.children) {
                queue.push(...node.children);
            }
        }
        res.push(current_level)
    }
    return res;
};
// @lc code=end

