/*
 * @lc app=leetcode.cn id=557 lang=javascript
 *
 * [557] 反转字符串中的单词 III
 *
 * https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/description/
 *
 * algorithms
 * Easy (69.18%)
 * Likes:    154
 * Dislikes: 0
 * Total Accepted:    41.4K
 * Total Submissions: 59.8K
 * Testcase Example:  `"Let's take LeetCode contest"`
 *
 * 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
 * 
 * 示例 1:
 * 
 * 
 * 输入: "Let's take LeetCode contest"
 * 输出: "s'teL ekat edoCteeL tsetnoc" 
 * 
 * 
 * 注意：在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
/*
Accepted
30/30 cases passed (92 ms)
Your runtime beats 62.04 % of javascript submissions
Your memory usage beats 27.2 % of javascript submissions (42.5 MB)
*/
var reverseString = function (str) {
    let s = str.split(''), len = s.length, len2 = len / 2;
    for (let i = 0; i < len2; i++) {
        let temp = s[i];
        s[i] = s[len - 1 - i];
        s[len - 1 - i] = temp;
    }
    return s.join('');
};
/*
Accepted
30/30 cases passed (92 ms)
Your runtime beats 62.04 % of javascript submissions
Your memory usage beats 38.4 % of javascript submissions (42.4 MB)
*/
var reverseWords = function (s) {
    let arr = s.split(' ');
    for (let i = 0; i < arr.length; i++) {
        // arr[i] = reverseString(arr[i]);
        arr[i] = arr[i].split('').reverse().join('');
    }
    return arr.join(' ');
};

// @lc code=end

