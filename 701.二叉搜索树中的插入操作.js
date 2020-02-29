/*
 * @lc app=leetcode.cn id=701 lang=javascript
 *
 * [701] 二叉搜索树中的插入操作
 *
 * https://leetcode-cn.com/problems/insert-into-a-binary-search-tree/description/
 *
 * algorithms
 * Medium (72.03%)
 * Likes:    46
 * Dislikes: 0
 * Total Accepted:    8K
 * Total Submissions: 11.1K
 * Testcase Example:  '[4,2,7,1,3]\n5'
 *
 * 给定二叉搜索树（BST）的根节点和要插入树中的值，将值插入二叉搜索树。 返回插入后二叉搜索树的根节点。 保证原始二叉搜索树中不存在新值。
 * 
 * 注意，可能存在多种有效的插入方式，只要树在插入后仍保持为二叉搜索树即可。 你可以返回任意有效的结果。
 * 
 * 例如, 
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
 * 和 插入的值: 5
 * 
 * 
 * 你可以返回这个二叉搜索树:
 * 
 * 
 * ⁠        4
 * ⁠      /   \
 * ⁠     2     7
 * ⁠    / \   /
 * ⁠   1   3 5
 * 
 * 
 * 或者这个树也是有效的:
 * 
 * 
 * ⁠        5
 * ⁠      /   \
 * ⁠     2     7
 * ⁠    / \   
 * ⁠   1   3
 * ⁠        \
 * ⁠         4
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
 * @param {number} val
 * @return {TreeNode}
 */
//递归
var insertIntoBST = function (root, val) {
    //如果树为空， 直接将目标节点作为根节点返回
    if (root == null) {
        return new TreeNode(val);
    }
    // let cur = root;
    if (val > root.val) { //如果目标节点大于当前节点， 那么插入右子树
        // if (cur.right != null) {
        //     insertIntoBST(cur.right, val);
        // } else {
        //     cur.right = new TreeNode(val);
        // }
        root.right = insertIntoBST(root.right, val);
        // } else if (val < root.val) {  //如果目标节点小于当前节点， 那么插入左子树
    } else {  //如果目标节点小于当前节点， 那么插入左子树
        // if (cur.left != null) {
        //     insertIntoBST(cur.left, val);
        // } else {
        //     cur.left = new TreeNode(val);
        // }
        root.left = insertIntoBST(root.left, val);
    }

    return root;
};
//迭代
/*
Accepted
34/34 cases passed (132 ms)
Your runtime beats 61.42 % of javascript submissions
Your memory usage beats 77.27 % of javascript submissions (41.8 MB)
*/
var insertIntoBST1 = function (root, val) {
    //如果树为空， 直接将目标节点作为根节点返回
    if (root == null) {
        return new TreeNode(val);
    }

    let cur = root;
    while (cur) {
        //如果目标节点大于当前节点， 那么插入右子树
        if (val > cur.val) {
            if (cur.right != null) {
                cur = cur.right;
            } else {
                cur.right = new TreeNode(val);
                break;
            }
        } else {
            //如果目标节点小于当前节点， 那么插入左子树
            if (cur.left != null) {
                cur = cur.left;
            } else {
                cur.left = new TreeNode(val);
                break;
            }
        }
    }
    return root;
};
// @lc code=end

