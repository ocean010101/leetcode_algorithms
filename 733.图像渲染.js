/*
 * @lc app=leetcode.cn id=733 lang=javascript
 *
 * [733] 图像渲染
 *
 * https://leetcode-cn.com/problems/flood-fill/description/
 *
 * algorithms
 * Easy (52.74%)
 * Likes:    58
 * Dislikes: 0
 * Total Accepted:    9.5K
 * Total Submissions: 18.1K
 * Testcase Example:  '[[1,1,1],[1,1,0],[1,0,1]]\n1\n1\n2'
 *
 * 有一幅以二维整数数组表示的图画，每一个整数表示该图画的像素值大小，数值在 0 到 65535 之间。
 * 
 * 给你一个坐标 (sr, sc) 表示图像渲染开始的像素值（行 ，列）和一个新的颜色值 newColor，让你重新上色这幅图像。
 * 
 * 
 * 为了完成上色工作，从初始坐标开始，记录初始坐标的上下左右四个方向上像素值与初始坐标相同的相连像素点，接着再记录这四个方向上符合条件的像素点与他们对应四个方向上像素值与初始坐标相同的相连像素点，……，重复该过程。将所有有记录的像素点的颜色值改为新的颜色值。
 * 
 * 最后返回经过上色渲染后的图像。
 * 
 * 示例 1:
 * 
 * 
 * 输入: 
 * image = [[1,1,1],[1,1,0],[1,0,1]]
 * sr = 1, sc = 1, newColor = 2
 * 输出: [[2,2,2],[2,2,0],[2,0,1]]
 * 解析: 
 * 在图像的正中间，(坐标(sr,sc)=(1,1)),
 * 在路径上所有符合条件的像素点的颜色都被更改成2。
 * 注意，右下角的像素没有更改为2，
 * 因为它不是在上下左右四个方向上与初始点相连的像素点。
 * 
 * 
 * 注意:
 * 
 * 
 * image 和 image[0] 的长度在范围 [1, 50] 内。
 * 给出的初始点将满足 0 <= sr < image.length 和 0 <= sc < image[0].length。
 * image[i][j] 和 newColor 表示的颜色值在范围 [0, 65535]内。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
/*
DFS:深度优先搜索
Accepted
277/277 cases passed (92 ms)
Your runtime beats 43.75 % of javascript submissions
Your memory usage beats 76.92 % of javascript submissions (36.2 MB)
*/
var floodFill1 = function (image, sr, sc, newColor) {
    let rowLen = image.length;
    if (rowLen == 0) {
        return image;
    }
    let color = image[sr][sc];
    if (color != newColor) {
        dfs(image, sr, sc, color, newColor);
    }
    return image;
};

var dfs = function (image, row, col, color, newColor) {
    let rowLen = image.length,
        colLen = image[0].length;
    if (image[row][col] == color) {
        image[row][col] = newColor;
        if (row >= 1) {//当前节点上方的节点[row-1][col]
            dfs(image, row - 1, col, color, newColor);
        }
        if (row + 1 < rowLen) {//当前节点下方的节点[row+1][col]
            dfs(image, row + 1, col, color, newColor);
        }
        if (col >= 1) { //当前节点左侧的节点[row][col-1]
            dfs(image, row, col - 1, color, newColor);
        }
        if (col + 1 < colLen) {   //当前节点右侧的节点[row][col+1]
            dfs(image, row, col + 1, color, newColor);
        }
    }
};

/*
BFS
Accepted
277/277 cases passed (84 ms)
Your runtime beats 78.75 % of javascript submissions
Your memory usage beats 84.62 % of javascript submissions (36.2 MB)
*/
var floodFill = function (image, sr, sc, newColor) {
    let rowLen = image.length;
    if (rowLen == 0) {
        return image;
    }
    let color = image[sr][sc];
    if (color == newColor) {
        return image;
    }

    image[sr][sc] = newColor;

    let colLen = image[0].length,
        queue = [{ 'row': sr, 'col': sc }];
    while (queue.length) {
        let ele = queue.shift(),
            row = ele.row,
            col = ele.col;
        //当前节点上方的节点[row-1][col]
        if (row - 1 >= 0 && image[row - 1][col] == color) {
            image[row - 1][col] = newColor;
            queue.push({ 'row': row - 1, 'col': col });
        }
        //当前节点下方的节点[row+1][col]
        if (row + 1 < rowLen && image[row + 1][col] == color) {
            image[row + 1][col] = newColor;
            queue.push({ 'row': row + 1, 'col': col });

        }
        //当前节点左侧的节点[row][col-1]
        if (col - 1 >= 0 && image[row][col - 1] == color) {
            image[row][col - 1] = newColor;
            queue.push({ 'row': row, 'col': col - 1 });
        }
        //当前节点右侧的节点[row][col+1]
        if (col + 1 < colLen && image[row][col + 1] == color) {
            image[row][col + 1] = newColor;
            queue.push({ 'row': row, 'col': col + 1 });
        }
    }

    return image;
};
// @lc code=end

