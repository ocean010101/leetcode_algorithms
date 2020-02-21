/*
 * @lc app=leetcode.cn id=454 lang=javascript
 *
 * [454] 四数相加 II
 *
 * https://leetcode-cn.com/problems/4sum-ii/description/
 *
 * algorithms
 * Medium (54.25%)
 * Likes:    113
 * Dislikes: 0
 * Total Accepted:    15.3K
 * Total Submissions: 28.2K
 * Testcase Example:  '[1,2]\n[-2,-1]\n[-1,2]\n[0,2]'
 *
 * 给定四个包含整数的数组列表 A , B , C , D ,计算有多少个元组 (i, j, k, l) ，使得 A[i] + B[j] + C[k] +
 * D[l] = 0。
 * 
 * 为了使问题简单化，所有的 A, B, C, D 具有相同的长度 N，且 0 ≤ N ≤ 500 。所有整数的范围在 -2^28 到 2^28 - 1
 * 之间，最终结果不会超过 2^31 - 1 。
 * 
 * 例如:
 * 
 * 
 * 输入:
 * A = [ 1, 2]
 * B = [-2,-1]
 * C = [-1, 2]
 * D = [ 0, 2]
 * 
 * 输出:
 * 2
 * 
 * 解释:
 * 两个元组如下:
 * 1. (0, 0, 0, 1) -> A[0] + B[0] + C[0] + D[1] = 1 + (-2) + (-1) + 2 = 0
 * 2. (1, 1, 0, 0) -> A[1] + B[1] + C[0] + D[0] = 2 + (-1) + (-1) + 0 = 0
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
/*
Accepted
48/48 cases passed (136 ms)
Your runtime beats 90.71 % of javascript submissions
Your memory usage beats 69.12 % of javascript submissions (50.7 MB)
*/
var fourSumCount = function (A, B, C, D) {
    let i, j,
        res = 0,
        len = A.length,
        abMap = new Map();
    for (i = 0; i < len; i++) {
        for (j = 0; j < len; j++) {
            let sumAB = A[i] + B[j];
            if (abMap.has(sumAB)) {
                abMap.set(sumAB, abMap.get(sumAB) + 1);
            } else {
                abMap.set(sumAB, 1);
            }
        }
    }
    for (i = 0; i < len; i++) {
        for (j = 0; j < len; j++) {
            let sumCD = -(C[i] + D[j]);
            if (abMap.has(sumCD)) {
                res += abMap.get(sumCD);
            }

        }
    }
    return res;
};
// @lc code=end

