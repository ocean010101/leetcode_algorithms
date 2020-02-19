/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 *
 * https://leetcode-cn.com/problems/happy-number/description/
 *
 * algorithms
 * Easy (56.94%)
 * Likes:    235
 * Dislikes: 0
 * Total Accepted:    45.2K
 * Total Submissions: 79K
 * Testcase Example:  '19'
 *
 * 编写一个算法来判断一个数是不是“快乐数”。
 * 
 * 一个“快乐数”定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，然后重复这个过程直到这个数变为 1，也可能是无限循环但始终变不到
 * 1。如果可以变为 1，那么这个数就是快乐数。
 * 
 * 示例: 
 * 
 * 输入: 19
 * 输出: true
 * 解释: 
 * 1^2 + 9^2 = 82
 * 8^2 + 2^2 = 68
 * 6^2 + 8^2 = 100
 * 1^2 + 0^2 + 0^2 = 1
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
/*
用一个数据结构保存 已经计算过的数字， 如果存在，跳出循环
Accepted
401/401 cases passed (68 ms)
Your runtime beats 89.89 % of javascript submissions
Your memory usage beats 86.41 % of javascript submissions (34.8 MB)
*/
var getRes = function (n) {
    let res = 0;
    while (n != 0) {
        let num = n % 10;
        res += num * num;
        n = Math.floor(n / 10);
    }
    return res;
}
var isHappy = function (n) {
    let mySet = new Set();
    mySet.add(n);

    while (n != 1) {
        n = getRes(n);
        if (mySet.has(n)) {
            return false;
        } else {
            mySet.add(n);
        }
    }
    return true;
};
// @lc code=end

