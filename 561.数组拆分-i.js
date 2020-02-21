/*
 * @lc app=leetcode.cn id=561 lang=javascript
 *
 * [561] 数组拆分 I
 *
 * https://leetcode-cn.com/problems/array-partition-i/description/
 *
 * algorithms
 * Easy (69.42%)
 * Likes:    141
 * Dislikes: 0
 * Total Accepted:    28.9K
 * Total Submissions: 41.6K
 * Testcase Example:  '[1,4,3,2]'
 *
 * 给定长度为 2n 的数组, 你的任务是将这些数分成 n 对, 例如 (a1, b1), (a2, b2), ..., (an, bn) ，使得从1 到
 * n 的 min(ai, bi) 总和最大。
 * 
 * 示例 1:
 * 
 * 
 * 输入: [1,4,3,2]
 * 
 * 输出: 4
 * 解释: n 等于 2, 最大总和为 4 = min(1, 2) + min(3, 4).
 * 
 * 
 * 提示:
 * 
 * 
 * n 是正整数,范围在 [1, 10000].
 * 数组中的元素范围在 [-10000, 10000].
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
81/81 cases passed (148 ms)
Your runtime beats 31.31 % of javascript submissions
Your memory usage beats 29.55 % of javascript submissions (39.5 MB)
*/
var sortNums = function (a, b) {
    return a - b;
}
var arrayPairSum1 = function (nums) {
    let arr = nums.sort(sortNums);
    let res = 0;
    for (let i = 0; i < arr.length; i += 2) {
        let min = Math.min(arr[i], arr[i + 1]);
        res += min;
    }
    return res;
};

// @lc code=end

