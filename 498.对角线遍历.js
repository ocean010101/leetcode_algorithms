/*
 * @lc app=leetcode.cn id=498 lang=javascript
 *
 * [498] 对角线遍历
 *
 * https://leetcode-cn.com/problems/diagonal-traverse/description/
 *
 * algorithms
 * Medium (39.60%)
 * Likes:    78
 * Dislikes: 0
 * Total Accepted:    11.2K
 * Total Submissions: 28.4K
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * 给定一个含有 M x N 个元素的矩阵（M 行，N 列），请以对角线遍历的顺序返回这个矩阵中的所有元素，对角线遍历如下图所示。
 * 
 * 
 * 
 * 示例:
 * 
 * 输入:
 * [
 * ⁠[ 1, 2, 3 ],
 * ⁠[ 4, 5, 6 ],
 * ⁠[ 7, 8, 9 ]
 * ]
 * 
 * 输出:  [1,2,4,7,5,3,6,8,9]
 * 
 * 解释:
 * 
 * 
 * 
 * 
 * 
 * 说明:
 * 
 * 
 * 给定矩阵中的元素总数不会超过 100000 。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
/*
 * [
 * ⁠[ 1, 2, 3 ],
 * ⁠[ 4, 5, 6 ],
 * ⁠[ 7, 8, 9 ]
 * ]
 * 
[
(0,0),
(0,1), (1,0),
(20),(11),(02),
(12),(21),
(2,2)
]
Accepted
32/32 cases passed (176 ms)
Your runtime beats 32.04 % of javascript submissions
Your memory usage beats 92.79 % of javascript submissions (42.2 MB)
*/
var findDiagonalOrder = function (matrix) {
    let res = [],
        rowLen = matrix.length,
        colLen = rowLen > 0 ? matrix[0].length : 0,
        maxLen = rowLen + colLen;

    let sum = 0;//Coordinate sum
    while (sum < maxLen) {
        // 第 1 3 5 ... 趟
        //00->20->22
        let x1 = (sum < rowLen) ? sum : rowLen - 1, //x= 0 , y = 0
            y1 = sum - x1;
        while (x1 >= 0 && y1 < colLen) {
            // console.log(`x1=${x1}, y1=${y1}`);
            res.push(matrix[x1][y1]);
            x1--;
            y1++;
        }
        sum++;

        if (sum >= maxLen) break;
        // 第 2 4 6 ... 趟
        //01->12
        let y2 = (sum < colLen) ? sum : colLen - 1,
            x2 = sum - y2;
        while (y2 >= 0 && x2 < rowLen) {
            // console.log(`x2=${x2}, y2=${y2}`);
            res.push(matrix[x2][y2]);
            x2++;
            y2--;
        }
        sum++;
    }
    return res;
};
// @lc code=end

