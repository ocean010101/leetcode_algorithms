/*
 * @lc app=leetcode.cn id=747 lang=javascript
 *
 * [747] 至少是其他数字两倍的最大数
 *
 * https://leetcode-cn.com/problems/largest-number-at-least-twice-of-others/description/
 *
 * algorithms
 * Easy (38.91%)
 * Likes:    51
 * Dislikes: 0
 * Total Accepted:    22.4K
 * Total Submissions: 57.3K
 * Testcase Example:  '[0,0,0,1]'
 *
 * 在一个给定的数组nums中，总是存在一个最大元素 。
 * 
 * 查找数组中的最大元素是否至少是数组中每个其他数字的两倍。
 * 
 * 如果是，则返回最大元素的索引，否则返回-1。
 * 
 * 示例 1:
 * 
 * 输入: nums = [3, 6, 1, 0]
 * 输出: 1
 * 解释: 6是最大的整数, 对于数组中的其他整数,
 * 6大于数组中其他元素的两倍。6的索引是1, 所以我们返回1.
 * 
 * 
 * 
 * 
 * 示例 2:
 * 
 * 输入: nums = [1, 2, 3, 4]
 * 输出: -1
 * 解释: 4没有超过3的两倍大, 所以我们返回 -1.
 * 
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * nums 的长度范围在[1, 50].
 * 每个 nums[i] 的整数范围在 [0, 100].
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
250/250 cases passed (56 ms)
Your runtime beats 98.27 % of javascript submissions
Your memory usage beats 51.87 % of javascript submissions (34 MB)
*/
var dominantIndex = function (nums) {
    let i,
        len = nums.length,
        maxIndex = 0;
    for (i = 0; i < len; i++) {
        if (nums[i] > nums[maxIndex]) {
            maxIndex = i;
        }
    }
    for (i = 0; i < len; i++) {
        if (i !== maxIndex && nums[maxIndex] < nums[i] * 2) {
            return -1;
        }
    }
    return maxIndex;
};
// @lc code=end

