/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 *
 * https://leetcode-cn.com/problems/sudoku-solver/description/
 *
 * algorithms
 * Hard (59.62%)
 * Likes:    332
 * Dislikes: 0
 * Total Accepted:    20K
 * Total Submissions: 33.4K
 * Testcase Example:  '[["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]'
 *
 * 编写一个程序，通过已填充的空格来解决数独问题。
 * 
 * 一个数独的解法需遵循如下规则：
 * 
 * 
 * 数字 1-9 在每一行只能出现一次。
 * 数字 1-9 在每一列只能出现一次。
 * 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。
 * 
 * 
 * 空白格用 '.' 表示。
 * 
 * 
 * 
 * 一个数独。
 * 
 * 
 * 
 * 答案被标成红色。
 * 
 * Note:
 * 
 * 
 * 给定的数独序列只包含数字 1-9 和字符 '.' 。
 * 你可以假设给定的数独只有唯一解。
 * 给定数独永远是 9x9 形式的。
 * 
 * 
 */
/*
    在空格的位置'.'尝试添加1-9 的数字，
    判断这个数字是否满足上述条件，
        如果满足，跳到下一个空格位置进行，尝试添加1-9 的数字，
        如果不满足，回溯
*/
// @lc code=start
// //判断这个数字是否在当前行中已存在
// var usedInRow = function (arr, row, num) {
//     for (let col = 0; col < arr.length; col++) {
//         if (arr[row][col] == num) {
//             return true;
//         }
//     }
//     return false;
// }
// //判断这个数字是否在当前列中已存在
// var usedInCol = function (arr, col, num) {
//     for (let row = 0; row < arr.length; row++) {
//         if (arr[row][col] == num) {
//             return true;
//         }
//     }
//     return false;
// }
// //判断这个数字是否n在当前块中已经存在
// var usedInBox = function (arr, boxStartRow, boxStartCol, num) {
//     for (let row = 0; row < 3; row++) {
//         for (let col = 0; col < 3; col++) {
//             if (arr[row + boxStartRow][col + boxStartCol] === num) {
//                 return true;
//             }
//         }
//     }

//     return false;
// }
// 判断当前填入的数字是否符合条件
//Math.floor(row / n) * n + Math.floor(col / n)
var isValid = function (arr, row, col, num) {
    // return !usedInRow(arr, row, num) &&
    //     !usedInCol(arr, col, num) &&
    //     !usedInBox(arr, row - (row % 3), col - (col % 3), num);

    let i;
    for (i = 0; i < arr.length; i++) {
        if (arr[row][i] == num ||
            arr[i][col] == num) {
            return false;
        }
    }
    // let boxStartRow = row - (row % 3),
    //     boxStartCol = col - (col % 3);
    let boxStartRow = Math.floor(row / 3) * 3,
        boxStartCol = Math.floor(col / 3) * 3;
    for (i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (arr[i + boxStartRow][j + boxStartCol] === num) {
                return false;
            }
        }
    }

    return true;
}

/**
* @param {character[][]} board
* @return {void} Do not return anything, modify board in-place instead.
*/
var solveSudoku = function (board) {
    let rowLen = board.length,
        colLen = board[0].length;

    for (let i = 0; i < rowLen; i++) {
        for (let j = 0; j < colLen; j++) {
            if (board[i][j] == '.') {  //找到要填写的空格的行和列的索引
                //尝试用1～9 填写这个空格
                for (let num = 1; num <= 9; num++) {
                    if (isValid(board, i, j, num.toString())) { //找到合法的数字
                        board[i][j] = num.toString();
                        //放下一个
                        if (solveSudoku(board)) { //下一个可以放
                            return true;
                        } else {
                            //回溯
                            board[i][j] = '.';
                        }
                    }
                }
                return false;
            }
        }
    }
    return true;
};
// @lc code=end

