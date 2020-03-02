/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N皇后
 *
 * https://leetcode-cn.com/problems/n-queens/description/
 *
 * algorithms
 * Hard (67.92%)
 * Likes:    343
 * Dislikes: 0
 * Total Accepted:    27.8K
 * Total Submissions: 40.9K
 * Testcase Example:  '4'
 *
 * n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 * 
 * 
 * 
 * 上图为 8 皇后问题的一种解法。
 * 
 * 给定一个整数 n，返回所有不同的 n 皇后问题的解决方案。
 * 
 * 每一种解法包含一个明确的 n 皇后问题的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。
 * 
 * 示例:
 * 
 * 输入: 4
 * 输出: [
 * ⁠[".Q..",  // 解法 1
 * ⁠ "...Q",
 * ⁠ "Q...",
 * ⁠ "..Q."],
 * 
 * ⁠["..Q.",  // 解法 2
 * ⁠ "Q...",
 * ⁠ "...Q",
 * ⁠ ".Q.."]
 * ]
 * 解释: 4 皇后问题存在两个不同的解法。
 * 
 * 
 */

// @lc code=start
/*
皇后Q, 空格.
彼此之间不能相互攻击:即任意两个皇后都不能处于同一行、同一列或同一斜线上
在n*n的二维数组中找到n个皇后满足上述条件
如果两个皇后在同一行  那么rowIndex1 == rowIndex2 
如果两个皇后在同一列  那么colIndex1 == colIndex2 
如果两个皇后在同一斜线 那么
    1)rowIndex1 - colIndex1 == rowIndex2 - colIndex2
    2)rowIndex1 + colIndex1 == rowIndex2 + colIndex2

==> 每一行只能有一个皇后， 每一列只能有一个皇后

在二维数组中遍历选定第一个皇后位置， 
选定第一个皇后位置后
尝试在不满足上述位置的单元格中放一个新的皇后，按照上述判断方法，遍历完成整个二维表格， 
如果填写的皇后数不等于N 则这个方案失败，
回溯， 重新选定一个位置判断
--约束编程.
*/



// var placeQueue = function (rowIndex1, colIndex1, n, arr) {
//     if (rowIndex1 == n) {

