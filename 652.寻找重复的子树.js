/*
 * @lc app=leetcode.cn id=652 lang=javascript
 *
 * [652] 寻找重复的子树
 *
 * https://leetcode-cn.com/problems/find-duplicate-subtrees/description/
 *
 * algorithms
 * Medium (52.55%)
 * Likes:    75
 * Dislikes: 0
 * Total Accepted:    5.2K
 * Total Submissions: 9.8K
 * Testcase Example:  '[1,2,3,4,null,2,4,null,null,4]'
 *
 * 给定一棵二叉树，返回所有重复的子树。对于同一类的重复子树，你只需要返回其中任意一棵的根结点即可。
 * 
 * 两棵树重复是指它们具有相同的结构以及相同的结点值。
 * 
 * 示例 1：
 * 
 * ⁠       1
 * ⁠      / \
 * ⁠     2   3
 * ⁠    /   / \
 * ⁠   4   2   4
 * ⁠      /
 * ⁠     4
 * 
 * 
 * 下面是两个重复的子树：
 * 
 * ⁠     2
 * ⁠    /
 * ⁠   4
 * 
 * 
 * 和
 * 
 * ⁠   4
 * 
 * 
 * 因此，你需要以列表的形式返回上述重复子树的根结点。
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
 * @return {TreeNode[]}
 */
/*
Accepted
168/168 cases passed (116 ms)
Your runtime beats 92.31 % of javascript submissions
Your memory usage beats 89.29 % of javascript submissions (39.5 MB)
*/
let count = new Map();
let ans = [];
var collect = function (node) {
    if (node == null) {
        return "#";
    }
    //序列化
    let serial = node.val + "," + collect(node.left) + "," + collect(node.right);

    if (count.has(serial)) {
        count.set(serial, count.get(serial) + 1);
    } else {
        count.set(serial, 1);
    }
    if (count.get(serial) == 2)
        ans.push(node);

    return serial;
}

var findDuplicateSubtrees = function (root) {
    count.clear();
    ans = [];
    collect(root);
    return ans;
};
// @lc code=end

