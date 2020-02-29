/*
 * @lc app=leetcode.cn id=700 lang=javascript
 *
 * [700] 二叉搜索树中的搜索
 *
 * https://leetcode-cn.com/problems/search-in-a-binary-search-tree/description/
 *
 * algorithms
 * Easy (72.03%)
 * Likes:    50
 * Dislikes: 0
 * Total Accepted:    18.1K
 * Total Submissions: 25.2K
 * Testcase Example:  '[4,2,7,1,3]\n2'
 *
 * 给定二叉搜索树（BST）的根节点和一个值。 你需要在BST中找到节点值等于给定值的节点。 返回以该节点为根的子树。 如果节点不存在，则返回 NULL。
 * 
 * 例如，
 * 
 * 
 * 给定二叉搜索树:
 * 
 * ⁠       4
 * ⁠      / \
 * ⁠     2   7
 * ⁠    / \
 * ⁠   1   3
 * 
 * 和值: 2
 * 
 * 
 * 你应该返回如下子树:
 * 
 * 
 * ⁠     2     
 * ⁠    / \   
 * ⁠   1   3
 * 
 * 
 * 在上述示例中，如果要找的值是 5，但因为没有节点值为 5，我们应该返回 NULL。
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
 * @param {number} val
 * @return {TreeNode}
 */
//递归
/*
Accepted
36/36 cases passed (156 ms)
Your runtime beats 5.79 % of javascript submissions
Your memory usage beats 100 % of javascript submissions (41.5 MB)
*/
var searchBST1 = function (root, val) {
    if (root == null || root.val == val) {
        return root;
    } else if (root.val < val) { //如果当前节点的值小于目标节点，去右子树查找
        return searchBST(root.right, val);
    } else {//如果当前节点的值大于目标节点，去左子树查找
        return searchBST(root.left, val);
    }
}
//迭代
/*
Accepted
36/36 cases passed (96 ms)
Your runtime beats 57.02 % of javascript submissions
Your memory usage beats 61.68 % of javascript submissions (41.8 MB)
*/
var searchBST = function (root, val) {
    while (root != null && root.val != val) {
        if (root.val < val) {
            root = root.right;
        } else {
            root = root.left;
        }
    }
    return root;
}
// @lc code=end

