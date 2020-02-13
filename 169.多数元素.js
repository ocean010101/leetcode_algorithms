/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 *
 * https://leetcode-cn.com/problems/majority-element/description/
 *
 * algorithms
 * Easy (61.35%)
 * Likes:    438
 * Dislikes: 0
 * Total Accepted:    107.3K
 * Total Submissions: 174.4K
 * Testcase Example:  '[3,2,3]'
 *
 * 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
 * 
 * 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 * 
 * 示例 1:
 * 
 * 输入: [3,2,3]
 * 输出: 3
 * 
 * 示例 2:
 * 
 * 输入: [2,2,1,1,1,2,2]
 * 输出: 2
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let len = nums.length;

    if (len == 1) {
        return nums[0];
    } else if (len == 0) {
        return null;
    }
    let num = Math.floor(len / 2),
        numMap = {};

    for (let i = 0; i < len; i++) {
        let item = nums[i];
        if (typeof (numMap[item]) != 'undefined') {
            numMap[item]++;
            if (numMap[item] > num) {
                return item;
            }
        } else {
            numMap[item] = 1;
        }
    }

    return null;
};
// @lc code=end

