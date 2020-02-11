/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (59.40%)
 * Likes:    842
 * Dislikes: 0
 * Total Accepted:    178.1K
 * Total Submissions: 299.2K
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 
 * 示例：
 * 
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 * 
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    //1. 递归
    // if (l1 == null) {
    //     return l2;
    // } else if (l2 == null) {
    //     return l1;
    // } else if (l1.val < l2.val) {
    //     l1.next = mergeTwoLists(l1.next, l2);
    //     return l1;
    // } else {
    //     l2.next = mergeTwoLists(l1, l2.next);
    //     return l2;
    // }
    //迭代

    //哨兵节点
    let ele = {
        next: null
    };
    let ret = ele;
    while (l1 != null && l2 != null) {
        if (l1.val <= l2.val) {
            ele.next = l1
            l1 = l1.next;
        } else {
            ele.next = l2;
            l2 = l2.next;
        }
        ele = ele.next;
    }
    ele.next = l1 != null ? l1 : l2;
    return ret.next;
};
// @lc code=end

