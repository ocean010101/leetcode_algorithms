/*
 * @lc app=leetcode.cn id=503 lang=javascript
 *
 * [503] 下一个更大元素 II
 *
 * https://leetcode-cn.com/problems/next-greater-element-ii/description/
 *
 * algorithms
 * Medium (51.90%)
 * Likes:    82
 * Dislikes: 0
 * Total Accepted:    9.4K
 * Total Submissions: 18.1K
 * Testcase Example:  '[1,2,1]'
 *
 * 给定一个循环数组（最后一个元素的下一个元素是数组的第一个元素），输出每个元素的下一个更大元素。数字 x
 * 的下一个更大的元素是按数组遍历顺序，这个数字之后的第一个比它更大的数，这意味着你应该循环地搜索它的下一个更大的数。如果不存在，则输出 -1。
 * 
 * 示例 1:
 * 
 * 
 * 输入: [1,2,1]
 * 输出: [2,-1,2]
 * 解释: 第一个 1 的下一个更大的数是 2；
 * 数字 2 找不到下一个更大的数； 
 * 第二个 1 的下一个最大的数需要循环搜索，结果也是 2。
 * 
 * 
 * 注意: 输入数组的长度不会超过 10000。
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
/*
对于每一个元素找到它后面第一个比它大的数，由于是循环数组，所以我们使用两倍数组长度进行计算
==> 我们需要一个数组记录结果res，从最后一个开始记录
==> 我们需要一个数组s 记录当前元素需要比较的元素对应的索引
eg:[2, 1, 2, 4, 3]，n = 5, 
循环数组[2, 1, 2, 4, 3,2, 1, 2, 4, 3], len = n *2 = 10
对于最后一个元素来说， 后面没有比它更大的数了，所以结果中对应的最后一个元素为-1
(1)i=9, nums[9 % 10] = nums[9] = 3
    后面没值,其他元素需要与nums[9]=3比较
    -->res[9%5]=res[4]= -1, s=[3]
(2) i=8, nums[8 % 10] = nums[8] = 4 与后面的值nums[9]=3 比较
    nums[8] 大于 nums[9]，从s中删除nums[9]， 把nums[8]值存入s中 s=[4]
    -->res[8%5]=res[3]= -1,
(3) i=7, nums[7 % 10] = nums[7] = 2 与后面的值nums[8]=4 比较
    nums[7] 小于 nums[8]，把nums[7]值存入s中,s=[4, 2]
    -->res[7%5]=res[2]= 4,
(4) i=6, nums[6 % 10] = nums[6] = 1 与后面的值nums[7]=2, nums[8]=4 比较
    nums[6] 小于 nums[7]，把nums[6]值存入s中,s=[4, 2, 1]
    -->res[6%5]=res[1]= 2,
(5) i=5, nums[5 % 10] = nums[5] = 2 与后面的值nums[6]=1,nums[7]=2, nums[8]=4 比较
    nums[5] 大于 nums[6]，删除nums[6],s=[4, 2]
    nums[5] 等于 nums[7]，删除nums[7],s=[4]
    nums[5] 小于 nums[8]，添加nums[5],s=[4，2]
    -->res[5%5]=res[0]= 4,(res= [4,2,4,-1,-1])
(6) i=4, nums[4 % 10] = nums[4] = 3 与后面的值nums[5]=2, nums[8]=4 比较
    nums[4] 大于 nums[5]，删除nums[5], s=[4]
    nums[4] 小于 nums[8]，添加nums[4],s=[4，3]
    -->res[4%5]=res[4]= 4,
(7) i=3, nums[3 % 10] = nums[3] = 4 与后面的值 nums[4]=3, nums[8] = 4 比较
    nums[3] 大于 nums[4]，从s中删除nums[4]， 
    nums[3] 大于 nums[8]，从s中删除nums[8]， 把nums[3]值存入s中 s=[4]
    -->res[3%5]=res[3]= -1,
(8) i=2, nums[2 % 10] = nums[2] = 2 与后面的值nums[3]=4 比较
    nums[2] 小于 nums[3]，把nums[2]值存入s中,s=[4, 2]
(9) i=1, nums[1 % 10] = nums[1] = 1 与后面的值nums[2]=2, nums[3]=4 比较
    nums[1] 小于 nums[2]，把nums[1]值存入s中,s=[4, 2, 1]
    -->res[1%5]=res[1]= 2,
(10) i=0, nums[0 % 10] = nums[0] = 2 与后面的值nums[1]=1,nums[2]=2, nums[3]=4 比较
    nums[0] 大于 nums[1]，删除nums[1],s=[4, 2]
    nums[0] 等于 nums[2]，删除nums[2],s=[4]
    nums[0] 小于 nums[3]，添加nums[0],s=[4，2]
    -->res[0%5]=res[0]= 4,(res= [4,2,4,-1,4])
*/
/*
Accepted
224/224 cases passed (140 ms)
Your runtime beats 56.1 % of javascript submissions
Your memory usage beats 36.89 % of javascript submissions (41.5 MB)
*/
var nextGreaterElements = function (nums) {
    let n = nums.length;
    let res = []; // 存放结果
    let s = [];
    for (let i = 2 * n - 1; i >= 0; i--) {
        while (s.length > 0 &&
            s[s.length - 1] <= nums[i % n]) { //如果栈s顶部的数字
            s.pop();
        }
        res[i % n] = s.length == 0 ? -1 : s[s.length - 1];
        s.push(nums[i % n]);
    }
    return res;
};
// @lc code=end

