/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
 *
 * https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree/description/
 *
 * algorithms
 * Easy (62.30%)
 * Likes:    240
 * Dislikes: 0
 * Total Accepted:    39.9K
 * Total Submissions: 63.8K
 * Testcase Example:  '[6,2,8,0,4,7,9,null,null,3,5]\n2\n8'
 *
 * 给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。
 * 
 * 百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x
 * 的深度尽可能大（一个节点也可以是它自己的祖先）。”
 * 
 * 例如，给定如下二叉搜索树:  root = [6,2,8,0,4,7,9,null,null,3,5]
 * 
 * 
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
 * 输出: 6 
 * 解释: 节点 2 和节点 8 的最近公共祖先是 6。
 * 
 * 
 * 示例 2:
 * 
 * 输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
 * 输出: 2
 * 解释: 节点 2 和节点 4 的最近公共祖先是 2, 因为根据定义最近公共祖先节点可以为节点本身。
 * 
 * 
 * 
 * 说明:
 * 
 * 
 * 所有节点的值都是唯一的。
 * p、q 为不同节点且均存在于给定的二叉搜索树中。
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
思路：
找到公共祖先的情况为以下：
    p  == 当前节点，  q < 当前节点， 那么q就在当前节点的左子树中， 那么当前节点就是p和q的最近公共祖先
    p  == 当前节点，  q > 当前节点， 那么q就在当前节点的右子树中， 那么当前节点就是p和q的最近公共祖先
    p < 当前节点， q >当前节点，那么p就在当前节点的左子树中， q就在当前节点的右子树中，当前节点就是p和q的最近公共祖先
    q  == 当前节点，  p < 当前节点， 那么p就在当前节点的左子树中， 那么当前节点就是p和q的最近公共祖先
    q  == 当前节点，  p > 当前节点， 那么p就在当前节点的右子树中， 那么当前节点就是p和q的最近公共祖先
    q < 当前节点， p >当前节点，那么p就在当前节点的左子树中， q就在当前节点的右子树中，当前节点就是p和q的最近公共祖先
根据BST 的性质，
如果q 和 q 都大于当前节点， 那么去当前节点的右子树上查找
如果q 和 q 都小于当前节点， 那么去当前节点的左子树上查找
其余情况：当前节点就是p 和 q 公共祖先
*/
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
/*
Accepted
27/27 cases passed (80 ms)
Your runtime beats 97.04 % of javascript submissions
Your memory usage beats 5.62 % of javascript submissions (44.4 MB)
*/
//递归
var lowestCommonAncestor1 = function (root, p, q) {
    if (p.val > root.val && q.val > root.val) {// 都比root大->都在root的右子树中
        return lowestCommonAncestor(root.right, p, q);
    } else if (p.val < root.val && q.val < root.val) {// 都比root小->都在root的左子树中
        return lowestCommonAncestor(root.left, p, q);
    } else {//一个比root 大，一个比root小， 那么root 就是公共祖先
        return root;
    }
};
//迭代

/*

Accepted
27/27 cases passed (92 ms)
Your runtime beats 69.72 % of javascript submissions
Your memory usage beats 27.53 % of javascript submissions (44 MB)
*/
var lowestCommonAncestor = function (root, p, q) {
    while (root) {
        if (p.val > root.val && q.val > root.val) {// 都比root大->都在root的右子树中
            root = root.right
        } else if (p.val < root.val && q.val < root.val) {// 都比root小->都在root的左子树中
            root = root.left;
        } else {//一个比root 大，一个比root小， 那么root 就是公共祖先
            return root;
        }
    }
    return null;
};
// @lc code=end

