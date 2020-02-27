/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 *
 * https://leetcode-cn.com/problems/perfect-squares/description/
 *
 * algorithms
 * Medium (53.11%)
 * Likes:    302
 * Dislikes: 0
 * Total Accepted:    35.7K
 * Total Submissions: 66.8K
 * Testcase Example:  '12'
 *
 * 给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。
 * 
 * 示例 1:
 * 
 * 输入: n = 12
 * 输出: 3 
 * 解释: 12 = 4 + 4 + 4.
 * 
 * 示例 2:
 * 
 * 输入: n = 13
 * 输出: 2
 * 解释: 13 = 4 + 9.
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
/*
BFS:广度优先搜索
Accepted
588/588 cases passed (128 ms)
Your runtime beats 80.88 % of javascript submissions
Your memory usage beats 29.72 % of javascript submissions (41.3 MB)
*/
var numSquares = function (n) {
    let queue = [{ 'val': n, 'step': 1 }], // 用来排队处理
        visited = new Set(); //用来记录已经访问过的节点

    while (queue.length) {
        let node = queue.shift(),
            nodeVal = node.val,
            nodeStep = node.step;
        for (let i = 1; ; i++) {
            let nextVal = nodeVal - i * i;
            // 说明已到最大平方数
            if (nextVal < 0)
                break;
            // 由于是广度遍历，所以当遍历到0时，肯定是最短路径
            if (nextVal == 0)
                return nodeStep;
            // 当再次出现时没有必要加入，因为在该节点的路径长度肯定不小于第一次出现的路径长
            if (!visited.has(nextVal)) {
                queue.push({ 'val': nextVal, 'step': nodeStep + 1 });
                visited.add(nextVal)
            }
        }
    }
    return -1;
};
// @lc code=end

