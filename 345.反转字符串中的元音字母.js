/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 *
 * https://leetcode-cn.com/problems/reverse-vowels-of-a-string/description/
 *
 * algorithms
 * Easy (48.86%)
 * Likes:    76
 * Dislikes: 0
 * Total Accepted:    24.3K
 * Total Submissions: 49.6K
 * Testcase Example:  '"hello"'
 *
 * 编写一个函数，以字符串作为输入，反转该字符串中的元音字母。
 * 
 * 示例 1:
 * 
 * 输入: "hello"
 * 输出: "holle"
 * 
 * 
 * 示例 2:
 * 
 * 输入: "leetcode"
 * 输出: "leotcede"
 * 
 * 说明:
 * 元音字母不包含字母"y"。
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
/*
Accepted
481/481 cases passed (80 ms)
Your runtime beats 93.83 % of javascript submissions
Your memory usage beats 33.77 % of javascript submissions (39.7 MB)
*/
var reverseVowels = function (s) {
    let arr = s.split(''),
        n = arr.length,
        i = 0, j = n - 1,
        vArr = ['a', 'e', 'i', 'o', 'u'];
    while (i < j) {
        while (i < n && !vArr.includes(arr[i].toLowerCase())) {
            i++
        }
        while (j >= 0 && !vArr.includes(arr[j].toLowerCase())) {
            j--
        }
        if (i < j) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
            i++
            j--
        }
    }
    return arr.join('')
};

// @lc code=end

