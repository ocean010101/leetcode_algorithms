/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 *
 * https://leetcode-cn.com/problems/contains-duplicate/description/
 *
 * algorithms
 * Easy (51.41%)
 * Likes:    214
 * Dislikes: 0
 * Total Accepted:    107.6K
 * Total Submissions: 209.1K
 * Testcase Example:  '[1,2,3,1]'
 *
 * 给定一个整数数组，判断是否存在重复元素。
 * 
 * 如果任何值在数组中出现至少两次，函数返回 true。如果数组中每个元素都不相同，则返回 false。
 * 
 * 示例 1:
 * 
 * 输入: [1,2,3,1]
 * 输出: true
 * 
 * 示例 2:
 * 
 * 输入: [1,2,3,4]
 * 输出: false
 * 
 * 示例 3:
 * 
 * 输入: [1,1,1,3,3,4,3,2,4,2]
 * 输出: true
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    //hash表解法
    let len = nums.length, numMap = {};
    if (len <= 1) {
        return false;
    }
    for (let i = 0; i < len; i++) {
        if (typeof (numMap[nums[i]]) != 'undefined') {
            return true;
        } else {
            numMap[nums[i]] = 1;
        }
    }
    return false;
    //位运算：按位异或

};
// @lc code=end

