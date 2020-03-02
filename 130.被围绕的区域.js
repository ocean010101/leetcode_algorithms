/*
 * @lc app=leetcode.cn id=130 lang=javascript
 *
 * [130] 被围绕的区域
 *
 * https://leetcode-cn.com/problems/surrounded-regions/description/
 *
 * algorithms
 * Medium (39.21%)
 * Likes:    160
 * Dislikes: 0
 * Total Accepted:    22.7K
 * Total Submissions: 57.8K
 * Testcase Example:  '[["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]'
 *
 * 给定一个二维的矩阵，包含 'X' 和 'O'（字母 O）。
 * 
 * 找到所有被 'X' 围绕的区域，并将这些区域里所有的 'O' 用 'X' 填充。
 * 
 * 示例:
 * 
 * X X X X
 * X O O X
 * X X O X
 * X O X X
 * 
 * 
 * 运行你的函数后，矩阵变为：
 * 
 * X X X X
 * X X X X
 * X X X X
 * X O X X
 * 
 * 
 * 解释:
 * 
 * 被围绕的区间不会存在于边界上，换句话说，任何边界上的 'O' 都不会被填充为 'X'。 任何不在边界上，或不与边界上的 'O' 相连的 'O'
 * 最终都会被填充为 'X'。如果两个元素在水平或垂直方向相邻，则称它们是“相连”的。
 * 
 */

// @lc code=start
/*
Accepted
59/59 cases passed (104 ms)
Your runtime beats 63.08 % of javascript submissions
Your memory usage beats 59.09 % of javascript submissions (42.6 MB)
*/
var dfs = function (board, row, col) {

    let rowLen = board.length,
        colLen = board[0].length;

    board[row][col] = 'A';
    //把当前岛屿周围的岛屿都设置为'0';
    //当前节点上方的节点[row-1][col]
    if (row - 1 >= 0 && board[row - 1][col] == 'O') {
        dfs(board, row - 1, col);
    }
    //当前节点下方的节点[row+1][col]
    if (row + 1 < rowLen && board[row + 1][col] == 'O') {
        dfs(board, row + 1, col);
    }
    //当前节点左侧的节点[row][col-1]
    if (col - 1 >= 0 && board[row][col - 1] == 'O') {
        dfs(board, row, col - 1);
    }
    //当前节点右侧的节点[row][col+1]
    if (col + 1 < colLen && board[row][col + 1] == 'O') {
        dfs(board, row, col + 1);
    }
};

/*
 被围绕的区间不会存在于边界上:
 那么在边界上的O 或者与边界；联通的O 都不会被填充
 1) 找到边界上的O ， 以这个O为起始点，进行DFS查找， 把这些O 替换为 其他符号 A

 2) 遍历二维数组，把O 替换为X, 把A 替换为O
*/
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve1 = function (board) {
    let rowLen = board.length;
    if (rowLen == 0) {
        return;
    }
    let i,
        j,
        colLen = board[0].length;

    for (i = 0; i < rowLen; i++) {
        for (j = 0; j < colLen; j++) {
            //边界上的O
            if (board[i][j] == 'O' &&
                (i == 0 || j == 0 || i == rowLen - 1 || j == colLen - 1)) {
                dfs(board, i, j);
            }
        }
    }
    for (i = 0; i < rowLen; i++) {
        for (j = 0; j < colLen; j++) {
            if (board[i][j] == 'O') {
                board[i][j] = 'X';
            } else if (board[i][j] == 'A') {
                board[i][j] = 'O';
            }
        }
    }
};

//BFS
/*
Accepted
59/59 cases passed (100 ms)
Your runtime beats 76.92 % of javascript submissions
Your memory usage beats 60.6 % of javascript submissions (42.4 MB)
*/
var solve = function (board) {
    let rowLen = board.length;
    if (rowLen == 0) {
        return;
    }
    let i,
        j,
        colLen = board[0].length;

    for (i = 0; i < rowLen; i++) {
        for (j = 0; j < colLen; j++) {
            //边界上的O
            if (board[i][j] == 'O' &&
                (i == 0 || j == 0 || i == rowLen - 1 || j == colLen - 1)) {
                board[i][j] = 'A';
                let queue = [{ 'row': i, 'col': j }]; // 用于存储
                while (queue.length) {
                    let ele = queue.shift(),
                        row = ele.row,
                        col = ele.col;
                    //当前节点上方的节点[row-1][col]
                    if (row - 1 >= 0 && board[row - 1][col] == 'O') {
                        queue.push({ 'row': row - 1, 'col': col });
                        board[row - 1][col] = 'A';
                    }
                    //当前节点下方的节点[row+1][col]
                    if (row + 1 < rowLen && board[row + 1][col] == 'O') {
                        queue.push({ 'row': row + 1, 'col': col });
                        board[row + 1][col] = 'A';
                    }
                    //当前节点左侧的节点[row][col-1]
                    if (col - 1 >= 0 && board[row][col - 1] == 'O') {
                        queue.push({ 'row': row, 'col': col - 1 });
                        board[row][col - 1] = 'A';
                    }
                    //当前节点右侧的节点[row][col+1]
                    if (col + 1 < colLen && board[row][col + 1] == 'O') {
                        queue.push({ 'row': row, 'col': col + 1 });
                        board[row][col + 1] = 'A';
                    }
                }
            }
        }
    }
    for (i = 0; i < rowLen; i++) {
        for (j = 0; j < colLen; j++) {
            if (board[i][j] == 'O') {
                board[i][j] = 'X';
            } else if (board[i][j] == 'A') {
                board[i][j] = 'O';
            }
        }
    }
};

// @lc code=end

