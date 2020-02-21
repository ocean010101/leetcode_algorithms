/*
设计并实现一个 TwoSum 的类，使该类需要支持 add 和 find 的操作。

add 操作 -  对内部数据结构增加一个数。
find 操作 - 寻找内部数据结构中是否存在一对整数，使得两数之和与给定的数相等。

示例 1:

add(1); add(3); add(5);
find(4) -> true
find(7) -> false
示例 2:

add(3); add(1); add(2);
find(3) -> true
find(6) -> false

执行用时 :
216 ms
, 在所有 JavaScript 提交中击败了
67.50%
的用户
内存消耗 :
56 MB
, 在所有 JavaScript 提交中击败了
40.00%
的用户
*/


/**
 * Initialize your data structure here.
 */
var TwoSum = function () {
    this.num_counts = new Map();
};

/**
 * Add the number to an internal data structure.. 
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function (number) {
    if (this.num_counts.has(number)) {
        this.num_counts.set(number, this.num_counts.get(number) + 1);
    } else {
        this.num_counts.set(number, 1);
    }
};

/**
 * Find if there exists any pair of numbers which sum is equal to the value. 
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function (value) {
    //遍历hash 表
    for (let [key, val] of this.num_counts) {
        let diffVal = value - key;
        if (diffVal != key) {
            if (this.num_counts.has(diffVal)) {
                return true;
            }
        } else {
            if (val > 1) {
                return true;
            }
        }
    }

    return false;
};

/**
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */