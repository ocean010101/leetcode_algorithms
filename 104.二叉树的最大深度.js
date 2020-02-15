/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 *
 * https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (72.02%)
 * Likes:    452
 * Dislikes: 0
 * Total Accepted:    123K
 * Total Submissions: 170.5K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，找出其最大深度。
 * 
 * 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
 * 
 * 说明: 叶子节点是指没有子节点的节点。
 * 
 * 示例：
 * 给定二叉树 [3,9,20,null,null,15,7]，
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 返回它的最大深度 3 。
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
 * @return {number}
 */
/*
Accepted
39/39 cases passed (68 ms)
Your runtime beats 87.48 % of javascript submissions
Your memory usage beats 42.52 % of javascript submissions (37.2 MB)
*/
/*
          1
        /   \
       2     3
      / \   /
     4   5 6

root(1)     
maxDepth start
root.val=1
执行let left_depth = maxDepth(1.left);//1.left ==>2 
    root(2) 
    maxDepth start
    root.val=2
    执行let left_depth = maxDepth(2.left);//2.left ==>4
        root(4)
        maxDepth start
        root.val=4
        执行let left_depth = maxDepth(4.left);//4.left ==>null
            root(null)
            maxDepth start
        left_depth=0
        执行let right_depth = maxDepth(4.right);//4.right ==>null
            maxDepth start
        right_depth=0
        执行let h = Math.max(left_depth, right_depth) + 1;
        h=1
    left_depth=1
    执行let right_depth = maxDepth(2.right);//2.right ==>5
        root(5)
        maxDepth start
        root.val=5
        执行let left_depth = maxDepth(5.left);//5.left ==>null
            root(null)
            maxDepth start
        left_depth=0
        执行let right_depth = maxDepth(5.right);//5.right ==>null
            maxDepth start
        right_depth=0
        执行let h = Math.max(left_depth, right_depth) + 1;
        h=1
    right_depth=1
    执行let h = Math.max(left_depth(1), right_depth(1)) + 1;
    h=2
left_depth=2
执行let right_depth = maxDepth(1.right);//1.right ==>3
    root(3)
    maxDepth start
    root.val=3
    执行let left_depth = maxDepth(3.left);//3.left ==>6
        maxDepth start
        root.val=6
        执行let left_depth = maxDepth(6.left);//6.left ==>null
            root(null)
            maxDepth start
        left_depth=0
        执行let right_depth = maxDepth(6.right);//6.right ==>null
            maxDepth start
        right_depth=0
        执行let h = Math.max(left_depth, right_depth) + 1;
        h=1
    left_depth=1
    执行let right_depth = maxDepth(3.right);//3.right ==>null
        maxDepth start
    right_depth=0
    执行let h = Math.max(left_depth, right_depth) + 1;
    h=2
right_depth=2
执行let h = Math.max(left_depth, right_depth) + 1;
h=3
*/
var maxDepth1 = function (root) {
    console.log(`maxDepth start`);
    if (!root) {
        return 0;
    }
    console.log(`root.val=${root.val}`);

    //获取左子树的高度
    let left_depth = maxDepth(root.left);
    console.log(`left_depth=${left_depth}`);

    //获取右子树的高度
    let right_depth = maxDepth(root.right);
    console.log(`right_depth=${right_depth}`);

    //返回子树的根的高度
    let h = Math.max(left_depth, right_depth) + 1;
    console.log(`h=${h}`);
    return h; 	 // return depth of the subtree rooted at root
};
/*
Accepted
39/39 cases passed (80 ms)
Your runtime beats 34.32 % of javascript submissions
Your memory usage beats 70.63 % of javascript submissions (37 MB)
*/
/*
          1
        /   \
       2     3
      / \   /
     4   5 6
queue = [root],queue.length ==1

    let curr = queue.shift(); 
        curr == [1,2,3,4,5,6]
        queue == [], queue.length ==0
    if (curr.left) arr.push(curr.left)
        arr==[[2,4,5]] 
    if (curr.right) arr.push(curr.right)
        arr==[[2,4,5], [3,6]] 
=>  arr==[[2,4,5], [3,6]] 
    n = 1;
    queue = [[2,4,5], [3,6]] queue.length ==2
    let curr = queue.shift(); 
        curr == [2,4,5]
        queue == [[3,6]], queue.length ==1
    if (curr.left) arr.push(curr.left)
        arr==[4] 
    if (curr.right) arr.push(curr.right)
        arr==[4,5]    

    let curr = queue.shift(); 
        curr == [3,6]
        queue == [], queue.length ==0
    if (curr.left) arr.push(curr.left)
        arr==[4,5,6] 
    if (curr.right) arr.push(curr.right)
        arr==[4,5,6]
=>  arr==[4,5,6]
    n = 2;
    queue = [4,5,6] queue.length ==3
    let curr = queue.shift(); 
        curr == [4]
        queue == [5,6], queue.length ==2
    if (curr.left) arr.push(curr.left)
        arr==[] 
    if (curr.right) arr.push(curr.right)
        arr==[] 
    ...
==> arr==[]
    n = 3;
    queue = [] queue.length ==0
*/
var maxDepth2 = function (root) {
    if (!root) return 0
    let queue = [root], n = 0
    while (queue.length != 0) {
        let arr = [];
        while (queue.length) {
            let curr = queue.shift()
            if (curr.left) arr.push(curr.left)
            if (curr.right) arr.push(curr.right)
        }
        n++
        queue = arr
    }
    return n

}

// @lc code=end

