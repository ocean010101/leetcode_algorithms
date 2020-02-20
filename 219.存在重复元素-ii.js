/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 *
 * https://leetcode-cn.com/problems/contains-duplicate-ii/description/
 *
 * algorithms
 * Easy (37.26%)
 * Likes:    136
 * Dislikes: 0
 * Total Accepted:    33.2K
 * Total Submissions: 88.7K
 * Testcase Example:  '[1,2,3,1]\n3'
 *
 * 给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，并且 i 和 j
 * 的差的绝对值最大为 k。
 * 
 * 示例 1:
 * 
 * 输入: nums = [1,2,3,1], k = 3
 * 输出: true
 * 
 * 示例 2:
 * 
 * 输入: nums = [1,0,1,1], k = 1
 * 输出: true
 * 
 * 示例 3:
 * 
 * 输入: nums = [1,2,3,1,2,3], k = 2
 * 输出: false
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
/*
Accepted
23/23 cases passed (96 ms)
Your runtime beats 45.82 % of javascript submissions
Your memory usage beats 24.55 % of javascript submissions (42.3 MB)
*/
var containsNearbyDuplicate1 = function (nums, k) {
    //hash
    let i, len = nums.length, numMap = {};

    for (i = 0; i < len; i++) {
        if (typeof (numMap[nums[i]]) != 'undefined' &&
            i - numMap[nums[i]] <= k) {
            return true;
        } else {
            numMap[nums[i]] = i;
        }
    }
    return false;
};
/*
Accepted
23/23 cases passed (80 ms)
Your runtime beats 69.39 % of javascript submissions
Your memory usage beats 44.18 % of javascript submissions (40 MB)
*/

var containsNearbyDuplicate = function (nums, k) {
    let i, len = nums.length, numMap = new Map();
    for (i = 0; i < len; i++) {
        let item = nums[i];
        if (numMap.has(item) &&
            i - numMap.get(item) <= k) {
            return true;
        } else {
            numMap.set(item, i);
        }
    }
    return false;
};
// @lc code=end

