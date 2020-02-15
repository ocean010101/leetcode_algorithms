/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-preorder-traversal/description/
 *
 * algorithms
 * Medium (63.86%)
 * Likes:    206
 * Dislikes: 0
 * Total Accepted:    66.7K
 * Total Submissions: 104.2K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树，返回它的 前序 遍历。
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
 * 输出: [1,2,3]
 * 
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
68/68 cases passed (68 ms)
Your runtime beats 43.63 % of javascript submissions
Your memory usage beats 99.46 % of javascript submissions (33.4 MB)
*/
var helper = function (node, res) {
    if (node.val) {
        res.push(node.val);
    }
    if (node.left != null) {
        helper(node.left, res);
    }
    if (node.right != null) {
        helper(node.right, res);
    }
}


var preorderTraversal1 = function (root) {
    if (root == null) {
        return [];
    }
    let res = [];
    helper(root, res);
    return res;
};


/*
Step 1: 将当前节点current初始化为根节点
Step 2: While current不为空，
若current没有左子节点
    a. 将current添加到输出
    b. 进入右子树，亦即, current = current.right
否则
    a. 在current的左子树中，令current成为最右侧节点的右子节点
    b. 进入左子树，亦即，current = current.left

eg:
          1
        /   \
       2     3
      / \   /
     4   5 6
(1) curr == 1, 1 有左子树4<-2->5 , 
找到这个左子树的最右节点5， 把1 作为5 的右子节点(4<-2->5)->1->(6<-3)
         2
        / \
       4   5
            \
             1
              \
               3
              /
             6
进入1的左子树， curr ==2


[1,2,3,4,5,6]
Accepted
68/68 cases passed (72 ms)
Your runtime beats 24.1 % of javascript submissions
Your memory usage beats 52.97 % of javascript submissions (33.8 MB)
*/
var preorderTraversal = function (root) {
    if (root == null) {
        return [];
    }

    let curr = root, res = [];
    while (curr != null) {
        if (curr.left == null) {
            res.push(curr.val);
            curr = curr.right; // move to next right node
        } else {//有左子树
            let predecessor = curr.left;
            //左子树的右子树不为空，并且这个右子树与当前节点不同
            while ((predecessor.right != null) && 
                (predecessor.right != curr)) {
                predecessor = predecessor.right;
            }

            if (predecessor.right == null) {
                res.push(curr.val);
                predecessor.right = curr;
                curr = curr.left;
            } else {
                predecessor.right = null;
                curr = curr.right;
            }
        }
    }
    return res;
};



// @lc code=end

