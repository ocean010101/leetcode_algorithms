/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 *
 * https://leetcode-cn.com/problems/isomorphic-strings/description/
 *
 * algorithms
 * Easy (47.03%)
 * Likes:    160
 * Dislikes: 0
 * Total Accepted:    28K
 * Total Submissions: 59.3K
 * Testcase Example:  '"egg"\n"add"'
 *
 * 给定两个字符串 s 和 t，判断它们是否是同构的。
 * 
 * 如果 s 中的字符可以被替换得到 t ，那么这两个字符串是同构的。
 * 
 * 所有出现的字符都必须用另一个字符替换，同时保留字符的顺序。两个字符不能映射到同一个字符上，但字符可以映射自己本身。
 * 
 * 示例 1:
 * 
 * 输入: s = "egg", t = "add"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: s = "foo", t = "bar"
 * 输出: false
 * 
 * 示例 3:
 * 
 * 输入: s = "paper", t = "title"
 * 输出: true
 * 
 * 说明:
 * 你可以假设 s 和 t 具有相同的长度。
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

 /*
 Accepted
30/30 cases passed (92 ms)
Your runtime beats 18.68 % of javascript submissions
Your memory usage beats 43.5 % of javascript submissions (36.2 MB)
 */
var isIsomorphic1 = function (s, t) {
    let myMap1 = new Map(), myMap2 = new Map();
    let len = s.length;
    for (let i = 0; i < len; i++) {
        if (myMap1.has(s[i])) {
            if (myMap1.get(s[i]) != t[i]) {
                return false;
            }
        } else {
            myMap1.set(s[i], t[i]);
        }
        if (myMap2.has(t[i])) {
            if (myMap2.get(t[i]) != s[i]) {
                return false;
            }
        } else {
            myMap2.set(t[i], s[i]);
        }
    }
    return true;
};
/*
Accepted
30/30 cases passed (72 ms)
Your runtime beats 76.08 % of javascript submissions
Your memory usage beats 85.87 % of javascript submissions (35 MB)
*/
var isIsomorphic = function (s, t) {
    // if (s.length != t.length) return false
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) != t.indexOf(t[i])) {
            return false;
        }
    }
    return true;
}

// @lc code=end

