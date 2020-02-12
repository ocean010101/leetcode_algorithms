/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (35.99%)
 * Likes:    869
 * Dislikes: 0
 * Total Accepted:    184.5K
 * Total Submissions: 511.2K
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * 示例 1:
 * 
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 * 
 * 
 * 示例 2:
 * 
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 * 
 * 
 * 说明:
 * 
 * 所有输入只包含小写字母 a-z 。
 * 
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let prefix = "", len = strs.length;
    if (len == 0) {
        return "";
    }

    let firstStr = strs[0],
        firLen = firstStr.length,
        index = 1;
    //根据第一个字符串生成前缀
    while (index <= firLen) {
        prefix = firstStr.substr(0, index);
        for (let i = 0; i < len; i++) {
            if (strs[i].indexOf(prefix) != 0) {
                return prefix.substr(0, prefix.length - 1);
            }
        }
        index++;
    }
    return prefix;

};
// @lc code=end

