/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 *
 * https://leetcode-cn.com/problems/valid-sudoku/description/
 *
 * algorithms
 * Medium (58.38%)
 * Likes:    269
 * Dislikes: 0
 * Total Accepted:    55.5K
 * Total Submissions: 95.1K
 * Testcase Example:  '[["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]'
 *
 * 判断一个 9x9 的数独是否有效。只需要根据以下规则，验证已经填入的数字是否有效即可。
 * 
 * 
 * 数字 1-9 在每一行只能出现一次。
 * 数字 1-9 在每一列只能出现一次。
 * 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。
 * 
 * 
 * 
 * 
 * 上图是一个部分填充的有效的数独。
 * 
 * 数独部分空格内已填入了数字，空白格用 '.' 表示。
 * 
 * 示例 1:
 * 
 * 输入:
 * [
 * ⁠ ["5","3",".",".","7",".",".",".","."],
 * ⁠ ["6",".",".","1","9","5",".",".","."],
 * ⁠ [".","9","8",".",".",".",".","6","."],
 * ⁠ ["8",".",".",".","6",".",".",".","3"],
 * ⁠ ["4",".",".","8",".","3",".",".","1"],
 * ⁠ ["7",".",".",".","2",".",".",".","6"],
 * ⁠ [".","6",".",".",".",".","2","8","."],
 * ⁠ [".",".",".","4","1","9",".",".","5"],
 * ⁠ [".",".",".",".","8",".",".","7","9"]
 * ]
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入:
 * [
 * ["8","3",".",".","7",".",".",".","."],
 * ["6",".",".","1","9","5",".",".","."],
 * [".","9","8",".",".",".",".","6","."],
 * ["8",".",".",".","6",".",".",".","3"],
 * ["4",".",".","8",".","3",".",".","1"],
 * ["7",".",".",".","2",".",".",".","6"],
 * [".","6",".",".",".",".","2","8","."],
 * [".",".",".","4","1","9",".",".","5"],
 * [".",".",".",".","8",".",".","7","9"]
 * ]
 * 输出: false
 * 解释: 除了第一行的第一个数字从 5 改为 8 以外，空格内其他数字均与 示例1 相同。
 * ⁠    但由于位于左上角的 3x3 宫内有两个 8 存在, 因此这个数独是无效的。
 * 
 * 说明:
 * 
 * 
 * 一个有效的数独（部分已被填充）不一定是可解的。
 * 只需要根据以上规则，验证已经填入的数字是否有效即可。
 * 给定数独序列只包含数字 1-9 和字符 '.' 。
 * 给定数独永远是 9x9 形式的。
 * 
 * 
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
/*
Accepted
504/504 cases passed (76 ms)
Your runtime beats 97.3 % of javascript submissions
Your memory usage beats 57.86 % of javascript submissions (38.1 MB)
*/
var isValidSudoku = function (board) {
    // 可以将行索引和列索引组合来标识此元素属于哪个`块`
    // init data
    let rows = new Map(),
        columns = new Map(),
        boxes = new Map();

    for (let i = 0; i < 9; i++) {
        rows[i] = new Map();
        columns[i] = new Map();
        boxes[i] = new Map();
    }

    // validate a board
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let num = board[i][j];
            if (num != '.') {
                let n = parseInt(num);
                let box_index = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                // console.log(`i=${i}, j=${j},box_index=${box_index}`);
                // keep the current cell value
                if (rows[i].has(n)) {
                    rows[i].set(n, rows[i].get(n) + 1);
                } else {
                    rows[i].set(n, 1);
                }
                if (columns[j].has(n)) {
                    columns[j].set(n, columns[j].get(n) + 1);
                } else {
                    columns[j].set(n, 1);
                }
                if (boxes[box_index].has(n)) {
                    boxes[box_index].set(n, boxes[box_index].get(n) + 1);
                } else {
                    boxes[box_index].set(n, 1);
                }

                // check if this value has been already seen before
                if (rows[i].get(n) > 1 || columns[j].get(n) > 1 ||
                    boxes[box_index].get(n) > 1) {
                    return false;
                }
            }
        }
    }

    return true;

};
// @lc code=end

