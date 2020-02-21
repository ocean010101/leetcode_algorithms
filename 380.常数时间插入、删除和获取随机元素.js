/*
 * @lc app=leetcode.cn id=380 lang=javascript
 *
 * [380] 常数时间插入、删除和获取随机元素
 *
 * https://leetcode-cn.com/problems/insert-delete-getrandom-o1/description/
 *
 * algorithms
 * Medium (47.81%)
 * Likes:    80
 * Dislikes: 0
 * Total Accepted:    8.7K
 * Total Submissions: 18.2K
 * Testcase Example:  '["RandomizedSet","insert","remove","insert","getRandom","remove","insert","getRandom"]\n' +
  '[[],[1],[2],[2],[],[1],[2],[]]'
 *
 * 设计一个支持在平均 时间复杂度 O(1) 下，执行以下操作的数据结构。
 * 
 * 
 * insert(val)：当元素 val 不存在时，向集合中插入该项。
 * remove(val)：元素 val 存在时，从集合中移除该项。
 * getRandom：随机返回现有集合中的一项。每个元素应该有相同的概率被返回。
 * 
 * 
 * 示例 :
 * 
 * 
 * // 初始化一个空的集合。
 * RandomizedSet randomSet = new RandomizedSet();
 * 
 * // 向集合中插入 1 。返回 true 表示 1 被成功地插入。
 * randomSet.insert(1);
 * 
 * // 返回 false ，表示集合中不存在 2 。
 * randomSet.remove(2);
 * 
 * // 向集合中插入 2 。返回 true 。集合现在包含 [1,2] 。
 * randomSet.insert(2);
 * 
 * // getRandom 应随机返回 1 或 2 。
 * randomSet.getRandom();
 * 
 * // 从集合中移除 1 ，返回 true 。集合现在包含 [2] 。
 * randomSet.remove(1);
 * 
 * // 2 已在集合中，所以返回 false 。
 * randomSet.insert(2);
 * 
 * // 由于 2 是集合中唯一的数字，getRandom 总是返回 2 。
 * randomSet.getRandom();
 * 
 * 
 */
/*
动态数组存储元素值
哈希表存储值到索引的映射。
Accepted
18/18 cases passed (164 ms)
Your runtime beats 69.63 % of javascript submissions
Your memory usage beats 53.97 % of javascript submissions (46.7 MB)
*/

// @lc code=start
/**
 * Initialize your data structure here.
 */
var RandomizedSet = function () {
    this.myArr = [];//存储元素值
    this.myMap = new Map(); // 存储值到索引的映射
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if (this.myMap.has(val)) {
        return false;
    }
    let size = this.myArr.length;
    this.myArr[size] = val;
    this.myMap.set(val, size);
    return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    /*
    在哈希表中查找要删除元素的索引。
    将要删除元素与最后一个元素交换。
    删除最后一个元素。
    更新哈希表中的对应关系。
    */
    if (!this.myMap.has(val)) {
        return false;
    }
    let index = this.myMap.get(val);
    let lastEle = this.myArr[this.myArr.length - 1];
    this.myMap.set(lastEle, index);
    this.myArr[index] = lastEle;

    this.myArr.pop();
    this.myMap.delete(val);
    return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    return this.myArr[Math.round(Math.random() * (this.myArr.length - 1))];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end

