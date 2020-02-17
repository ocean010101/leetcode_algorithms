/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 *
 * https://leetcode-cn.com/problems/plus-one/description/
 *
 * algorithms
 * Easy (42.77%)
 * Likes:    425
 * Dislikes: 0
 * Total Accepted:    118.2K
 * Total Submissions: 275K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
 * 
 * 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
 * 
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
 * 
 * 示例 1:
 * 
 * 输入: [1,2,3]
 * 输出: [1,2,4]
 * 解释: 输入数组表示数字 123。
 * 
 * 
 * 示例 2:
 * 
 * 输入: [4,3,2,1]
 * 输出: [4,3,2,2]
 * 解释: 输入数组表示数字 4321。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
/*
Accepted
109/109 cases passed (64 ms)
Your runtime beats 74.26 % of javascript submissions
Your memory usage beats 33.93 % of javascript submissions (33.9 MB)
*/

var plusOne = function (digits) {
    let res = [],
        len = digits.length,
        carry = 0;
    if (digits[len - 1] < 9) {
        res = digits;
        res[len - 1] += 1;
    } else {
        carry = 1;
        for (let i = len - 1; i >= 0; i--) {
            let num = digits[i] + carry;
            carry = num > 9 ? 1 : 0;
            res.unshift(num % 10);
        }
    }

    if (carry != 0) {
        res.unshift(1);
    }
    return res;
};
/*
Accepted
109/109 cases passed (56 ms)
Your runtime beats 95.63 % of javascript submissions
Your memory usage beats 89.31 % of javascript submissions (33.6 MB)
*/
var plusOne = function(digits) {
    const len = digits.length;
    for(let i = len - 1; i >= 0; i--) {
        digits[i]++;
        digits[i] %= 10;
        if(digits[i]!=0)
            return digits;
    }
    digits.unshift(1);
    return digits;
};

// @lc code=end

