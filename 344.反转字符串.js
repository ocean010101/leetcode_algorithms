/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 *
 * https://leetcode-cn.com/problems/reverse-string/description/
 *
 * algorithms
 * Easy (68.76%)
 * Likes:    214
 * Dislikes: 0
 * Total Accepted:    106.9K
 * Total Submissions: 155.3K
 * Testcase Example:  '["h","e","l","l","o"]'
 *
 * 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。
 * 
 * 不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。
 * 
 * 你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：["h","e","l","l","o"]
 * 输出：["o","l","l","e","h"]
 * 
 * 
 * 示例 2：
 * 
 * 输入：["H","a","n","n","a","h"]
 * 输出：["h","a","n","n","a","H"]
 * 
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
/*
Accepted
478/478 cases passed (136 ms)
Your runtime beats 63.6 % of javascript submissions
Your memory usage beats 42.76 % of javascript submissions (47.2 MB)
*/
var reverseString2 = function (s) {
    let len = s.length, len2 = len / 2;
    for (let i = 0; i < len2; i++) {
        [s[i], s[len - 1 - i]] = [s[len - 1 - i], s[i]];
    }
};

/*
Accepted
478/478 cases passed (120 ms)
Your runtime beats 97.69 % of javascript submissions
Your memory usage beats 88.54 % of javascript submissions (46.8 MB)
*/
var reverseString1 = function (s) {
    return s.reverse();
};
/*
递归
Accepted
478/478 cases passed (136 ms)
Your runtime beats 63.6 % of javascript submissions
Your memory usage beats 5.02 % of javascript submissions (49.1 MB)
*/
var helper = function (str, left, right) {
    if (left >= right) {
        return;
    }

    //2.就地交换前导字符和末尾字符
    let tmp = str[left];
    str[left] = str[right];
    str[right] = tmp;
    //3. 递归调用函数来反转剩余的字符串，也就是 reverseString(str[1...n-2]).
    helper(str, left + 1, right - 1);
}

var reverseString = function (s) {
    //1.从输入字符串中获取前导字符和尾随字符，即 str[0] and str[n-1].
    helper(s, 0, s.length - 1);
};
// @lc code=end

