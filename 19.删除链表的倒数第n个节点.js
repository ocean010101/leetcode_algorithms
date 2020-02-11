/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
 *
 * https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/description/
 *
 * algorithms
 * Medium (37.33%)
 * Likes:    678
 * Dislikes: 0
 * Total Accepted:    118.9K
 * Total Submissions: 317.8K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
 * 
 * 示例：
 * 
 * 给定一个链表: 1->2->3->4->5, 和 n = 2.
 * 
 * 当删除了倒数第二个节点后，链表变为 1->2->3->5.
 * 
 * 
 * 说明：
 * 
 * 给定的 n 保证是有效的。
 * 
 * 进阶：
 * 
 * 你能尝试使用一趟扫描实现吗？
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    if (head == null) {
        return null;
    }
    //链表长度为len， 删除第len-n+1个元素
    //获取链表长度
    // let len = 0, p = head;
    // while (p != null) {
    //     len++;
    //     p = p.next;
    // }
    // len -= n;

    // let ele = {
    //     next: head
    // };
    // p = ele; // 给链表添加一个伪装的头部

    // let i = 0;
    // while (p.next) {
    //     if (i == len) {
    //         p.next = p.next.next;
    //     } else {
    //         p = p.next;
    //     }
    //     i++;
    // }
    // return ele.next;


    let ele = {
        next: head
    };
    let first = ele, second = ele;
    for (let i = 1; i <= n + 1; i++) {
        first = first.next;
    }
    // Move first to the end, maintaining the gap
    while (first != null) {
        first = first.next;
        second = second.next;
    }
    second.next = second.next.next;
    return ele.next;


};
// @lc code=end

