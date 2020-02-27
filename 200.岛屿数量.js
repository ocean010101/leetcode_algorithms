/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 *
 * https://leetcode-cn.com/problems/number-of-islands/description/
 *
 * algorithms
 * Medium (46.80%)
 * Likes:    359
 * Dislikes: 0
 * Total Accepted:    54.1K
 * Total Submissions: 115.4K
 * Testcase Example:  '[["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]'
 *
 * 给定一个由 '1'（陆地）和
 * '0'（水）组成的的二维网格，计算岛屿的数量。一个岛被水包围，并且它是通过水平方向或垂直方向上相邻的陆地连接而成的。你可以假设网格的四个边均被水包围。
 * 
 * 示例 1:
 * 
 * 输入:
 * 11110
 * 11010
 * 11000
 * 00000
 * 
 * 输出: 1
 * 
 * 
 * 示例 2:
 * 
 * 输入:
 * 11000
 * 11000
 * 00100
 * 00011
 * 
 * 输出: 3
 * 
 * 
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */

/*
DFS:深度优先查找
将二维网格看成一个无向图，竖直或水平相邻的 1 之间有边。
线性扫描整个二维网格，
    如果一个结点包含 1，则以其为根结点启动深度优先搜索。
    在深度优先搜索过程中，每个访问过的结点被标记为 0。-后面遍历二维网格 时就不会重复计算岛屿的数量
    计数启动深度优先搜索的根结点的数量，即为岛屿的数量。

Accepted
47/47 cases passed (72 ms)
Your runtime beats 90.41 % of javascript submissions
Your memory usage beats 91.03 % of javascript submissions (37.4 MB)
*/
var dfs = function (grid, row, col) {
    let rowLen = grid.length,
        colLen = grid[0].length;

    grid[row][col] = '0';
    //把当前岛屿周围的岛屿都设置为'0';
    //当前节点上方的节点[row-1][col]
    if (row - 1 >= 0 && grid[row - 1][col] == '1') {
        dfs(grid, row - 1, col);
    }
    //当前节点下方的节点[row+1][col]
    if (row + 1 < rowLen && grid[row + 1][col] == '1') {
        dfs(grid, row + 1, col);
    }
    //当前节点左侧的节点[row][col-1]
    if (col - 1 >= 0 && grid[row][col - 1] == '1') {
        dfs(grid, row, col - 1);
    }
    //当前节点右侧的节点[row][col+1]
    if (col + 1 < colLen && grid[row][col + 1] == '1') {
        dfs(grid, row, col + 1);
    }
};
var numIslands1 = function (grid) {
    let rowLen = grid.length;
    if (rowLen == 0) {
        return 0;
    }
    let colLen = grid[0].length;
    let res = 0;

    for (let row = 0; row < rowLen; row++) {
        for (let col = 0; col < colLen; col++) {
            if (grid[row][col] == '1') {
                res++;
                dfs(grid, row, col);
            }
        }
    }
    return res;
};


// 广度优先搜索 
/* BFS
线性扫描整个二维网格，
如果一个结点包含 1，则以其为根结点启动广度优先搜索。
将其放入队列中，并将值设为 0 以标记访问过该结点。
迭代地搜索队列中的每个结点，直到队列为空。
*/
var numIslands = function (grid) {
    let rowLen = grid.length;     // 行数
    if (grid == null || rowLen == 0) {
        return 0;
    }

    let colLen = grid[0].length, // 列数
        res = 0;
    for (let r = 0; r < rowLen; r++) {
        for (let c = 0; c < colLen; c++) {
            if (grid[r][c] == '1') {
                res++;
                grid[r][c] = '0';
                //把当前岛屿周围的岛屿都设置为'0';
                let queue = []; // 用于存储
                queue.push({ 'row': r, 'col': c });
                while (queue.length) {
                    let ele = queue.shift(),
                        row = ele.row,
                        col = ele.col;
                    //当前节点上方的节点[row-1][col]
                    if (row - 1 >= 0 && grid[row - 1][col] == '1') {
                        queue.push({ 'row': row - 1, 'col': col });
                        grid[row - 1][col] = '0';
                    }
                    //当前节点下方的节点[row+1][col]
                    if (row + 1 < rowLen && grid[row + 1][col] == '1') {
                        queue.push({ 'row': row + 1, 'col': col });
                        grid[row + 1][col] = '0';
                    }
                    //当前节点左侧的节点[row][col-1]
                    if (col - 1 >= 0 && grid[row][col - 1] == '1') {
                        queue.push({ 'row': row, 'col': col - 1 });
                        grid[row][col - 1] = '0';
                    }
                    //当前节点右侧的节点[row][col+1]
                    if (col + 1 < colLen && grid[row][col + 1] == '1') {
                        queue.push({ 'row': row, 'col': col + 1 });
                        grid[row][col + 1] = '0';
                    }
                }

            }
        }
    }
    return res;
};

// @lc code=end

