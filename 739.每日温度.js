/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 *
 * https://leetcode-cn.com/problems/daily-temperatures/description/
 *
 * algorithms
 * Medium (57.88%)
 * Likes:    224
 * Dislikes: 0
 * Total Accepted:    28.3K
 * Total Submissions: 48.7K
 * Testcase Example:  '[73,74,75,71,69,72,76,73]'
 *
 * 根据每日 气温 列表，请重新生成一个列表，对应位置的输入是你需要再等待多久温度才会升高超过该日的天数。如果之后都不会升高，请在该位置用 0 来代替。
 * 
 * 例如，给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，你的输出应该是 [1, 1, 4,
 * 2, 1, 1, 0, 0]。
 * 
 * 提示：气温 列表长度的范围是 [1, 30000]。每个气温的值的均为华氏度，都是在 [30, 100] 范围内的整数。
 * 
 */

// @lc code=start
/**
 * @param {number[]} T
 * @return {number[]}
 */
/*
对于每一个元素找到它后面第一个比它大的数， 求出索引差
==> 我们需要一个数组s 记录当前元素需要比较的元素对应的索引
==> 我们需要一个数组记录结果res，从最后一个开始记录
从后往前找， 
对于最后一个元素来说， 后面没有比它更大的数了，所以结果中对应的最后一个元素为0
eg: T=[73,74,75,71,69,72,76,73], len = 8;
(1): T[7]=73,后面没值,其他元素需要与T[7]比较
    -->res[7]=0,s=[7]
(2): T[6]=76与后面的值T[7]比较，
    T[7]比T[6]小，所以后面的值大于T[6], 就一定大于T[7]了，s=[6]
    --> res[6]=0,
(3): T[5]=72与后面的值T[6]比较, 
    T[6] 比T[5]大，其他元素可能小于T[5]， 所以s=[6,5]
    --> res[5]=1,
(4): T[4]=69与后面的值T[5],T[6]比较, 
    T[5] 比T[4]大 , s=[6,5,4]
    --> res[4]=1
(5): T[3]=71与后面的值T[4],T[5],T[6]比较, 
    T[4]比T[3]小，s=[6,5] 
    T[5]比T[3]大，s=[6,5,3] 
    --> res[3]=2,
(6): T[2]=75与后面的值T[3],T[5],T[6]比较, 
    T[3]比T[2]小，s=[6,5] 
    T[5]比T[2]小，s=[6] 
    T[6]比T[2]大，s=[6,2] 
    --> res[2]=4
(7): T[1]=74与后面的值T[2],T[6]比较, 
    T[2]比T[1]大，s=[6,2,1] 
    --> res[1]=1
(7): T[0]=73与后面的值T[1],T[2],T[6]比较, 
    T[1]比T[0]大，s=[6,2,1,0] 
    --> res[0]=1
*/

/*
Accepted
37/37 cases passed (176 ms)
Your runtime beats 71.66 % of javascript submissions
Your memory usage beats 59.53 % of javascript submissions (42.5 MB)
*/
var dailyTemperatures = function (T) {
    let res = [], s = [];
    //从后向前遍历， s 记录索引
    for (let i = T.length - 1; i >= 0; --i) {
        while (s.length > 0 &&
            T[i] >= T[s[s.length - 1]]) { // T[s[s.length - 1]] 获取s中栈顶index 对应的数据
            s.pop();
        }
        // s[s.length - 1]: s末尾的值就是比当前元素大的第一个元素对应的索引
        res[i] = s.length == 0 ? 0 : s[s.length - 1] - i; //索引差值
        s.push(i);
    }
    return res;
};

// @lc code=end

