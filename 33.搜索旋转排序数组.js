/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 *
 * https://leetcode-cn.com/problems/search-in-rotated-sorted-array/description/
 *
 * algorithms
 * Medium (36.39%)
 * Likes:    527
 * Dislikes: 0
 * Total Accepted:    75.9K
 * Total Submissions: 208.6K
 * Testcase Example:  '[4,5,6,7,0,1,2]\n0'
 *
 * 假设按照升序排序的数组在预先未知的某个点上进行了旋转。
 * 
 * ( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。
 * 
 * 搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。
 * 
 * 你可以假设数组中不存在重复的元素。
 * 
 * 你的算法时间复杂度必须是 O(log n) 级别。
 * 
 * 示例 1:
 * 
 * 输入: nums = [4,5,6,7,0,1,2], target = 0
 * 输出: 4
 * 
 * 
 * 示例 2:
 * 
 * 输入: nums = [4,5,6,7,0,1,2], target = 3
 * 输出: -1
 * 
 */

// @lc code=start
/*
Accepted
196/196 cases passed (72 ms)
Your runtime beats 38.43 % of javascript submissions
Your memory usage beats 99.44 % of javascript submissions (33.6 MB)
*/
//使用二分查找找到最小值的索引
var find_rotate_index = function (nums, left, right) {
    if (nums[left] < nums[right]) {
        return 0;
    }
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] > nums[mid + 1]) {
            return mid + 1;
        } else {
            if (nums[mid] < nums[left]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }
    return 0;
}

var search0 = function (nums, target, left, right) {
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] == target) {
            return mid;
        } else if (target < nums[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
}
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    //1. 找到旋转的下标 rotation_index
    //2. 查找目标元素
    let len = nums.length;

    if (len == 0) {
        return -1;
    } else if (len == 1) {
        return nums[0] == target ? 0 : -1;
    }
    //找到最小的元素
    let rotate_index = find_rotate_index(nums, 0, len - 1);
    // if target is the smallest element
    if (nums[rotate_index] == target)
        return rotate_index;
    // if array is not rotated, search in the entire array
    //如果数组没有旋转， 使用二分查找
    if (rotate_index == 0)
        return search0(nums, target, 0, len - 1);

    if (target < nums[0])
        // search in the right side
        return search0(nums, target, rotate_index, len - 1);
    // search in the left side
    return search0(nums, target, 0, rotate_index);
};
// @lc code=end

