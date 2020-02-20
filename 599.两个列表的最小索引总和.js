/*
 * @lc app=leetcode.cn id=599 lang=javascript
 *
 * [599] 两个列表的最小索引总和
 *
 * https://leetcode-cn.com/problems/minimum-index-sum-of-two-lists/description/
 *
 * algorithms
 * Easy (49.74%)
 * Likes:    53
 * Dislikes: 0
 * Total Accepted:    10.2K
 * Total Submissions: 20.4K
 * Testcase Example:  '["Shogun","Tapioca Express","Burger King","KFC"]\n' +
  '["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]'
 *
 * 假设Andy和Doris想在晚餐时选择一家餐厅，并且他们都有一个表示最喜爱餐厅的列表，每个餐厅的名字用字符串表示。
 * 
 * 你需要帮助他们用最少的索引和找出他们共同喜爱的餐厅。 如果答案不止一个，则输出所有答案并且不考虑顺序。 你可以假设总是存在一个答案。
 * 
 * 示例 1:
 * 
 * 输入:
 * ["Shogun", "Tapioca Express", "Burger King", "KFC"]
 * ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse",
 * "Shogun"]
 * 输出: ["Shogun"]
 * 解释: 他们唯一共同喜爱的餐厅是“Shogun”。
 * 
 * 
 * 示例 2:
 * 
 * 输入:
 * ["Shogun", "Tapioca Express", "Burger King", "KFC"]
 * ["KFC", "Shogun", "Burger King"]
 * 输出: ["Shogun"]
 * 解释: 他们共同喜爱且具有最小索引和的餐厅是“Shogun”，它有最小的索引和1(0+1)。
 * 
 * 
 * 提示:
 * 
 * 
 * 两个列表的长度范围都在 [1, 1000]内。
 * 两个列表中的字符串的长度将在[1，30]的范围内。
 * 下标从0开始，到列表的长度减1。
 * 两个列表都没有重复的元素。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
/*
Accepted
133/133 cases passed (124 ms)
Your runtime beats 65.73 % of javascript submissions
Your memory usage beats 11.36 % of javascript submissions (43.7 MB)
*/
function sortNumber(a, b) {
    return a - b
}
var findRestaurant1 = function (list1, list2) {
    let i,
        len = list2.length,
        resMap = new Map(),
        myMap2 = new Map(),
        res = [];

    for (i = 0; i < len; i++) {
        myMap2.set(list2[i], i);
    }
    len = list1.length;
    for (i = 0; i < len; i++) {
        let item = list1[i];
        if (myMap2.has(item)) {
            resMap.set(item, myMap2.get(item) + i);
        }
    }
    if (resMap.size == 1) {
        return Array.from(resMap.keys());
    } else {
        let min = Array.from(resMap.values()).sort(sortNumber)[0];
        let myArr = Array.from(resMap);
        for (i = 0; i < myArr.length; i++) {
            if (myArr[i][1] == min) {
                res.push(myArr[i][0]);
            }
        }
    }

    return res;
};

/*
Accepted
133/133 cases passed (112 ms)
Your runtime beats 84.62 % of javascript submissions
Your memory usage beats 17.04 % of javascript submissions (43.6 MB)
*/
var findRestaurant = function (list1, list2) {
    let i,
        indexSum,
        min = Number.MAX_VALUE,
        len = list2.length,
        myMap2 = new Map(),
        res = [];

    for (i = 0; i < len; i++) {
        myMap2.set(list2[i], i);
    }
    len = list1.length;
    for (i = 0; i < len; i++) {
        let item = list1[i];
        if (myMap2.has(item)) {
            indexSum = myMap2.get(item) + i;
            if (indexSum < min) {
                res = [];
                res.push(item);
                min = indexSum;
            } else if (indexSum == min) {
                res.push(item);
            }
        }
    }
    return res;
};
// @lc code=end

