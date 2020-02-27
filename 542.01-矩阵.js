/*
 * @lc app=leetcode.cn id=542 lang=javascript
 *
 * [542] 01 矩阵
 *
 * https://leetcode-cn.com/problems/01-matrix/description/
 *
 * algorithms
 * Medium (37.83%)
 * Likes:    146
 * Dislikes: 0
 * Total Accepted:    10.6K
 * Total Submissions: 28K
 * Testcase Example:  '[[0,0,0],[0,1,0],[0,0,0]]'
 *
 * 给定一个由 0 和 1 组成的矩阵，找出每个元素到最近的 0 的距离。
 * 
 * 两个相邻元素间的距离为 1 。
 * 
 * 示例 1: 
 * 输入:
 * 
 * 
 * 0 0 0
 * 0 1 0
 * 0 0 0
 * 
 * 
 * 输出:
 * 
 * 
 * 0 0 0
 * 0 1 0
 * 0 0 0
 * 
 * 
 * 示例 2: 
 * 输入:
 * 
 * 
 * 0 0 0
 * 0 1 0
 * 1 1 1
 * 
 * 
 * 输出:
 * 
 * 
 * 0 0 0
 * 0 1 0
 * 1 2 1
 * 
 * 
 * 注意:
 * 
 * 
 * 给定矩阵的元素个数不超过 10000。
 * 给定矩阵中至少有一个元素是 0。
 * 矩阵中的元素只在四个方向上相邻: 上、下、左、右。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
/*
BFS
Accepted
48/48 cases passed (244 ms)
Your runtime beats 53.13 % of javascript submissions
Your memory usage beats 15.56 % of javascript submissions (53.8 MB)
*/

var updateMatrix = function (matrix) {
    let rowLen = matrix.length;
    if (rowLen == 0) {
        return matrix;
    }
    let colLen = matrix[0].length,
        queue = [], dist = [];

    for (let row = 0; row < rowLen; row++) {
        dist[row] = [];
        for (let col = 0; col < colLen; col++) {
            if (matrix[row][col] == 0) {
                dist[row][col] = 0;
                queue.push({ 'row': row, 'col': col });
            } else {
                dist[row][col] = Number.MAX_VALUE;
            }
        }
    }
    let dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    while (queue.length) {
        let node = queue.shift(),
            row = node.row,
            col = node.col;
        for (let i = 0; i < 4; i++) {
            let newRow = row + dir[i][0],
                newCol = col + dir[i][1];
            if (newRow >= 0 && newCol >= 0 &&
                newRow < rowLen && newCol < colLen) {
                if (dist[newRow][newCol] > dist[row][col] + 1) {
                    dist[newRow][newCol] = dist[row][col] + 1;
                    queue.push({ 'row': newRow, 'col': newCol });
                }
            }
        }
    }
    return dist;
};

// @lc code=end