//     }
//     //找到符合规则的位置尝试放置一个皇后
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             if (isValid(rowIndex1, colIndex1, i, j)) {
//                 arr[i][j] = 'Q';
//                 //放下一个位置
//                 if (placeQueue(i, j, n, arr) ) {
//                     return true;
//                 } else {
//                     //回溯
//                     arr[i][j] = '.';
//                 }
//             }
//         }
//     }
//     return false;
// }
//判断当前位置是否为符合规则的位置
// var isValid = function (rowIndex1, colIndex1, rowIndex2, colIndex2) {
//     //不满足以下几个条件的就是符合规则的位置
//     if ((rowIndex1 == rowIndex2 && colIndex1 == colIndex2) ||
//         rowIndex1 == rowIndex2 ||   //在同一行
//         colIndex1 == colIndex2 || //在同一列
//         //在对角线
//         (rowIndex1 + colIndex1) == (rowIndex2 + colIndex2) ||
//         Math.abs(rowIndex1 - colIndex1) == Math.abs(rowIndex2 - colIndex2)
//     ) {
//         return false;
//     }
//     return true
// }


/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    let ret = [];
    //
    /*
    选定第一个皇后位置：
    由于每一行只能有一个皇后， 每一列只能有一个皇后， 
    那么我们从第一行开始先放置一个皇后，
    当行数 == n 
    ==>放置完成
    */
    placeQueue(0, [], n, ret);
    return ret;
};
/*我们需要一个一维数组记录放置方案，数组长度为n；索引是行数据，值是列数据 
arr[2,0] ==> 表示， 第一行放置在列索引为2的位置， 第二行放在列索引为0的位置
示例：  n ==4
placeQueue(0, [], 4, [])
1) 初始arr ==[] ,ret == [] 
2) 放置第1行 row == 0
    row != n
    for 循环，遍历[0][0],[0][1].. [0][n-1] 检查当前要放置的位置与arr 中已经放置的皇后是否相互攻击
    由于arr 为空， 当前位置有效，那么把[0][0] 放入 arr 中==>a[0]
    第一行放置完成，递归调用placeQueue 放置第二行
    placeQueue(1, [0], 4, [])
    2)放置第2行， row = 1, arr == [0], ret == []
        row != n
        for 循环,遍历[1][0],[1][1].. [1][n-1] 检查当前要放置的位置与arr 中已经放置的皇后是否相互攻击
        arr ==>[0][0]
        [1][0] 与 [0][0] 同一列，[1][0]不是有效的放置位置
        [1][1] 与 [0][0] 对角线，[1][1]不是有效的放置位置
        [1][2] 与 [0][0] 不相互攻击，[1][2]是有效的放置位置，保存[1][2]到arr，
            ==>arr == [0,2]
        第二行放置完成，递归调用placeQueue 放置第三行
        placeQueue(2, [0，2], 4, []), 
        3)放置第3行， row = 2, arr == [0,2], ret == []
            row != n
            for 循环，遍历[2][0],[2][1].. [2][n-1] 检查当前要放置的位置与arr 中已经放置的皇后是否相互攻击
            [2][0] 与 [0][0] 同一列，[2][0]不是有效的放置位置
            [2][1] 与 [0][0] 不相互攻击，但是与[1][2]对角线，
                ==>[2][1]不是有效的放置位置
            [2][2] 与 [0][0]对角线，[2][2]不是有效的放置位置
            [2][3] 与 [0][0] 不相互攻击，但是与[1][2]对角线，
                ==>[2][3]不是有效的放置位置
            col++, 不满足col < 4 的条件， 跳出循环
        placeQueue(2, [0，2], 4, []), 执行完毕，出栈
        第三行放置失败，回溯，重新放置第二行
        [1][3] 与 [0][0] 不相互攻击，[1][3]是有效的放置位置，保存[1][3]到arr，
            ==>arr == [0,3]
        第二行放置完成，递归调用placeQueue 放置第三行
        placeQueue(2, [0，3], 4, []), 
            row != n
            for 循环，遍历[2][0],[2][1].. [2][n-1] 检查当前要放置的位置与arr 中已经放置的皇后是否相互攻击
            [2][0] 与 [0][0] 同一列，[2][0]不是有效的放置位置
            [2][1] 与 [0][0] 和[1][3]都不相互攻击，[2][1]是有效的放置位置
            第三行放置完毕，递归调用placeQueue 放置第四行
            placeQueue(3, [0，3，1], 4, []),
                row != n
                for 循环，遍历[3][0],[3][1].. [3][n-1] 检查当前要放置的位置与arr 中已经放置的皇后是否相互攻击
                [3][0] 与 [0][0] 同一列，[3][0]不是有效的放置位置
                [3][1] 与 [0][0] 不相互攻击，但是与[2][1]同一列，
                    ==>[3][1]不是有效的放置位置
                [3][2] 与 [0][0] 不相互攻击，但是与[2][1]对角线
                    ==>[3][2]不是有效的放置位置
                [3][3] 与 [0][0] 对角线，[3][3]不是有效的放置位置
                col++, 不满足col < 4 的条件， 跳出循环
            placeQueue(3, [0，3，1], 4, []),执行完毕，出栈
            第四行放置失败，回溯，重新放置第三行
            [2][2] 与[0][0] 对角线，[2][2]不是有效的放置位置
            [2][3] 与 [0][0] 不相互攻击，但是与[1][3]同一列
                ==>[2][3]不是有效的放置位置
            col++, 不满足col < 4 的条件， 跳出循环
        第三行放置失败，回溯，重新放置第二行
        col++, 不满足col < 4 的条件， 跳出循环
    第二行放置失败，回溯，重新放置第一行
    [0][1]由于arr 为空， 当前位置有效，那么把[0][1] 放入 arr 中==>a[1]
    第一行放置完成，递归调用placeQueue 放置第二行
    placeQueue(1, [1], 4, [])
    2)放置第2行， row = 1, arr == [1], ret == []
        row != n
        for 循环,遍历[1][0],[1][1].. [1][n-1] 检查当前要放置的位置与arr 中已经放置的皇后是否相互攻击
        arr ==>[0][1]
        [1][0] 与 [0][1] 对角线，[1][0]不是有效的放置位置
        [1][1] 与 [0][1] 同一列，[1][1]不是有效的放置位置
        [1][2] 与 [0][1] 对角线，[1][2]不是有效的放置位置
        [1][3] 与 [0][1] 不相互攻击，[1][3]是有效的放置位置
        第二行放置完成，递归调用placeQueue 放置第三行
        placeQueue(2, [1，3], 4, []), 
        3)放置第3行， row = 2, arr == [0,3], ret == []
            row != n
            for 循环，遍历[2][0],[2][1].. [2][n-1] 检查当前要放置的位置与arr 中已经放置的皇后是否相互攻击
            [2][0] 与 [0][1] 和 [1][3] 都不相互攻击，[2][0]是有效的放置位置
            第三行放置完毕，递归调用placeQueue 放置第四行
            placeQueue(3, [1，3,0 ], 4, []),
                row != n
                for 循环，遍历[3][0],[3][1].. [3][n-1] 检查当前要放置的位置与arr 中已经放置的皇后是否相互攻击
                [3][0] 与 [0][1] [1][3] 不相互攻击，但是与[2][0]同一列，
                    ==>[3][0]不是有效的放置位置

                [3][1] 与 [0][1] 同一列，[3][1]不是有效的放置位置
                [3][2] 与 [0][1] [1][3] [2][0]不相互攻击 ==>[3][2]是有效的放置位置
                第四行放置完成，递归调用placeQueue 
                placeQueue(4, [1，3, 0,2 ], 4, []),
                row == n
                    根据数组[1，3,0,2] 生成解决方案 放在ret 中
                placeQueue(4, [1，3, 0,2 ], 4, []), 执行完毕 arr=>[1，3, 0]
                [3][3] 不是有效的放置位置，
                col++, 不满足col < 4 的条件， 跳出循环   
            placeQueue(3, [1，3,0 ], 4, []), 执行完毕 arr=>[1,3]
            [2][1]不是有效的放置位置
            [2][2]不是有效的放置位置
            [2][3]不是有效的放置位置
             col++, 不满足col < 4 的条件， 跳出循环
        placeQueue(2, [1，3], 4, []),执行完毕 arr=>[1]
        col++, 不满足col < 4 的条件， 跳出循环
    placeQueue(1, [1], 4, []),执行完毕，arr=>[]第一行第一列的方案完毕
    [0][2] ...
    [0][3] ...
 */

