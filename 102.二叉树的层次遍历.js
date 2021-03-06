/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层次遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal/description/
 *
 * algorithms
 * Medium (60.61%)
 * Likes:    369
 * Dislikes: 0
 * Total Accepted:    76.8K
 * Total Submissions: 126.4K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）。
 * 
 * 例如:
 * 给定二叉树: [3,9,20,null,null,15,7],
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 
 * 返回其层次遍历结果：
 * 
 * [
 * ⁠ [3],
 * ⁠ [9,20],
 * ⁠ [15,7]
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
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
/*
Accepted
34/34 cases passed (68 ms)
Your runtime beats 64.54 % of javascript submissions
Your memory usage beats 81.93 % of javascript submissions (34.7 MB)
*/
var helper = function (levels, node, level) {
    // start the current level
    if (levels.length == level) {
        levels.push([]);
    }
    // fulfil the current level
    levels[level].push(node.val);
    // process child nodes for the next level
    if (node.left != null)
        helper(levels, node.left, level + 1);
    if (node.right != null)
        helper(levels, node.right, level + 1);
}
var levelOrder2 = function (root) {
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
Your runtime beats 64.54 % of javascript submissions
Your memory usage beats 96.9 % of javascript submissions (34.6 MB)
*/
var levelOrder = function (root) {
    let res = [];
    if (root == null) {
        return res;
    }
    let queue = [root];//初始化队列，因为需要先处理root节点，所以把root节点先入队
    while (queue.length) { // 队列不为空
        let level_size = queue.length, //当前队列长度
            current_level = [];//用来存储当前层级的所有节点
        while (level_size--) { //按顺序把当前队列中的节点逐个出队
            let node = queue.shift(); //出队
            current_level.push(node.val)// 
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
        ret.push(current_level)
    }
    return ret;
};
// @lc code=end

