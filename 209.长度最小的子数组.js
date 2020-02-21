/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 *
 * https://leetcode-cn.com/problems/minimum-size-subarray-sum/description/
 *
 * algorithms
 * Medium (41.07%)
 * Likes:    196
 * Dislikes: 0
 * Total Accepted:    27.2K
 * Total Submissions: 65.9K
 * Testcase Example:  '7\n[2,3,1,2,4,3]'
 *
 * 给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的连续子数组。如果不存在符合条件的连续子数组，返回 0。
 * 
 * 示例: 
 * 
 * 输入: s = 7, nums = [2,3,1,2,4,3]
 * 输出: 2
 * 解释: 子数组 [4,3] 是该条件下的长度最小的连续子数组。
 * 
 * 
 * 进阶:
 * 
 * 如果你已经完成了O(n) 时间复杂度的解法, 请尝试 O(n log n) 时间复杂度的解法。
 * 
 */

// @lc code=start
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
/*
Accepted
15/15 cases passed (64 ms)
Your runtime beats 82.11 % of javascript submissions
Your memory usage beats 28.39 % of javascript submissions (36.1 MB)
*/
var minSubArrayLen = function (s, nums) {
    //双指针
    let len = nums.length,
        res = Number.MAX_VALUE,
        left = 0,
        sum = 0;
    for (let i = 0; i < len; i++) {
        sum += nums[i];
        while (sum >= s) { // 如果和大于s
            res = Math.min(res, i + 1 - left);// res的值为res与当前遍历的长度的最小值
            sum -= nums[left++]; //和减去最开始的的值
        }
    }
    return (res != Number.MAX_VALUE) ? res : 0;
};
// @lc code=end

