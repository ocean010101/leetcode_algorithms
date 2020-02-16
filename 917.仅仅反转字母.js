/*
 * @lc app=leetcode.cn id=917 lang=javascript
 *
 * [917] 仅仅反转字母
 *
 * https://leetcode-cn.com/problems/reverse-only-letters/description/
 *
 * algorithms
 * Easy (53.03%)
 * Likes:    40
 * Dislikes: 0
 * Total Accepted:    8.8K
 * Total Submissions: 16.5K
 * Testcase Example:  '"ab-cd"'
 *
 * 给定一个字符串 S，返回 “反转后的” 字符串，其中不是字母的字符都保留在原地，而所有字母的位置发生反转。
 * 
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入："ab-cd"
 * 输出："dc-ba"
 * 
 * 
 * 示例 2：
 * 
 * 输入："a-bC-dEf-ghIj"
 * 输出："j-Ih-gfE-dCba"
 * 
 * 
 * 示例 3：
 * 
 * 输入："Test1ng-Leet=code-Q!"
 * 输出："Qedo1ct-eeLg=ntse-T!"
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * S.length <= 100
 * 33 <= S[i].ASCIIcode <= 122 
 * S 中不包含 \ or "
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */

/*
Accepted
116/116 cases passed (68 ms)
Your runtime beats 47.37 % of javascript submissions
Your memory usage beats 27.42 % of javascript submissions (34.2 MB)
*/
var reverseOnlyLetters1 = function (S) {
    let stack = [], res = [],
        i, len = S.length;
    for (i = 0; i < len; i++) {
        if (S[i].match(/[a-zA-Z]/)) {
            stack.push(S[i]);
        }
    }
    for (i = 0; i < len; i++) {
        if (S[i].match(/[a-zA-Z]/)) {
            res.push(stack.pop());
        } else {
            res.push(S[i])
        }
    }
    return res.join('');
};
/*
Accepted
116/116 cases passed (68 ms)
Your runtime beats 47.37 % of javascript submissions
Your memory usage beats 22.58 % of javascript submissions (34.3 MB)
*/
var reverseOnlyLetters = function (S) {
    let res = [],
        i, len = S.length,
        j = len - 1;
    for (i = 0; i < len; i++) {
        if (S[i].match(/[a-zA-Z]/)) {
            while (!S[j].match(/[a-zA-Z]/))
                j--;
            res.push(S[j--])
        } else {
            res.push(S[i])
        }
    }
    return res.join('');
};
// @lc code=end

