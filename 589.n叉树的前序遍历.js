/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N叉树的前序遍历
 *
 * https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/description/
 *
 * algorithms
 * Easy (72.04%)
 * Likes:    66
 * Dislikes: 0
 * Total Accepted:    18.2K
 * Total Submissions: 25.3K
 * Testcase Example:  '[1,null,3,2,4,null,5,6]'
 *
 * 给定一个 N 叉树，返回其节点值的前序遍历。
 * 
 * 例如，给定一个 3叉树 :
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 返回其前序遍历: [1,3,5,6,2,4]。
 * 
 * 
 * 
 * 说明: 递归法很简单，你可以使用迭代法完成此题吗?
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/*
Accepted
37/37 cases passed (76 ms)
Your runtime beats 97.75 % of javascript submissions
Your memory usage beats 19.59 % of javascript submissions (39.1 MB)
*/
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) { //迭代:深度优先搜索（DFS）
    let res = [];
    if (root == null) {
        return res;
    }

    let stack = [root];
    while (stack.length) {
        let node = stack.pop();
        res.push(node.val)
        if (node.children != null) {//将子节点逆序推入栈中
            let newArr = [];
            newArr.push(...node.children);
            for (let i = newArr.length - 1; i >= 0; i--) {
                stack.push(newArr[i]);
            }
        }
    }
    return res;
};


// @lc code=end

