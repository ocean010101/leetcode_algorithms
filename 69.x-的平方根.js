/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 *
 * https://leetcode-cn.com/problems/sqrtx/description/
 *
 * algorithms
 * Easy (37.55%)
 * Likes:    306
 * Dislikes: 0
 * Total Accepted:    95.5K
 * Total Submissions: 254.5K
 * Testcase Example:  '4'
 *
 * 实现 int sqrt(int x) 函数。
 * 
 * 计算并返回 x 的平方根，其中 x 是非负整数。
 * 
 * 由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。
 * 
 * 示例 1:
 * 
 * 输入: 4
 * 输出: 2
 * 
 * 
 * 示例 2:
 * 
 * 输入: 8
 * 输出: 2
 * 说明: 8 的平方根是 2.82842..., 
 * 由于返回类型是整数，小数部分将被舍去。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
/*
Accepted
1017/1017 cases passed (68 ms)
Your runtime beats 98.83 % of javascript submissions
Your memory usage beats 51.35 % of javascript submissions (35.8 MB)
*/
var mySqrt = function (x) {
    return Math.floor(Math.sqrt(x));
};
//二分查找
/*
当 x ≥2 时，它的整数平方根一定小于 x / 2 且大于 0，即 0 < a < x/2。由于 aa 一定是整数，此问题可以转换成在有序整数集中寻找一个特定值，因此可以使用二分查找。
Accepted
1017/1017 cases passed (92 ms)
Your runtime beats 47.14 % of javascript submissions
Your memory usage beats 46.86 % of javascript submissions (35.8 MB)
*/

var mySqrt = function (x) {
    if (x < 2) {
        return x;
    }
    let num, left = 2, right = Math.floor(x / 2), mid;
    while (left <= right) {
        mid = left + Math.floor((right - left) / 2);
        num = mid * mid;
        if (num > x) {
            right = mid - 1;
        } else if (num < x) {
            left = mid + 1;
        } else {
            return mid;
        }
    }
    return right;
};
// @lc code=end

