/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 *
 * https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/description/
 *
 * algorithms
 * Medium (50.21%)
 * Likes:    140
 * Dislikes: 0
 * Total Accepted:    32.6K
 * Total Submissions: 64.8K
 * Testcase Example:  '[3,4,5,1,2]'
 *
 * 假设按照升序排序的数组在预先未知的某个点上进行了旋转。
 * 
 * ( 例如，数组 [0,1,2,4,5,6,7]  可能变为 [4,5,6,7,0,1,2] )。
 * 
 * 请找出其中最小的元素。
 * 
 * 你可以假设数组中不存在重复元素。
 * 
 * 示例 1:
 * 
 * 输入: [3,4,5,1,2]
 * 输出: 1
 * 
 * 示例 2:
 * 
 * 输入: [4,5,6,7,0,1,2]
 * 输出: 0
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/*
Accepted
146/146 cases passed (56 ms)
Your runtime beats 96.66 % of javascript submissions
Your memory usage beats 45.57 % of javascript submissions (34.1 MB)
*/
var findMin = function (nums) {
    let len = nums.length;
    if (len == 0) {
        return -1;
    }
    let left = 0, right = len - 1;
    //如果nums长度为1 或 没有被旋转， 返回结果是nums[0]
    if (len == 1 || nums[right] > nums[0]) {
        return nums[0];
    }
    //如果nums旋转了
    //所有变化点左侧元素 > 数组第一个元素
    //所有变化点右侧元素 < 数组第一个元素
    while (left < right) {
        let mid = left + Math.floor((right - left) / 2); //找到数组的中间元素 mid
        if (nums[mid] > nums[mid + 1]) { //如果中间元素后面的元素小于中间元素，则mid+1 就是最小值
            return nums[mid + 1];
        }
        if (nums[mid - 1] > nums[mid]) { //如果中间元素前面的元素大于中间元素，则mid 就是最小值
            return nums[mid];
        }
        if (nums[mid] > nums[0]) { //如果中间元素 > 数组第一个元素，我们需要在 mid 右边搜索变化点
            left = mid + 1;
        } else { //如果中间元素 < 数组第一个元素，我们需要在 mid 做边搜索变化点。
            right = mid - 1;
        }
    }
    return -1;
};
// @lc code=end

