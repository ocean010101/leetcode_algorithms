/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除排序数组中的重复项 II
 *
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array-ii/description/
 *
 * algorithms
 * Medium (54.46%)
 * Likes:    183
 * Dislikes: 0
 * Total Accepted:    33.3K
 * Total Submissions: 61K
 * Testcase Example:  '[1,1,1,2,2,3]'
 *
 * 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素最多出现两次，返回移除后数组的新长度。
 * 
 * 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
 * 
 * 示例 1:
 * 
 * 给定 nums = [1,1,1,2,2,3],
 * 
 * 函数应返回新长度 length = 5, 并且原数组的前五个元素被修改为 1, 1, 2, 2, 3 。
 * 
 * 你不需要考虑数组中超出新长度后面的元素。
 * 
 * 示例 2:
 * 
 * 给定 nums = [0,0,1,1,1,1,2,3,3],
 * 
 * 函数应返回新长度 length = 7, 并且原数组的前五个元素被修改为 0, 0, 1, 1, 2, 3, 3 。
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
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/*
思路： 使用repeatNum 标记重复一次的数据， 如果重复， 那么删除
Accepted
166/166 cases passed (72 ms)
Your runtime beats 93.49 % of javascript submissions
Your memory usage beats 71.72 % of javascript submissions (35.5 MB)
*/
var removeDuplicates1 = function (nums) {
    let len = nums.length;
    if (len <= 2) {
        return len;
    }
    let i = 0, repeatNum = Number.MIN_VALUE;
    for (let j = 1; j < len; j++) {
        if (nums[j] != nums[i]) {
            nums[i + 1] = nums[j];
            i++;
        } else {
            if (nums[j] == repeatNum) {
                continue;
            } else {
                nums[i + 1] = nums[j];
                i++;
                repeatNum = nums[j];
            }
        }
    }
    return i + 1;
};


/*
定义 nums[0...i] 满足每个元素最多出现两次，初始值 i=-1，遍历整个数列不断的维护这个定义
Accepted
166/166 cases passed (72 ms)
Your runtime beats 93.49 % of javascript submissions
Your memory usage beats 71.72 % of javascript submissions (35.5 MB)
*/
var removeDuplicates = function (nums) {
    let len = nums.length;
    if (len <= 2) {
        return len;
    }
    let i = 1, k = i - 1, j = i + 1;
    //nums[0...i]是符合要求的，
    while (j < len) {
        if (nums[j] != nums[i] ||
            (nums[j] == nums[i] && nums[j] != nums[k])) {
            k = i;
            nums[i + 1] = nums[j];
            i++;
        }

        j++;
    }
    return i + 1;
}


// @lc code=end

