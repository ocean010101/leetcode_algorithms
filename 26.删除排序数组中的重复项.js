/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 *
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/description/
 *
 * algorithms
 * Easy (48.30%)
 * Likes:    1324
 * Dislikes: 0
 * Total Accepted:    243.9K
 * Total Submissions: 503.4K
 * Testcase Example:  '[1,1,2]'
 *
 * 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
 * 
 * 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
 * 
 * 示例 1:
 * 
 * 给定数组 nums = [1,1,2], 
 * 
 * 函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。 
 * 
 * 你不需要考虑数组中超出新长度后面的元素。
 * 
 * 示例 2:
 * 
 * 给定 nums = [0,0,1,1,1,2,2,3,3,4],
 * 
 * 函数应该返回新的长度 5, 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4。
 * 
 * 你不需要考虑数组中超出新长度后面的元素。
 * 
 * 
 * 说明:
 * 
 * 为什么返回数值是整数，但输出的答案是数组呢?
 * 
 * 请注意，输入数组是以“引用”方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。
 * 
 * 你可以想象内部操作如下:
 * 
 * // nums 是以“引用”方式传递的。也就是说，不对实参做任何拷贝
 * int len = removeDuplicates(nums);
 * 
 * // 在函数里修改输入数组对于调用者是可见的。
 * // 根据你的函数返回的长度, 它会打印出数组中该长度范围内的所有元素。
 * for (int i = 0; i < len; i++) {
 * print(nums[i]);
 * }
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/*
Accepted
161/161 cases passed (108 ms)
Your runtime beats 32.03 % of javascript submissions
Your memory usage beats 44.15 % of javascript submissions (37.2 MB)
*/
var removeDuplicates1 = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        if (typeof (nums[i]) != 'undefined' && typeof (nums[i + 1]) != 'undefined') {
            if (nums[i + 1] === nums[i]) {
                nums.splice(i + 1, 1);
                i--;
            }
        } else {
            break;
        }
    }
    return nums.length;
};

/*
Accepted
161/161 cases passed (84 ms)
Your runtime beats 75.23 % of javascript submissions
Your memory usage beats 67.4 % of javascript submissions (36.8 MB)
*/

var removeDuplicates = function (nums) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] != nums[j + 1]) {
            nums[i] = nums[j];
            i++;
        }
    }
    return i;
};

/*
定义 nums[0...i] 为为非重复数列，遍历整个数列不断的维护这个定义
Accepted
161/161 cases passed (72 ms)
Your runtime beats 97.47 % of javascript submissions
Your memory usage beats 66.35 % of javascript submissions (36.9 MB)
*/
var removeDuplicates = function (nums) {
    let len = nums.length;
    if (len == 0 || len == 1) {
        return len;
    }
    // nums[0,i]为非重复数列
    let i = 0;
    for (let j = 1; j < len; j++) {
        if (nums[j] != nums[i]) {//eg: 比较第一个值和第二个值不相等
            if (i + 1 != j) { //指向同一个元素不需要赋值
                nums[i + 1] = nums[j];
            }
            i++;
        }
    }
    return i + 1;
};

// @lc code=end

