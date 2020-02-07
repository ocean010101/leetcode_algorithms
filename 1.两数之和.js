/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // var i, j, len = nums.length;
    // for (i = 0; i < len; i++) {
    //     for (j = 0; j < len; j++) {
    //         if (nums[i] + nums[j] === target && i != j) {
    //             return [i, j];
    //         }
    //     }
    // }
    // [2, 7, 11, 15], target = 9
    let res = {}, i, len = nums.length;
    for (i = 0; i < len; i++) {
        let item = nums[i];
        if (item in res) {
            return [res[item], i];//[0, 1]
        } else {
            res[target - item] = i;//{7:0}
        }
    }
};

// @lc code=end

