/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 *
 * https://leetcode-cn.com/problems/top-k-frequent-elements/description/
 *
 * algorithms
 * Medium (60.26%)
 * Likes:    253
 * Dislikes: 0
 * Total Accepted:    36.9K
 * Total Submissions: 61.2K
 * Testcase Example:  '[1,1,1,2,2,3]\n2'
 *
 * 给定一个非空的整数数组，返回其中出现频率前 k 高的元素。
 * 
 * 示例 1:
 * 
 * 输入: nums = [1,1,1,2,2,3], k = 2
 * 输出: [1,2]
 * 
 * 
 * 示例 2:
 * 
 * 输入: nums = [1], k = 1
 * 输出: [1]
 * 
 * 说明：
 * 
 * 
 * 你可以假设给定的 k 总是合理的，且 1 ≤ k ≤ 数组中不相同的元素的个数。
 * 你的算法的时间复杂度必须优于 O(n log n) , n 是数组的大小。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
/*
Accepted
21/21 cases passed (80 ms)
Your runtime beats 85.09 % of javascript submissions
Your memory usage beats 47.55 % of javascript submissions (37.8 MB)
*/
function sortNumber(a, b) {
    return b - a
}

var topKFrequent = function (nums, k) {
    let res = [],
        i,
        len = nums.length,
        myMap = new Map();
    for (i = 0; i < len; i++) {
        let item = nums[i];
        if (myMap.has(item)) {
            let count = myMap.get(item);
            myMap.set(item, count + 1);
        } else {
            myMap.set(item, 1);
        }
    }
    let arr = Array.from(myMap.values()).sort(sortNumber);
    let comNum = arr[k - 1];

    let myArr = Array.from(myMap)
    for (i = 0; i < myArr.length; i++) {
        if (myArr[i][1] >= comNum) {
            res.push(myArr[i][0]);
        }
    }

    return res;
};
// @lc code=end

