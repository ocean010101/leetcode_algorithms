/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 *
 * https://leetcode-cn.com/problems/reverse-linked-list/description/
 *
 * algorithms
 * Easy (66.75%)
 * Likes:    757
 * Dislikes: 0
 * Total Accepted:    151.9K
 * Total Submissions: 227.4K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * 反转一个单链表。
 * 
 * 示例:
 * 
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 * 
 * 进阶:
 * 你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
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
 * @return {ListNode}
 */
var reverseList = function (head) {
    //1. 迭代
    // let cur = head, prev = null;
    // while (cur) {
    //     let nextTmp = cur.next;//保存当前节点对下一个节点的引用
    //     cur.next = prev;// 当前节点的引用指向prev

    //     prev = cur;//prev指向当前节点
    //     cur = nextTmp;//跳到下一个节点
    //     [cur.next, prev, cur] = [prev, cur, cur.next];
    // }
    // return prev;
    //2. 递归
    if (head == null || head.next == null) return head;
    let ret = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return ret;
};
// @lc code=end

