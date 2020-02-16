/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 *
 * https://leetcode-cn.com/problems/pascals-triangle/description/
 *
 * algorithms
 * Easy (65.49%)
 * Likes:    245
 * Dislikes: 0
 * Total Accepted:    58.6K
 * Total Submissions: 89.2K
 * Testcase Example:  '5'
 *
 * 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
 * 
 * 
 * 
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 * 
 * 示例:
 * 
 * 输入: 5
 * 输出:
 * [
 * ⁠    [1],
 * ⁠   [1,1],
 * ⁠  [1,2,1],
 * ⁠ [1,3,3,1],
 * ⁠[1,4,6,4,1]
 * ]
 * 
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */

 /*
 Accepted
15/15 cases passed (60 ms)
Your runtime beats 82.98 % of javascript submissions
Your memory usage beats 63.19 % of javascript submissions (33.7 MB)
 */
var generate = function (numRows) {
    if (numRows == 0) {
        return [];
    }
    let res = [[1]];
    for (let i = 1; i < numRows; i++) {
        let rowArr = [1];//初始化数组
        let prevRow = res.length > 0 ? res[res.length - 1] : []
        //生成数组
        for (let j = 1; j < i; j++) {
            rowArr.push(prevRow[j - 1] + prevRow[j]);
        }
        rowArr.push(1);
        //把生成的数组添加到res中
        res.push(rowArr)
    }
    return res;
};
// @lc code=end

