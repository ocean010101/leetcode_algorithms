/*
 * @lc app=leetcode.cn id=485 lang=javascript
 *
 * [485] 最大连续1的个数
 *
 * https://leetcode-cn.com/problems/max-consecutive-ones/description/
 *
 * algorithms
 * Easy (55.53%)
 * Likes:    83
 * Dislikes: 0
 * Total Accepted:    28.2K
 * Total Submissions: 50.6K
 * Testcase Example:  '[1,0,1,1,0,1]'
 *
 * 给定一个二进制数组， 计算其中最大连续1的个数。
 * 
 * 示例 1:
 * 
 * 
 * 输入: [1,1,0,1,1,1]
 * 输出: 3
 * 解释: 开头的两位和最后的三位都是连续1，所以最大连续1的个数是 3.
 * 
 * 
 * 注意：
 * 
 * 
 * 输入的数组只包含 0 和1。
 * 输入数组的长度是正整数，且不超过 10,000。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/*
Accepted
41/41 cases passed (68 ms)
Your runtime beats 96.99 % of javascript submissions
Your memory usage beats 26.09 % of javascript submissions (37.5 MB)
*/
var findMaxConsecutiveOnes = function (nums) {
    let max = 0, count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            count++;
        } else {
            max = Math.max(count, max);
            count = 0;
        }
    }
    return Math.max(count, max);
};

/*
Accepted
41/41 cases passed (96 ms)
Your runtime beats 13.89 % of javascript submissions
Your memory usage beats 11.24 % of javascript submissions (37.9 MB)
*/
var findMaxConsecutiveOnes1 = function (nums) {
    let arr = nums.join('').split('0');
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        max = Math.max(max, arr[i].length);
    }
    return max;
};
// @lc code=end

