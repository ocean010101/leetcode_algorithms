/*
 * @lc app=leetcode.cn id=133 lang=javascript
 *
 * [133] 克隆图
 *
 * https://leetcode-cn.com/problems/clone-graph/description/
 *
 * algorithms
 * Medium (49.60%)
 * Likes:    108
 * Dislikes: 0
 * Total Accepted:    12.7K
 * Total Submissions: 25.4K
 * Testcase Example:  '[[2,4],[1,3],[2,4],[1,3]]\r'
 *
 * 给你无向 连通 图中一个节点的引用，请你返回该图的 深拷贝（克隆）。
 * 
 * 图中的每个节点都包含它的值 val（int） 和其邻居的列表（list[Node]）。
 * 
 * class Node {
 * ⁠   public int val;
 * ⁠   public List<Node> neighbors;
 * }
 * 
 * 
 * 
 * 测试用例格式：
 * 
 * 简单起见，每个节点的值都和它的索引相同。例如，第一个节点值为 1，第二个节点值为 2，以此类推。该图在测试用例中使用邻接列表表示。
 * 
 * 邻接列表是用于表示有限图的无序列表的集合。每个列表都描述了图中节点的邻居集。
 * 
 * 给定节点将始终是图中的第一个节点（值为 1）。你必须将 给定节点的拷贝 作为对克隆图的引用返回。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 输入：adjList = [[2,4],[1,3],[2,4],[1,3]]
 * 输出：[[2,4],[1,3],[2,4],[1,3]]
 * 解释：
 * 图中有 4 个节点。
 * 节点 1 的值是 1，它有两个邻居：节点 2 和 4 。
 * 节点 2 的值是 2，它有两个邻居：节点 1 和 3 。
 * 节点 3 的值是 3，它有两个邻居：节点 2 和 4 。
 * 节点 4 的值是 4，它有两个邻居：节点 1 和 3 。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 
 * 输入：adjList = [[]]
 * 输出：[[]]
 * 解释：输入包含一个空列表。该图仅仅只有一个值为 1 的节点，它没有任何邻居。
 * 
 * 
 * 示例 3：
 * 
 * 输入：adjList = []
 * 输出：[]
 * 解释：这个图是空的，它不含任何节点。
 * 
 * 
 * 示例 4：
 * 
 * 
 * 
 * 输入：adjList = [[2],[1]]
 * 输出：[[2],[1]]
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 节点数介于 1 到 100 之间。
 * 每个节点值都是唯一的。
 * 无向图是一个简单图，这意味着图中没有重复的边，也没有自环。
 * 由于图是无向的，如果节点 p 是节点 q 的邻居，那么节点 q 也必须是节点 p 的邻居。
 * 图是连通图，你可以从给定节点访问到所有节点。
 * 
 * 
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
//DFS --调用栈
let visited = new Map();//使用一个 HashMap 存储所有已被访问和复制的节点
var cloneGraph = function (node) {
    if (node == null) {
        return node;
    }
    if (visited.has(node)) {
        return visited.get(node);
    }
    //果当前访问的节点不在 HashMap 中，则创建它的克隆节点存储在 HashMap 中
    let cloneNode = new Node(node.val, []);
    visited.set(node, cloneNode);
    for (let neighbor of node.neighbors) {
        cloneNode.neighbors.push(cloneGraph(neighbor));
    }
    return cloneNode;
};

var cloneGraph = function (node) {
    if (node == null) {
        return node;
    }
    let visited = new Map(), queue = [node];
    visited.set(node, new Node(node.val, []));

    while (queue.length) {
        let n = queue.shift(); //从队列首部取出一个节点
        for (let neighbor of n.neighbors) { //遍历该节点的所有邻接点
            if (!visited.has(neighbor)) {
                visited.set(neighbor, new Node(neighbor.val, [])); //创建一个新的节点存储在 visited 中
                queue.push(neighbor);
            }
            //如果某个邻接点已被访问，则该邻接点一定在 visited 中，那么从 visited 获得该邻接点。
            //将克隆的邻接点添加到克隆图对应节点的邻接表中
            visited.get(n).neighbors.push(visited.get(neighbor));
        }
    }
    return visited.get(node);
};


// @lc code=end

