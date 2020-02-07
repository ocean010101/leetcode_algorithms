/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {
    // 1.递归
    // if (N == 1 || N == 0) {
    //     return N;
    // }
    // return fib(N - 1) + fib(N - 2);
    //2. 递推 O(n)
    let cache = [];
    for (let i = 0; i <= N; i++) {
        if (i == 1 || i == 0) {
            cache[i] = i;
        } else {
            cache[i] = cache[i - 2] + cache[i - 1];
        }
    }
    return cache[N];
};
// @lc code=end

