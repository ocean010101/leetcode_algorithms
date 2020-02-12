/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2的幂
 *
 * https://leetcode-cn.com/problems/power-of-two/description/
 *
 * algorithms
 * Easy (47.45%)
 * Likes:    159
 * Dislikes: 0
 * Total Accepted:    44.7K
 * Total Submissions: 94K
 * Testcase Example:  '1'
 *
 * 给定一个整数，编写一个函数来判断它是否是 2 的幂次方。
 * 
 * 示例 1:
 * 
 * 输入: 1
 * 输出: true
 * 解释: 2^0 = 1
 * 
 * 示例 2:
 * 
 * 输入: 16
 * 输出: true
 * 解释: 2^4 = 16
 * 
 * 示例 3:
 * 
 * 输入: 218
 * 输出: false
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    // return Number.isInteger(Math.log2(n));
    // return Math.log2(n) % 1 === 0;

    if (n <= 0) {
        return false;
    }
    return (n & (n - 1)) == 0;
};
// @lc code=end

