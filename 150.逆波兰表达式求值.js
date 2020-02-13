/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 *
 * https://leetcode-cn.com/problems/evaluate-reverse-polish-notation/description/
 *
 * algorithms
 * Medium (48.87%)
 * Likes:    98
 * Dislikes: 0
 * Total Accepted:    26.1K
 * Total Submissions: 53.3K
 * Testcase Example:  '["2","1","+","3","*"]'
 *
 * 根据逆波兰表示法，求表达式的值。
 * 
 * 有效的运算符包括 +, -, *, / 。每个运算对象可以是整数，也可以是另一个逆波兰表达式。
 * 
 * 说明：
 * 
 * 
 * 整数除法只保留整数部分。
 * 给定逆波兰表达式总是有效的。换句话说，表达式总会得出有效数值且不存在除数为 0 的情况。
 * 
 * 
 * 示例 1：
 * 
 * 输入: ["2", "1", "+", "3", "*"]
 * 输出: 9
 * 解释: ((2 + 1) * 3) = 9
 * 
 * 
 * 示例 2：
 * 
 * 输入: ["4", "13", "5", "/", "+"]
 * 输出: 6
 * 解释: (4 + (13 / 5)) = 6
 * 
 * 
 * 示例 3：
 * 
 * 输入: ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
 * 输出: 22
 * 解释: 
 * ⁠ ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
 * = ((10 * (6 / (12 * -11))) + 17) + 5
 * = ((10 * (6 / -132)) + 17) + 5
 * = ((10 * 0) + 17) + 5
 * = (0 + 17) + 5
 * = 17 + 5
 * = 22
 * 
 */

//新建一个表达式,如果当前字符为变量或者为数字，则压栈，
//如果是运算符，则将栈顶两个元素弹出作相应运算，
//结果再入栈，最后当表达式扫描完后，栈里的就是结果。
// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */

 /*
 Accepted
20/20 cases passed (68 ms)
Your runtime beats 89.63 % of javascript submissions
Your memory usage beats 77.42 % of javascript submissions (36.6 MB)
 */
var evalRPN = function (tokens) {
    let s = [];
    for (let i = 0; i < tokens.length; i++) {
        let item = tokens[i];
        if (item === '+') {
            s.push(s.pop() + s.pop());
        } else if (item === '-') {
            s.push(-s.pop() + s.pop());
        } else if (item === '*') {
            s.push(s.pop() * s.pop());
        } else if (item === '/') {
            let num1 = s.pop();
            s.push(Math.trunc(s.pop() / num1));
        } else {
            s.push(parseInt(item));
        }
    }
    return s.pop();
};
// @lc code=end

