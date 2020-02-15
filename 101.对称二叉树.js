/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 *
 * https://leetcode-cn.com/problems/symmetric-tree/description/
 *
 * algorithms
 * Easy (49.74%)
 * Likes:    603
 * Dislikes: 0
 * Total Accepted:    92.8K
 * Total Submissions: 185.7K
 * Testcase Example:  '[1,2,2,3,4,4,3]'
 *
 * 给定一个二叉树，检查它是否是镜像对称的。
 * 
 * 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
 * 
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠/ \ / \
 * 3  4 4  3
 * 
 * 
 * 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
 * 
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠  \   \
 * ⁠  3    3
 * 
 * 
 * 说明:
 * 
 * 如果你可以运用递归和迭代两种方法解决这个问题，会很加分。
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
递归
Accepted
195/195 cases passed (72 ms)
Your runtime beats 65.88 % of javascript submissions
Your memory usage beats 40.49 % of javascript submissions (35.7 MB)
*/
var isMirror = function (t1, t2) {
    if (t1 == null && t2 == null) return true;
    if (t1 == null || t2 == null) return false;
    return (t1.val == t2.val)
        && isMirror(t1.right, t2.left)
        && isMirror(t1.left, t2.right);
}
var isSymmetric1 = function (root) {
    return isMirror(root, root);
};
//利用队列进行迭代
/*
Accepted
195/195 cases passed (68 ms)
Your runtime beats 82.18 % of javascript submissions
Your memory usage beats 51.1 % of javascript submissions (35.6 MB)
*/
var isSymmetric = function (root) {
    if (!root) return true;

    let queue = [root, root];
    while (queue.length != 0) {
        let t1 = queue.shift();
        let t2 = queue.shift();
        if (t1 == null && t2 == null) continue;
        if (t1 == null || t2 == null || t1.val !== t2.val) {
            return false;
        }
        queue.push(t1.left);
        queue.push(t2.right);
        queue.push(t1.right);
        queue.push(t2.left);
    }

    return true;
};
// @lc code=end

