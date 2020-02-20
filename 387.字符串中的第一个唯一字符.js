/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 *
 * https://leetcode-cn.com/problems/first-unique-character-in-a-string/description/
 *
 * algorithms
 * Easy (42.98%)
 * Likes:    180
 * Dislikes: 0
 * Total Accepted:    61K
 * Total Submissions: 140.9K
 * Testcase Example:  '"leetcode"'
 *
 * 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
 * 
 * 案例:
 * 
 * 
 * s = "leetcode"
 * 返回 0.
 * 
 * s = "loveleetcode",
 * 返回 2.
 * 
 * 
 * 
 * 
 * 注意事项：您可以假定该字符串只包含小写字母。
 * 
 */

// @lc code=starti
/**
 * @param {string} s
 * @return {number}
 */
/*
Accepted
104/104 cases passed (128 ms)
Your runtime beats 29.1 % of javascript submissions
Your memory usage beats 63.66 % of javascript submissions (38 MB)
*/
var firstUniqChar = function (s) {
    let i,
        len = s.length,
        myMap = new Map();
    for (i = 0; i < len; i++) {
        if (myMap.has(s[i])) {
            let count = myMap.get(s[i]);
            myMap.set(s[i], count + 1);
        } else {
            myMap.set(s[i], 1);
        }
    }
    for (i = 0; i < len; i++) {
        if (myMap.get(s[i]) == 1) {
            return i;
        }
    }
    return -1;
};

// @lc code=end

