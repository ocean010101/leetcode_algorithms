/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
 *
 * https://leetcode-cn.com/problems/path-sum/description/
 *
 * algorithms
 * Easy (48.73%)
 * Likes:    236
 * Dislikes: 0
 * Total Accepted:    50.5K
 * Total Submissions: 103.1K
 * Testcase Example:  '[5,4,8,11,null,13,4,7,2,null,null,null,1]\n22'
 *
 * 给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。
 * 
 * 说明: 叶子节点是指没有子节点的节点。
 * 
 * 示例: 
 * 给定如下二叉树，以及目标和 sum = 22，
 * 
 * ⁠             5
 * ⁠            / \
 * ⁠           4   8
 * ⁠          /   / \
 * ⁠         11  13  4
 * ⁠        /  \      \
 * ⁠       7    2      1
 * 
 * 
 * 返回 true, 因为存在目标和为 22 的根节点到叶子节点的路径 5->4->11->2。
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
 * @param {number} sum
 * @return {boolean}
 */
/*递归
    如果当前节点不是叶子，对它的所有孩子节点，递归调用 hasPathSum 函数
    sum 值减去当前节点的权值；如果当前节点是叶子，检查 sum 值是否为 0，也就是是否找到了给定的目标和
Accepted
114/114 cases passed (80 ms)
Your runtime beats 52.19 % of javascript submissions
Your memory usage beats 48.21 % of javascript submissions (37.3 MB)
递归： 调用栈
root ， sum =22
 * ⁠             5
 * ⁠            / \
 * ⁠           4   8
 * ⁠          /   / \
 * ⁠         11  13  4
 * ⁠        /  \      \
 * ⁠       7    2      1
 * 
root == 5
=>
    sum = 22 - 5 =17
    root.left == 4
    hasPathSum(4, 17)--start
        root == 4
        sum = 17 - 4 = 13
        root.left == 11
        hasPathSum(11, 13)--start
            root == 11  
            sum = 13 - 11 = 2
            root.left == 7
            hasPathSum(7, 2)--start
                root == 7  
                sum = 2 - 7 = -5
                root.left == null
                root.right == null
                return (sum == 0)==> return false;
            hasPathSum(7, 2)--end
            root.right == 2
            hasPathSum(2, 2)--start
                root == 2
                sum = 2 - 2 = 2
                root.left == null
                root.right == null
                return (sum == 0)==> return true;
            hasPathSum(2, 2)--end
        hasPathSum(11, 13)--end
    hasPathSum(4, 17)--end
*/
var hasPathSum1 = function (root, sum) {
    console.log('hasPathSum start');
    if (root == null)
        return false;

    sum -= root.val;
    console.log(`sum=${sum},root.val=${root.val}`);

    if ((root.left == null) && (root.right == null)) {
        console.log(`sum=${sum}`);
        return (sum == 0);
    }
    console.log(`======r start`);
    let r = hasPathSum(root.left, sum) || hasPathSum(root.right, sum);
    console.log(`======r end`);
    return r;
};


//迭代
/*
Accepted
114/114 cases passed (60 ms)
Your runtime beats 99.06 % of javascript submissions
Your memory usage beats 67.6 % of javascript submissions (37.1 MB)
*/
var hasPathSum = function (root, sum) {
    if (root == null)
        return false;
    let node_stack = [], sum_stack = [];

    node_stack.push(root);
    sum_stack.push(sum - root.val);


    let node, curr_sum;
    while (node_stack.length != 0) {
        node = node_stack.pop();
        curr_sum = sum_stack.pop();
        console.log(`node.val=${node.val}, curr_sum=${curr_sum}`);
        if ((node.right == null) && (node.left == null) &&
            (curr_sum == 0))
            return true;
        if (node.right != null) {
            node_stack.push(node.right);
            sum_stack.push(curr_sum - node.right.val);
        }
        if (node.left != null) {
            node_stack.push(node.left);
            sum_stack.push(curr_sum - node.left.val);
        }
    }
    return false;
};

// @lc code=end

