/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 *
 * https://leetcode-cn.com/problems/next-greater-element-i/description/
 *
 * algorithms
 * Easy (62.68%)
 * Likes:    152
 * Dislikes: 0
 * Total Accepted:    21.3K
 * Total Submissions: 33.9K
 * Testcase Example:  '[4,1,2]\n[1,3,4,2]'
 *
 * 给定两个没有重复元素的数组 nums1 和 nums2 ，其中nums1 是 nums2 的子集。找到 nums1 中每个元素在 nums2
 * 中的下一个比其大的值。
 * 
 * nums1 中数字 x 的下一个更大元素是指 x 在 nums2 中对应位置的右边的第一个比 x 大的元素。如果不存在，对应位置输出-1。
 * 
 * 示例 1:
 * 
 * 
 * 输入: nums1 = [4,1,2], nums2 = [1,3,4,2].
 * 输出: [-1,3,-1]
 * 解释:
 * ⁠   对于num1中的数字4，你无法在第二个数组中找到下一个更大的数字，因此输出 -1。
 * ⁠   对于num1中的数字1，第二个数组中数字1右边的下一个较大数字是 3。
 * ⁠   对于num1中的数字2，第二个数组中没有下一个更大的数字，因此输出 -1。
 * 
 * 示例 2:
 * 
 * 
 * 输入: nums1 = [2,4], nums2 = [1,2,3,4].
 * 输出: [3,-1]
 * 解释:
 * 对于num1中的数字2，第二个数组中的下一个较大数字是3。
 * ⁠   对于num1中的数字4，第二个数组中没有下一个更大的数字，因此输出 -1。
 * 
 * 
 * 注意:
 * 
 * 
 * nums1和nums2中所有元素是唯一的。
 * nums1和nums2 的数组大小都不超过1000。
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
Accepted
17/17 cases passed (72 ms)
Your runtime beats 76.86 % of javascript submissions
Your memory usage beats 26.51 % of javascript submissions (36.2 MB)
*/
var nextGreaterElement = function (nums1, nums2) {
    let i,
        len = nums2.length,
        s = [],
        map2 = {},
        ret = [];

    for (i = 0; i < len; i++) {
        let item = nums2[i];
        while (s.length > 0 && item > s[s.length - 1]) {
            map2[s.pop()] = item;
        }
        s.push(item);
    }

    while (s.length != 0) {
        map2[s.pop()] = -1;
    }

    len = nums1.length;
    for (i = 0; i < len; i++) {
        ret[i] = map2[nums1[i]];
    }
    return ret;
};
// @lc code=end

