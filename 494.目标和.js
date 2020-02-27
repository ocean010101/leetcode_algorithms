/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 *
 * https://leetcode-cn.com/problems/target-sum/description/
 *
 * algorithms
 * Medium (43.41%)
 * Likes:    197
 * Dislikes: 0
 * Total Accepted:    17.8K
 * Total Submissions: 41K
 * Testcase Example:  '[1,1,1,1,1]\n3'
 *
 * 给定一个非负整数数组，a1, a2, ..., an, 和一个目标数，S。现在你有两个符号 + 和 -。对于数组中的任意一个整数，你都可以从 + 或
 * -中选择一个符号添加在前面。
 * 
 * 返回可以使最终数组和为目标数 S 的所有添加符号的方法数。
 * 
 * 示例 1:
 * 
 * 输入: nums: [1, 1, 1, 1, 1], S: 3
 * 输出: 5
 * 解释: 
 * 
 * -1+1+1+1+1 = 3
 * +1-1+1+1+1 = 3
 * +1+1-1+1+1 = 3
 * +1+1+1-1+1 = 3
 * +1+1+1+1-1 = 3
 * 
 * 一共有5种方法让最终目标和为3。
 * 
 * 
 * 注意:
 * 
 * 
 * 数组非空，且长度不会超过20。
 * 初始的数组的和不会超过1000。
 * 保证返回的最终结果能被32位整数存下。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
/*
Accepted
139/139 cases passed (1540 ms)
Your runtime beats 41.48 % of javascript submissions
Your memory usage beats 99.06 % of javascript submissions (34.1 MB)
使用递归，枚举出所有可能的情况
当我们处理到第 i 个数时，我们可以将它添加 + 或 -，
递归地搜索这两种情况。

当我们处理完所有的 N 个数时，我们计算出所有数的和，
并判断是否等于 S。
*/
let res = 0;
var findTargetSumWays = function (nums, S) {
    res = 0;
    calculate(nums, 0, 0, S);
    return res;
};
var calculate = function (nums, index, sum, S) {
    if (index == nums.length) {
        if (sum == S) {
            res++;
        }
    } else {
        calculate(nums, index + 1, sum + nums[index], S);
        calculate(nums, index + 1, sum - nums[index], S);
    }
}
// @lc code=end

