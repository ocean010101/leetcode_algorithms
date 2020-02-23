/*
 * @lc app=leetcode.cn id=744 lang=javascript
 *
 * [744] 寻找比目标字母大的最小字母
 *
 * https://leetcode-cn.com/problems/find-smallest-letter-greater-than-target/description/
 *
 * algorithms
 * Easy (44.50%)
 * Likes:    48
 * Dislikes: 0
 * Total Accepted:    12K
 * Total Submissions: 27.1K
 * Testcase Example:  '["c","f","j"]\n"a"'
 *
 * 给定一个只包含小写字母的有序数组letters 和一个目标字母 target，寻找有序数组里面比目标字母大的最小字母。
 * 
 * 数组里字母的顺序是循环的。举个例子，如果目标字母target = 'z' 并且有序数组为 letters = ['a', 'b']，则答案返回
 * 'a'。
 * 
 * 示例:
 * 
 * 
 * 输入:
 * letters = ["c", "f", "j"]
 * target = "a"
 * 输出: "c"
 * 
 * 输入:
 * letters = ["c", "f", "j"]
 * target = "c"
 * 输出: "f"
 * 
 * 输入:
 * letters = ["c", "f", "j"]
 * target = "d"
 * 输出: "f"
 * 
 * 输入:
 * letters = ["c", "f", "j"]
 * target = "g"
 * 输出: "j"
 * 
 * 输入:
 * letters = ["c", "f", "j"]
 * target = "j"
 * 输出: "c"
 * 
 * 输入:
 * letters = ["c", "f", "j"]
 * target = "k"
 * 输出: "c"
 * 
 * 
 * 注:
 * 
 * 
 * letters长度范围在[2, 10000]区间内。
 * letters 仅由小写字母组成，最少包含两个不同的字母。
 * 目标字母target 是一个小写字母。
 * 
 * 
 */

// @lc code=start
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
/*
Accepted
165/165 cases passed (64 ms)
Your runtime beats 99.01 % of javascript submissions
Your memory usage beats 70.27 % of javascript submissions (36.3 MB)
*/
var nextGreatestLetter1 = function (letters, target) {
    let len = letters.length;
    //1. letters的长度为1， 返回letters[0]       
    //1.如果target 比letters 中第一个字母小，那么结果为letters中第二个元素
    //2.如果target 比letters 中最后一个字母大，那么结果为letters中第一个元素
    if (len == 1 || target < letters[0] || target >= letters[len - 1]) {
        return letters[0];
    }
    let left = 0, right = len - 1;
    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);
        if (letters[mid] <= target) {
            if (target < letters[mid + 1]) {
                return letters[mid + 1];
            } else {
                left = mid + 1;
            }
        } else {
            right = mid;
        }
    }
};

/*
Accepted
165/165 cases passed (68 ms)
Your runtime beats 95.57 % of javascript submissions
Your memory usage beats 61.26 % of javascript submissions (36.5 MB)
*/

var nextGreatestLetter = function (letters, target) {
    let len = letters.length,
        left = 0, right = len;
    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);
        if (letters[mid] <= target) {
            left = mid + 1; //修改查找区间为 [mid + 1, right]，
        } else {
            right = mid; //修改查找区间为  [left, mid]
        }
    }
    return letters[left % len]; //如果插入位置是最后一个位置 letters.length，则返回 letters[0]
};
// @lc code=end

