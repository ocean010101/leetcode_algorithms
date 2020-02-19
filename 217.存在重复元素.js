/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 *
 * https://leetcode-cn.com/problems/contains-duplicate/description/
 *
 * algorithms
 * Easy (51.41%)
 * Likes:    214
 * Dislikes: 0
 * Total Accepted:    107.6K
 * Total Submissions: 209.1K
 * Testcase Example:  '[1,2,3,1]'
 *
 * 给定一个整数数组，判断是否存在重复元素。
 * 
 * 如果任何值在数组中出现至少两次，函数返回 true。如果数组中每个元素都不相同，则返回 false。
 * 
 * 示例 1:
 * 
 * 输入: [1,2,3,1]
 * 输出: true
 * 
 * 示例 2:
 * 
 * 输入: [1,2,3,4]
 * 输出: false
 * 
 * 示例 3:
 * 
 * 输入: [1,1,1,3,3,4,3,2,4,2]
 * 输出: true
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var containsDuplicate = function (nums) {
//hash表解法
// let len = nums.length, numMap = {};
// if (len <= 1) {
//     return false;
// }
// for (let i = 0; i < len; i++) {
//     if (typeof (numMap[nums[i]]) != 'undefined') {
//         return true;
//     } else {
//         numMap[nums[i]] = 1;
//     }
// }
// return false;



// let arr = nums;
// arr.sort();
// for (let i = 0; i < arr.length - 1; ++i) {
//     if (arr[i] == arr[i + 1]) {
//         return true;
//     }
// }
// return false;


//     for (let i = 0; i < nums.length; ++i) {
//         for (let j = 0; j < i; ++j) {
//             if (nums[j] == nums[i]) {
//                 return true;
//             }
//         }
//     }
//     return false;
// };
/*
Accepted
18/18 cases passed (72 ms)
Your runtime beats 88.3 % of javascript submissions
Your memory usage beats 60.86 % of javascript submissions (40 MB)
*/
var containsDuplicate2 = function (nums) {
    let mySet = new Set(nums);
    return mySet.size != nums.length;
};
/*
Accepted
18/18 cases passed (64 ms)
Your runtime beats 97.37 % of javascript submissions
Your memory usage beats 51.79 % of javascript submissions (40.4 MB)
*/
var containsDuplicate = function (nums) {
    let len = nums.length;
    if (len <= 1) {
        return false;
    }
    let i, numSet = new Set();
    for (i = 0; i < len; i++) {
        if (numSet.has(nums[i])) {
            return true;
        } else {
            numSet.add(nums[i]);
        }
    }
    return false;
};

// @lc code=end

