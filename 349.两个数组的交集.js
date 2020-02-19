/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 *
 * https://leetcode-cn.com/problems/intersection-of-two-arrays/description/
 *
 * algorithms
 * Easy (67.86%)
 * Likes:    161
 * Dislikes: 0
 * Total Accepted:    51.4K
 * Total Submissions: 75.3K
 * Testcase Example:  '[1,2,2,1]\n[2,2]'
 *
 * 给定两个数组，编写一个函数来计算它们的交集。
 * 
 * 示例 1:
 * 
 * 输入: nums1 = [1,2,2,1], nums2 = [2,2]
 * 输出: [2]
 * 
 * 
 * 示例 2:
 * 
 * 输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * 输出: [9,4]
 * 
 * 说明:
 * 
 * 
 * 输出结果中的每个元素一定是唯一的。
 * 我们可以不考虑输出结果的顺序。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
/*
去重
Accepted
60/60 cases passed (60 ms)
Your runtime beats 95.56 % of javascript submissions
Your memory usage beats 61.98 % of javascript submissions (34.3 MB)
*/
var intersection = function (nums1, nums2) {
    let set2 = new Set(nums2),
        res = new Set(nums1.filter(x => set2.has(x)));
  //  return [...res];
    return Array.from(res);
};
// @lc code=end