/**
 * 通过递归函数的出栈进行回溯
 * @param {Number} row 
 * @param {Number[]} arr 
 * @param {Number} n 
 * @param {string[][]} ret 
 */
var placeQueue = function (row, arr = [], n, ret) {
    console.log(`placeQueue row=${row}, arr=${arr},ret=${ret}`)
    if (row === n) {
        // n -1 找完了
        // arr 就是满足条件的方案
        ret.push(arr.map((index) => {
            let newArr = new Array(n).fill('.');
            newArr[index] = 'Q';
            return newArr.join('');
        }));
    }
    //遍历每一列
    for (let col = 0; col < n; col++) {
        //查找放置方案的数组中的值是否满足放置条件
        console.log(`for row=${row},col=${col}`)
        let cantSet = arr.some((colIndex, rowIndex) => {
            console.log(`colIndex=${colIndex},rowIndex=${rowIndex}`)
            return colIndex == col ||
                (rowIndex + colIndex) === (row + col) ||
                (rowIndex - colIndex) === (row - col);
        })
        // console.log(`cantSet=${cantSet} ,arr=${arr}`);
        if (cantSet) { //如果当前位置不符合规则，则跳过
            continue;
        } else {
            //把当前位置col放置在arr中, 递归调用placeQueue放置下一行的皇后
            // console.log(`====`);
            placeQueue(row + 1, [...arr, col], n, ret)
        }
    }
}

// @lc code=end

