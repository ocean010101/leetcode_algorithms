/*
 * @lc app=leetcode.cn id=559 lang=javascript
 *
 * [559] N叉树的最大深度
 *
 * https://leetcode-cn.com/problems/maximum-depth-of-n-ary-tree/description/
 *
 * algorithms
 * Easy (68.18%)
 * Likes:    73
 * Dislikes: 0
 * Total Accepted:    16.5K
 * Total Submissions: 24.2K
 * Testcase Example:  '[1,null,3,2,4,null,5,6]\r'
 *
 * 给定一个 N 叉树，找到其最大深度。
 * 
 * 最大深度是指从根节点到最远叶子节点的最长路径上的节点总数。
 * 
 * 例如，给定一个 3叉树 :
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 我们应返回其最大深度，3。
 * 
 * 说明:
 * 
 * 
 * 树的深度不会超过 1000。
 * 树的节点总不会超过 5000。
 * 
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
/*
递归：自底向上
Accepted
37/37 cases passed (88 ms)
Your runtime beats 43.26 % of javascript submissions
Your memory usage beats 33.33 % of javascript submissions (40.1 MB)
*/
var maxDepth1 = function (root) {
    if (root == null) {
        return 0;                                   // return 0 for null node
    } else if (root.children == null) {
        return 1;
    } else {
        let arr = [],
            len = root.children.length;
        for (let i = 0; i < len; i++) {
            arr.push(maxDepth(root.children[i]))
        }
        return arr.length > 0 ? arr.sort((i, j) => j - i)[0] + 1 : 1; // return depth of the subtree rooted at root
    }
};
/*
使用深度优先搜索策略访问每个节点，同时更新每次访问时的最大深度
Accepted
37/37 cases passed (68 ms)
Your runtime beats 97.87 % of javascript submissions
Your memory usage beats 42.67 % of javascript submissions (37.9 MB)
*/
var maxDepth = function (root) {
    if (root == null) {
        return 0;
    }
    let stack = [{ "key": root, "val": 1 }], depth = 0;
    while (stack.length) {
        let currObj = stack.pop(),
            currNode = currObj.key;
        if (currNode != null) {
            let currNode_depth = currObj.val;
            depth = Math.max(depth, currNode_depth);
            if (currNode.children != null) {
                for (let i = 0; i < currNode.children.length; i++) {
                    stack.push({ "key": currNode.children[i], "val": currNode_depth + 1 });
                }
            }
        }
    }
    return depth;
}
// @lc code=end

