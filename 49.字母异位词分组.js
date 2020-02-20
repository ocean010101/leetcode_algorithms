/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 *
 * https://leetcode-cn.com/problems/group-anagrams/description/
 *
 * algorithms
 * Medium (60.77%)
 * Likes:    267
 * Dislikes: 0
 * Total Accepted:    50.5K
 * Total Submissions: 83.2K
 * Testcase Example:  '["eat","tea","tan","ate","nat","bat"]'
 *
 * 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
 * 
 * 示例:
 * 
 * 输入: ["eat", "tea", "tan", "ate", "nat", "bat"],
 * 输出:
 * [
 * ⁠ ["ate","eat","tea"],
 * ⁠ ["nat","tan"],
 * ⁠ ["bat"]
 * ]
 * 
 * 说明：
 * 
 * 
 * 所有输入均为小写字母。
 * 不考虑答案输出的顺序。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
/*
Accepted
Accepted
101/101 cases passed (132 ms)
Your runtime beats 93.04 % of javascript submissions
Your memory usage beats 92.31 % of javascript submissions (44.8 MB)
*/
var groupAnagrams = function (strs) {
    let myMap = new Map();
    for (let i = 0; i < strs.length; i++) {
        let item = strs[i],
            key = item.split('').sort().join('');
        if (myMap.has(key)) {
            let val = myMap.get(key);
            val.push(item);
            myMap.set(key, val);
        } else {
            myMap.set(key, [item]);
        }
    }
    // return [...myMap.values()];
    return Array.from(myMap.values());
};
// @lc code=end

