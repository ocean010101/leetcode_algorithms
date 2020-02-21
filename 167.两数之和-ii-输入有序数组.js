/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 *
 * https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/description/
 *
 * algorithms
 * Easy (52.57%)
 * Likes:    243
 * Dislikes: 0
 * Total Accepted:    67.8K
 * Total Submissions: 129K
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * 给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。
 * 
 * 函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。
 * 
 * 说明:
 * 
 * 
 * 返回的下标值（index1 和 index2）不是从零开始的。
 * 你可以假设每个输入只对应唯一的答案，而且你不可以重复使用相同的元素。
 * 
 * 
 * 示例:
 * 
 * 输入: numbers = [2, 7, 11, 15], target = 9
 * 输出: [1,2]
 * 解释: 2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。
 * 
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
/*
Accepted
17/17 cases passed (76 ms)
Your runtime beats 44.68 % of javascript submissions
Your memory usage beats 55.51 % of javascript submissions (35.1 MB)
*/
var twoSum1 = function (numbers, target) {
    let myMap = new Map();
    for (let i = 0; i < numbers.length; i++) {
        let item = numbers[i];
        if (myMap.has(item)) {
            return [myMap.get(item), i + 1];
        } else {
            myMap.set(target - item, i + 1);
        }
    }
    return [];
};

/*
Accepted
17/17 cases passed (104 ms)
Your runtime beats 33.17 % of javascript submissions
Your memory usage beats 60.48 % of javascript submissions (35.1 MB)
*/
var twoSum = function (numbers, target) {
    //双指针
    let len = numbers.length;
    let lowIndex = 0, highIndex = len - 1;

    while (lowIndex < highIndex) {
        let sum = numbers[lowIndex] + numbers[highIndex];
        if (sum == target) {
            return [lowIndex + 1, highIndex + 1];
        } else if (sum < target) {
            lowIndex++;
        } else if (sum > target) {
            highIndex--;
        }
    }

    return [];
};
// @lc code=end

