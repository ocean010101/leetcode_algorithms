/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 *
 * https://leetcode-cn.com/problems/spiral-matrix/description/
 *
 * algorithms
 * Medium (38.65%)
 * Likes:    302
 * Dislikes: 0
 * Total Accepted:    41.1K
 * Total Submissions: 106.4K
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * 给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。
 * 
 * 示例 1:
 * 
 * 输入:
 * [
 * ⁠[ 1, 2, 3 ],
 * ⁠[ 4, 5, 6 ],
 * ⁠[ 7, 8, 9 ]
 * ]
 * 输出: [1,2,3,6,9,8,7,4,5]
 * 
 * 
 * 示例 2:
 * 
 * 输入:
 * [
 * ⁠ [1, 2, 3, 4],
 * ⁠ [5, 6, 7, 8],
 * ⁠ [9,10,11,12]
 * ]
 * 输出: [1,2,3,4,8,12,11,10,9,5,6,7]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
/*
Accepted
22/22 cases passed (52 ms)
Your runtime beats 97.06 % of javascript submissions
Your memory usage beats 15.77 % of javascript submissions (34.2 MB)
*/
var spiralOrder = function (matrix) {
    let ans = [];
    if (matrix.length == 0)
        return ans;

    let r1 = 0, r2 = matrix.length - 1;
    let c1 = 0, c2 = matrix[0].length - 1;
    while (r1 <= r2 && c1 <= c2) {
        for (let c = c1; c <= c2; c++) {
            ans.push(matrix[r1][c]);
        }
        for (let r = r1 + 1; r <= r2; r++) {
            ans.push(matrix[r][c2]);

        }
        if (r1 < r2 && c1 < c2) {
            for (let c = c2 - 1; c > c1; c--) {
                ans.push(matrix[r2][c]);
            }
            for (let r = r2; r > r1; r--) {
                ans.push(matrix[r][c1]);
            }
        }
        r1++;
        r2--;
        c1++;
        c2--;
    }
    return ans;

};
// @lc code=end

