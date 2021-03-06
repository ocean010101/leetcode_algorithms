/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 *
 * https://leetcode-cn.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (33.57%)
 * Likes:    1662
 * Dislikes: 0
 * Total Accepted:    271.8K
 * Total Submissions: 809K
 * Testcase Example:  '123'
 *
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * 
 * 示例 1:
 * 
 * 输入: 123
 * 输出: 321
 * 
 * 
 * 示例 2:
 * 
 * 输入: -123
 * 输出: -321
 * 
 * 
 * 示例 3:
 * 
 * 输入: 120
 * 输出: 21
 * 
 * 
 * 注意:
 * 
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31,  2^31 − 1]。请根据这个假设，如果反转后整数溢出那么就返回
 * 0。
 * 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    // let ret = (Math.abs(x) + '').split('').reverse().join('') - 0;
    // ret = (x < 0) ? (0 - ret) : ret;
    // return (ret >= -2147483648 && ret <= 2147483647) ? ret : 0;

    let ret = 0;
    while (x != 0) {
        ret = ret * 10 + x % 10;
        x = x > 0 ? Math.floor(x / 10) : Math.ceil(x / 10);
    }
    return (ret >= -2147483648 && ret <= 2147483647) ? ret : 0;
};
// @lc code=end

