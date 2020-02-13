/*
 * @lc app=leetcode.cn id=342 lang=javascript
 *
 * [342] 4的幂
 *
 * https://leetcode-cn.com/problems/power-of-four/description/
 *
 * algorithms
 * Easy (47.50%)
 * Likes:    82
 * Dislikes: 0
 * Total Accepted:    18.5K
 * Total Submissions: 38.8K
 * Testcase Example:  '16'
 *
 * 给定一个整数 (32 位有符号整数)，请编写一个函数来判断它是否是 4 的幂次方。
 * 
 * 示例 1:
 * 
 * 输入: 16
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: 5
 * 输出: false
 * 
 * 进阶：
 * 你能不使用循环或者递归来完成本题吗？
 * 
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour1 = function (num) {
    if (num == 0) {
        return false;
    }
    while (num % 4 == 0) {
        num /= 4;
    }
    return num == 1;
};
/*
    Accepted
    1060/1060 cases passed (80 ms)
    Your runtime beats 76 % of javascript submissions
    Your memory usage beats 90.06 % of javascript submissions (35.4 MB)

*/
var isPowerOfFour2 = function (num) {
    //提前计算所有可能答案，32 位整数， 最大 4 的幂次为 15, 则有16种可能
    let i, arr = [];
    for (i = 0; i < 16; i++) {
        arr.push(Math.pow(4, i));
    }

    return arr.includes(num);

};

/*
Accepted
1060/1060 cases passed (84 ms)
Your runtime beats 61.45 % of javascript submissions
Your memory usage beats 95.58 % of javascript submissions (35.3 MB)
*/
var isPowerOfFour3 = function (num) {
    return (num > 0) && (Math.log(num) / Math.log(2) % 2 == 0);
};

/*
Accepted
1060/1060 cases passed (80 ms)
Your runtime beats 76 % of javascript submissions
Your memory usage beats 54.14 % of javascript submissions (35.5 MB)
*/
var isPowerOfFour4 = function (num) {
    return (num > 0) && ((num & (num - 1)) == 0) && ((num & 0xaaaaaaaa) == 0);
};

/*
Accepted
1060/1060 cases passed (80 ms)
Your runtime beats 76 % of javascript submissions
Your memory usage beats 94.48 % of javascript submissions (35.3 MB)
*/
var isPowerOfFour = function (num) {
    return num > 0 && (num & (num - 1)) == 0 && (num % 3 == 1)
};
// @lc code=end

