/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 *
 * https://leetcode-cn.com/problems/single-number/description/
 *
 * algorithms
 * Easy (65.06%)
 * Likes:    1045
 * Dislikes: 0
 * Total Accepted:    145.9K
 * Total Submissions: 224K
 * Testcase Example:  '[2,2,1]'
 *
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 * 
 * 说明：
 * 
 * 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
 * 
 * 示例 1:
 * 
 * 输入: [2,2,1]
 * 输出: 1
 * 
 * 
 * 示例 2:
 * 
 * 输入: [4,1,2,1,2]
 * 输出: 4
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/*
位操作：异或
Accepted
16/16 cases passed (72 ms)
Your runtime beats 67.71 % of javascript submissions
Your memory usage beats 95.23 % of javascript submissions (35.2 MB)
*/
var singleNumber1 = function (nums) {
    let ret;
    for (let i = 0; i < nums.length; i++) {
        ret ^= nums[i];
    }
    return ret;
};
/*
Accepted
16/16 cases passed (76 ms)
Your runtime beats 57.47 % of javascript submissions
Your memory usage beats 14.31 % of javascript submissions (37.9 MB)
*/
var singleNumber = function (nums) {
    let mySet = new Set();;
    for (let i = 0; i < nums.length; i++) {
        if (mySet.has(nums[i])) {
            mySet.delete(nums[i]);
        } else {
            mySet.add(nums[i]);
        }
    }
    return [...mySet][0];
};
// @lc code=end

