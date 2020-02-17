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
/*
递归
Accepted
31/31 cases passed (92 ms)
Your runtime beats 20.71 % of javascript submissions
Your memory usage beats 16.43 % of javascript submissions (34.5 MB)
*/
var fib = function (N) {
    if (N < 2) {
        return N;
    }
    return fib(N - 1) + fib(N - 2);
}

/*
Accepted
31/31 cases passed (68 ms)
Your runtime beats 53.41 % of javascript submissions
Your memory usage beats 58.13 % of javascript submissions (33.9 MB)
*/
let cache = {};
var fib1 = function (N) {
    if (cache[N]) {
        return cache[N]
    }

      let result;
      if (N < 2) {
        result = N;
      } else {
        result = fib(N-1) + fib(N-2);
      }
      cache[N] = result;
      return result;
}

//递推
var fib2 = function (N) {
    let cache = []; // 用来
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

