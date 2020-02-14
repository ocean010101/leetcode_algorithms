/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
 *
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/description/
 *
 * algorithms
 * Easy (63.95%)
 * Likes:    182
 * Dislikes: 0
 * Total Accepted:    40.4K
 * Total Submissions: 63K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）
 * 
 * 例如：
 * 给定二叉树 [3,9,20,null,null,15,7],
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 
 * 返回其自底向上的层次遍历为：
 * 
 * [
 * ⁠ [15,7],
 * ⁠ [9,20],
 * ⁠ [3]
 * ]
 * 
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
/*
Accepted
34/34 cases passed (72 ms)
Your runtime beats 50.53 % of javascript submissions
Your memory usage beats 44.38 % of javascript submissions (34.9 MB)
*/
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var helper = function (levels, node, level) {
    // start the current level
    if (levels.length == level) {
        levels.unshift([]);
    }
    // fulfil the current level
    let index = levels.length - 1 - level;
    levels[index].push(node.val);
    // process child nodes for the next level
    if (node.left != null)
        helper(levels, node.left, level + 1);
    if (node.right != null)
        helper(levels, node.right, level + 1);
}
var levelOrderBottom1 = function (root) {
    if (root == null) {
        return [];
    }
    let levels = [];

    helper(levels, root, 0);
    return levels;
};


/*
Accepted
34/34 cases passed (68 ms)
Your runtime beats 71.48 % of javascript submissions
Your memory usage beats 68.68 % of javascript submissions (34.8 MB)
*/
var levelOrderBottom = function (root) {
    if (!root) {
        return []
    }
    let ret = [], queue = [root]
    while (queue.length) {
        let level_size = queue.length
        let current_level = []
        while (level_size--) {
            let node = queue.shift()
            current_level.push(node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        ret.unshift(current_level)
    }
    return ret;
};
// @lc code=end

