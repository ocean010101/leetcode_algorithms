/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 *
 * https://leetcode-cn.com/problems/valid-perfect-square/description/
 *
 * algorithms
 * Easy (43.15%)
 * Likes:    92
 * Dislikes: 0
 * Total Accepted:    23.8K
 * Total Submissions: 55K
 * Testcase Example:  '16'
 *
 * 给定一个正整数 num，编写一个函数，如果 num 是一个完全平方数，则返回 True，否则返回 False。
 * 
 * 说明：不要使用任何内置的库函数，如  sqrt。
 * 
 * 示例 1：
 * 
 * 输入：16
 * 输出：True
 * 
 * 示例 2：
 * 
 * 输入：14
 * 输出：False
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
/*
Accepted
68/68 cases passed (56 ms)
Your runtime beats 93.2 % of javascript submissions
Your memory usage beats 74.34 % of javascript submissions (33.8 MB)
*/
//二分查找模板一
var isPerfectSquare = function (num) {
    if (num < 2) {
        return true;
    }
    let left = 2, right = Math.floor(num / 2);
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        let n = mid * mid;
        if (n > num) {
            right = mid - 1;
        } else if (n < num) {
            left = mid + 1;
        } else {
            return true;
        }
    }
    return false;
};
// @lc code=end

