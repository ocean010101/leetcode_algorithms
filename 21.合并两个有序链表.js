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
    if (l1 == null) {//不需要执行合并
        return l2;
    } else if (l2 == null) {//不需要执行合并
        return l1;
    } else if (l1.val < l2.val) {//l1的头节点更小，递归地处理l1头节点的 next 值以得到下一次合并结果
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else { //l2的头节点更小，递归地处理l2头节点的 next 值以得到下一次合并结果
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
}
//假设 l1 完全小于 l2，并逐个处理元素，在 l1 的必要位置插入 l2 元素。
var mergeTwoLists = function (l1, l2) {
    //哨兵节点
    let ele = {
        next: null
    };
    let ret = ele;
    while (l1 != null && l2 != null) {
        if (l1.val <= l2.val) { //如果 l1 处的值小于或等于 l2 处的值，那么我们将 l1 连接到前一个节点，并递增 l1
            ele.next = l1
            l1 = l1.next;
        } else {//那么我们将 l2 连接到前一个节点，并递增 l2
            ele.next = l2;
            l2 = l2.next;
        }
        //不管我们连接的是哪个列表，我们都会增加 ele，使它总是保持比我们的表头落后一步。
        ele = ele.next;
    }

    //如果其中一个列表是非空的，那么它包含的元素一定大于所有先前合并的元素。 这意味着我们可以直接将非空列表连接到已合并列表并返回它。
    ele.next = l1 != null ? l1 : l2;
    return ret.next;
};
// @lc code=end

