/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-inorder-traversal/description/
 *
 * algorithms
 * Medium (69.94%)
 * Likes:    390
 * Dislikes: 0
 * Total Accepted:    102.5K
 * Total Submissions: 146.2K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树，返回它的中序 遍历。
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
 * 输出: [1,3,2]
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
68/68 cases passed (60 ms)
Your runtime beats 84.93 % of javascript submissions
Your memory usage beats 66.67 % of javascript submissions (33.7 MB)
*/
var helper = function (node, res) {
    if (node.left != null) {
        helper(node.left, res);
    }

    if (node.val) {
        res.push(node.val);
    }

    if (node.right != null) {
        helper(node.right, res);
    }
}

var inorderTraversal1 = function (root) {
    if (root == null) {
        return [];
    }
    let res = [];
    helper(root, res);
    return res;
};

/*
Accepted
68/68 cases passed (68 ms)
Your runtime beats 42.2 % of javascript submissions
Your memory usage beats 70.07 % of javascript submissions (33.7 MB)
*/
var inorderTraversal2 = function (root) {
    if (root == null) {
        return [];
    }
    let curr = root, res = [], stack = [];

    while (curr != null || stack.length != 0) {
        //1. 查找要添加到res的节点
        while (curr != null) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();//删除并返回数组的最后一个元素
        //2. 添加节点的值到res
        res.push(curr.val);
        //3. 跳转到下一个需要查找的树
        curr = curr.right;
    }
    return res;
};


/*
方法三：莫里斯遍历
本方法中，我们使用一种新的数据结构：线索二叉树。方法如下：

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
(2) curr == 2, 2 有左子树4 ,
 找到这个左子树的最右节点4， 把2 作为4 的右子节点4->2->5->1->(6<-3)
 进入2的左子树， curr ==4

(3) curr == 4, 4 没有左子树,
    添加 4 到输出，接着依次添加 2, 5, 1

(3) curr == 3, 3有左子树6,
     找到这个左子树的最右节点6， 把3 作为6 的右子节点
    进入6的左子树， curr ==6
(3) curr == 6, 6 没有左子树,
    添加 6 到输出，进入6的右子树 3
(3) curr == 3, 3 没有左子树,
    添加 3 到输出， 进入3的右子树 为空， 跳出循环     
==>[4,2,5,1,6,3]
*/


/*
Accepted
68/68 cases passed (52 ms)
Your runtime beats 98.46 % of javascript submissions
Your memory usage beats 70.07 % of javascript submissions (33.7 MB)
*/
var inorderTraversal = function (root) {
    if (root == null) {
        return [];
    }

    let curr = root, res = [], predecessor;
    while (curr != null) {
        if (curr.left == null) {
            res.push(curr.val);
            curr = curr.right; // move to next right node
        } else { // 有左子树
            predecessor = curr.left;
            while (predecessor.right != null) { //找到这个左子树的最右节点
                predecessor = predecessor.right;
            }
            predecessor.right = curr; // 令 curr 成为pre的右子节点
            let temp = curr; // 备份curr
            curr = curr.left; // 把curr移到新树的顶端
            temp.left = null; // 把原curr的left 置空，避免无线循环
        }
    }

    return res;
};
// @lc code=end

