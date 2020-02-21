/*
 * @lc app=leetcode.cn id=771 lang=javascript
 *
 * [771] 宝石与石头
 *
 * https://leetcode-cn.com/problems/jewels-and-stones/description/
 *
 * algorithms
 * Easy (81.73%)
 * Likes:    504
 * Dislikes: 0
 * Total Accepted:    69.5K
 * Total Submissions: 85.1K
 * Testcase Example:  '"aA"\n"aAAbbbb"'
 *
 *  给定字符串J 代表石头中宝石的类型，和字符串 S代表你拥有的石头。 S 中每个字符代表了一种你拥有的石头的类型，你想知道你拥有的石头中有多少是宝石。
 * 
 * J 中的字母不重复，J 和 S中的所有字符都是字母。字母区分大小写，因此"a"和"A"是不同类型的石头。
 * 
 * 示例 1:
 * 
 * 输入: J = "aA", S = "aAAbbbb"
 * 输出: 3
 * 
 * 
 * 示例 2:
 * 
 * 输入: J = "z", S = "ZZ"
 * 输出: 0
 * 
 * 
 * 注意:
 * 
 * 
 * S 和 J 最多含有50个字母。
 * J 中的字符不重复。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
/*
Accepted
254/254 cases passed (64 ms)
Your runtime beats 85.13 % of javascript submissions
Your memory usage beats 62.08 % of javascript submissions (34 MB)
*/
var numJewelsInStones1 = function (J, S) {
    let res = 0;
    for (let i = 0; i < S.length; i++) {
        if (J.indexOf(S[i]) > -1) {
            res++;
        }
    }
    return res;
};

/*
Accepted
254/254 cases passed (56 ms)
Your runtime beats 98.64 % of javascript submissions
Your memory usage beats 76.18 % of javascript submissions (33.9 MB)
*/
var numJewelsInStones = function (J, S) {
    let jSet = new Set(J);
    let res = 0;
    for (let i = 0; i < S.length; i++) {
        if (jSet.has(S[i])) {
            res++;
        }
    }
    return res;
};


// @lc code=end

