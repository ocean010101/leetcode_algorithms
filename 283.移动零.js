/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 *
 * https://leetcode-cn.com/problems/move-zeroes/description/
 *
 * algorithms
 * Easy (59.07%)
 * Likes:    493
 * Dislikes: 0
 * Total Accepted:    105.5K
 * Total Submissions: 178.1K
 * Testcase Example:  '[0,1,0,3,12]'
 *
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 * 
 * 示例:
 * 
 * 输入: [0,1,0,3,12]
 * 输出: [1,3,12,0,0]
 * 
 * 说明:
 * 
 * 
 * 必须在原数组上操作，不能拷贝额外的数组。
 * 尽量减少操作次数。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/*
Accepted
21/21 cases passed (76 ms)
Your runtime beats 61.87 % of javascript submissions
Your memory usage beats 5.16 % of javascript submissions (36.9 MB)
*/
var moveZeroes = function (nums) {
    let lastNonZeroFoundAt = 0;
    for (let cur = 0; cur < nums.length; cur++) {
        if (nums[cur] != 0) {
            [nums[lastNonZeroFoundAt], nums[cur]] = [nums[cur], nums[lastNonZeroFoundAt]];
            lastNonZeroFoundAt++;
        }
    }
};
// @lc code=end

