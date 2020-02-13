/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 *
 * https://leetcode-cn.com/problems/number-of-1-bits/description/
 *
 * algorithms
 * Easy (63.83%)
 * Likes:    134
 * Dislikes: 0
 * Total Accepted:    46.1K
 * Total Submissions: 71.8K
 * Testcase Example:  '00000000000000000000000000001011'
 *
 * 编写一个函数，输入是一个无符号整数，返回其二进制表达式中数字位数为 ‘1’ 的个数（也被称为汉明重量）。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：00000000000000000000000000001011
 * 输出：3
 * 解释：输入的二进制串 00000000000000000000000000001011 中，共有三位为 '1'。
 * 
 * 
 * 示例 2：
 * 
 * 输入：00000000000000000000000010000000
 * 输出：1
 * 解释：输入的二进制串 00000000000000000000000010000000 中，共有一位为 '1'。
 * 
 * 
 * 示例 3：
 * 
 * 输入：11111111111111111111111111111101
 * 输出：31
 * 解释：输入的二进制串 11111111111111111111111111111101 中，共有 31 位为 '1'。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 请注意，在某些语言（如
 * Java）中，没有无符号整数类型。在这种情况下，输入和输出都将被指定为有符号整数类型，并且不应影响您的实现，因为无论整数是有符号的还是无符号的，其内部的二进制表示形式都是相同的。
 * 在 Java 中，编译器使用二进制补码记法来表示有符号整数。因此，在上面的 示例 3 中，输入表示有符号整数 -3。
 * 
 * 
 * 
 * 
 * 进阶:
 * 如果多次调用这个函数，你将如何优化你的算法？
 * 
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
/*
Accepted
601/601 cases passed (76 ms)
Your runtime beats 61.54 % of javascript submissions
Your memory usage beats 97.2 % of javascript submissions (34 MB)
*/
//将 n 和 n−1 做与运算，会把最后一个 1 的位变成 0
var hammingWeight = function (n) {
    let sum = 0;
    while (n != 0) {
        sum++;
        n &= (n - 1);
    }
    return sum;
};
//遍历数字的 32 位。如果某一位是 1 ，将计数器加一
/*
Accepted
601/601 cases passed (72 ms)
Your runtime beats 77.83 % of javascript submissions
Your memory usage beats 76.46 % of javascript submissions (34.6 MB)
*/
var hammingWeight1 = function (n) {
    let bits = 0, mask = 1;
    for (let i = 0; i < 32; i++) {
        if ((n & mask) != 0) {
            bits++;
        }
        mask <<= 1;
    }
    return bits;
}
// @lc code=end

