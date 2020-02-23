/*
 * @lc app=leetcode.cn id=154 lang=javascript
 *
 * [154] 寻找旋转排序数组中的最小值 II
 *
 * https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array-ii/description/
 *
 * algorithms
 * Hard (46.35%)
 * Likes:    75
 * Dislikes: 0
 * Total Accepted:    13.6K
 * Total Submissions: 29.3K
 * Testcase Example:  '[1,3,5]'
 *
 * 假设按照升序排序的数组在预先未知的某个点上进行了旋转。
 * 
 * ( 例如，数组 [0,1,2,4,5,6,7]  可能变为 [4,5,6,7,0,1,2] )。
 * 
 * 请找出其中最小的元素。
 * 
 * 注意数组中可能存在重复的元素。
 * 
 * 示例 1：
 * 
 * 输入: [1,3,5]
 * 输出: 1
 * 
 * 示例 2：
 * 
 * 输入: [2,2,2,0,1]
 * 输出: 0
 * 
 * 说明：
 * 
 * 
 * 这道题是 寻找旋转排序数组中的最小值 的延伸题目。
 * 允许重复会影响算法的时间复杂度吗？会如何影响，为什么？
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let len = nums.length;
    if (len == 0) {
        return -1;
    }
    let left = 0, right = len - 1;

    while (left < right) {
        let mid = Math.floor((right + left) / 2);

        if (nums[mid] > nums[right]) { //mid 一定在第 1 个排序数组中，ii 一定满足 mid < i <= right，因此执行 left = mid + 1；
            left = mid + 1
        } else if (nums[mid] < nums[right]) { //mid 一定在第 2 个排序数组中，ii 一定满足 left < i <= mid，因此执行 right = mid；
            right = mid
        } else {
            right = right - 1
        }
    }
    return nums[left]
};
// @lc code=end

