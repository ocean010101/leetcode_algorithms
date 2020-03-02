/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 *
 * https://leetcode-cn.com/problems/word-search/description/
 *
 * algorithms
 * Medium (40.63%)
 * Likes:    332
 * Dislikes: 0
 * Total Accepted:    40.2K
 * Total Submissions: 98.5K
 * Testcase Example:  '[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\n"ABCCED"'
 *
 * 给定一个二维网格和一个单词，找出该单词是否存在于网格中。
 * 
 * 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。
 * 
 * 示例:
 * 
 * board =
 * [
 * ⁠ ['A','B','C','E'],
 * ⁠ ['S','F','C','S'],
 * ⁠ ['A','D','E','E']
 * ]
 * 
 * 给定 word = "ABCCED", 返回 true.
 * 给定 word = "SEE", 返回 true.
 * 给定 word = "ABCB", 返回 false.
 * 
 */
/*
Accepted
87/87 cases passed (88 ms)
Your runtime beats 92.62 % of javascript submissions
Your memory usage beats 87.33 % of javascript submissions (38.2 MB)
*/
// @lc code=start
var dfs = function (arr, row, col, word, index) {
    // console.log(`row=${row}, col=${col}, index=${index}`);
    if (row < 0 ||
        row > arr.length - 1 ||
        col < 0 ||
        col > arr[0].length - 1) {
        return false;
    }
    const letter = arr[row][col];
    //如果字母不匹配
    if (letter !== word[index]) {
        return false;
    }
    //查找到word中所有字母
    if (index == word.length - 1) {
        return true;
    }

    //同一个单元格内的字母不允许被重复使用==> 把当前单元格标记为null
    arr[row][col] = null;
    let newIndex = index + 1;
    //查找当前节点的上下左右与目标的下一个索引比较
    // //当前节点的上节点[row - 1][col]
    // if (row - 1 >= 0 && arr[row - 1][col] != null && arr[row - 1][col] == word[newIndex]) {
    //     return dfs(arr, row - 1, col, word, newIndex);
    // }
    // //当前节点的下节点[row + 1][col]
    // if (row + 1 <= arr.length - 1 && arr[row + 1][col] != null && arr[row + 1][col] == word[newIndex]) {
    //     return dfs(arr, row + 1, col, word, newIndex);
    // }
    // //当前节点的左节点[row][col - 1]
    // if (col - 1 >= 0 && arr[row][col - 1] != null && arr[row][col - 1] == word[newIndex]) {
    //     return dfs(arr, row, col - 1, word, newIndex);
    // }
    // //当前节点的右节点[row][col + 1]
    // if (col + 1 <= arr[0].length - 1 && arr[row][col + 1] != null && arr[row][col + 1] == word[newIndex]) {
    //     return dfs(arr, row, col + 1, word, newIndex);
    // }

    const ret = dfs(arr, row - 1, col, word, newIndex) ||
        dfs(arr, row + 1, col, word, newIndex) ||
        dfs(arr, row, col - 1, word, newIndex) ||
        dfs(arr, row, col + 1, word, newIndex)
    //为了下次查找， 回溯
    arr[row][col] = letter;
    return ret;
}

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    if (word.length == 0) {
        return true;
    }

    let rowLen = board.length;
    if (rowLen == 0) {
        return false;
    }

    let colLen = board[0].length;
    for (let i = 0; i < rowLen; i++) {
        for (let j = 0; j < colLen; j++) {
            let ret = dfs(board, i, j, word, 0);
            if (ret) {
                return true;
            }
        }
    }

    return false;
};
// @lc code=end

