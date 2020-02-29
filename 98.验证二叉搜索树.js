/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
 *
 * https://leetcode-cn.com/problems/validate-binary-search-tree/description/
 *
 * algorithms
 * Medium (28.95%)
 * Likes:    426
 * Dislikes: 0
 * Total Accepted:    71.7K
 * Total Submissions: 246.6K
 * Testcase Example:  '[2,1,3]'
 *
 * 给定一个二叉树，判断其是否是一个有效的二叉搜索树。
 * 
 * 假设一个二叉搜索树具有如下特征：
 * 
 * 
 * 节点的左子树只包含小于当前节点的数。
 * 节点的右子树只包含大于当前节点的数。
 * 所有左子树和右子树自身必须也是二叉搜索树。
 * 
 * 
 * 示例 1:
 * 
 * 输入:
 * ⁠   2
 * ⁠  / \
 * ⁠ 1   3
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入:
 * ⁠   5
 * ⁠  / \
 * ⁠ 1   4
 * / \
 * 3   6
 * 输出: false
 * 解释: 输入为: [5,1,4,null,null,3,6]。
 * 根节点的值为 5 ，但是其右子节点值为 4 。
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
 * @return {boolean}
 */
/*
思路：1. 使用中序排列，查看是否为递增函数
递归： 检查每个节点是否都满足当前节点的值在左节点和右节点之
递归的终止条件是当前节点为null

迭代
*/

//递归
var isValidBST1 = function (root, lower = null, upper = null) {
    if (root == null) { //停止点
        return true;
    }
    console.log(`lower=${lower}, upper=${upper}`);
    let val = root.val;
    if (lower != null && val <= lower) {
        return false;
    }
    if (upper != null && val >= upper) {
        return false;
    }

    if (!isValidBST(root.left, lower, val)) {
        return false;
    }
    if (!isValidBST(root.right, val, upper)) {
        return false;
    }
    return true;
};
//迭代 DFS BFS
var isValidBST2 = function (root) {
    if (root == null) {
        return true;
    }
    let stack = [root],
        lowers = [null],//记录下限值
        uppers = [null];//记录上限值
    while (stack.length) {
        let node = stack.pop(),
            lower = lowers.pop(),
            upper = uppers.pop();

        if (node == null) {
            continue;
        }
        let val = node.val;
        if (lower != null && val <= lower) {
            return false;
        }
        if (upper != null && val >= upper) {
            return false;
        }
        stack.push(node.right);
        lowers.push(val);
        uppers.push(upper);
        stack.push(node.left);
        lowers.push(lower);
        uppers.push(val);
    }
    return true;
}
//中序排列
var isValidBST = function (root) {
    if (root == null) { //停止点
        return true;
    }
    let stack = [];
    let inorder = -Number.MAX_VALUE;
    while (stack.length || root != null) {
        while (root != null) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        if (root.val <= inorder) {
            return false;
        }
        inorder = root.val
        root = root.right;

    }

    return true;
};
// @lc code=end

