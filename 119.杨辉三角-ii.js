/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 *
 * https://leetcode-cn.com/problems/pascals-triangle-ii/description/
 *
 * algorithms
 * Easy (59.71%)
 * Likes:    118
 * Dislikes: 0
 * Total Accepted:    38.8K
 * Total Submissions: 64.6K
 * Testcase Example:  '3'
 *
 * 给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。
 * 
 * 
 * 
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 * 
 * 示例:
 * 
 * 输入: 3
 * 输出: [1,3,3,1]
 * 
 * 
 * 进阶：
 * 
 * 你可以优化你的算法到 O(k) 空间复杂度吗？
 * 
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
/*
f(i,j) = f(i-1, j-1)  + f(i-1, j)
*/
/*
Accepted
34/34 cases passed (64 ms)
Your runtime beats 67.53 % of javascript submissions
Your memory usage beats 97.52 % of javascript submissions (33.4 MB)
*/

var getRow = function (rowIndex) {
    if (rowIndex ==0) {
        return [1]; 
    } 
    let res = [[1]];

    for (let i = 1; i < rowIndex + 1; i++) {
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
    return res[res.length - 1];
};
// @lc code=end

