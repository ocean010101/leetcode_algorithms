/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 *
 * https://leetcode-cn.com/problems/move-zeroes/description/
 *
 * algorithms
 * Easy (59.07%)
 * Likes:    493
 * Dislikes: 0
 * Total Accepted:    105.5K
 * Total Submissions: 178.1K
 * Testcase Example:  '[0,1,0,3,12]'
 *
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 * 
 * 示例:
 * 
 * 输入: [0,1,0,3,12]
 * 输出: [1,3,12,0,0]
 * 
 * 说明:
 * 
 * 
 * 必须在原数组上操作，不能拷贝额外的数组。
 * 尽量减少操作次数。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/*
Accepted
21/21 cases passed (76 ms)
Your runtime beats 61.87 % of javascript submissions
Your memory usage beats 5.16 % of javascript submissions (36.9 MB)
*/
var moveZeroes1 = function (nums) {
    let lastNonZeroFoundAt = 0;
    for (let cur = 0; cur < nums.length; cur++) {
        if (nums[cur] != 0) {
            [nums[lastNonZeroFoundAt], nums[cur]] = [nums[cur], nums[lastNonZeroFoundAt]];
            lastNonZeroFoundAt++;
        }
    }
};
/*
思路：
把数组中所有的非零元素，按顺序给数组的前段元素位赋值，
剩下的全部直接赋值 0。我们定义一个 nums 0...i 表示为非 0 元素的数组，之后在遍历数列的时候不断维护这个定义。
时间复杂度：O(n)
空间复杂度：O(1)
Accepted
21/21 cases passed (68 ms)
Your runtime beats 91.68 % of javascript submissions
Your memory usage beats 59.8 % of javascript submissions (35.8 MB)
*/
var moveZeroes = function (nums) {
    let n = nums.length,
        i = 0,
        j = 0;

    while (j <= n - 1) {
        if (nums[j] != 0) {
            nums[i] = nums[j];
            i++;
        }
        j++;
    }
    for (let k = i; k < n; k++) {
        nums[k] = 0;
    }
};
// @lc code=end

