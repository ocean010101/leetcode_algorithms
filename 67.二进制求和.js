/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 *
 * https://leetcode-cn.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (52.11%)
 * Likes:    301
 * Dislikes: 0
 * Total Accepted:    61.9K
 * Total Submissions: 118.6K
 * Testcase Example:  '"11"\n"1"'
 *
 * 给定两个二进制字符串，返回他们的和（用二进制表示）。
 * 
 * 输入为非空字符串且只包含数字 1 和 0。
 * 
 * 示例 1:
 * 
 * 输入: a = "11", b = "1"
 * 输出: "100"
 * 
 * 示例 2:
 * 
 * 输入: a = "1010", b = "1011"
 * 输出: "10101"
 * 
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
/*
Accepted
294/294 cases passed (72 ms)
Your runtime beats 78.05 % of javascript submissions
Your memory usage beats 20.34 % of javascript submissions (36.4 MB)
*/
var addBinary1 = function (a, b) {
    let i = a.length - 1, j = b.length - 1, res = [], carry = 0;
    while (a[i] != null || b[j] != null) {
        let b1 = a[i] != null ? a[i] : '0',
            b2 = b[j] != null ? b[j] : '0';
        res.unshift((b1 ^ b2) ^ carry);
        if ((b1 == '1' && b2 == '1') ||
            (b1 == '1' && carry == 1) ||
            (b2 == '1' && carry == 1)) {
            carry = 1;
        } else {
            carry = 0;
        }
        i--;
        j--;
    }
    if (carry > 0) {
        res.unshift(1)
    }
    return res.join('');
};
// 有限制
// var addBinary = function (a, b) {
//     return (parseInt(a, 2) + parseInt(b, 2)).toString(2)
// }
// var addBinary = function (a, b) {
//     let x = parseInt(a, 2), y = parseInt(b, 2);
//     let carry = 0, answer = 0;
//     while (y != 0) {
//         answer = x ^ y;
//         carry = (x & y) << 1;
//         x = answer;
//         y = carry;
//     }
//     return x.toString(2);
// }

// @lc code=end

