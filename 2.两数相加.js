/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 *
 * https://leetcode-cn.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (36.52%)
 * Likes:    3851
 * Dislikes: 0
 * Total Accepted:    315.5K
 * Total Submissions: 863.8K
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
 * 
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 * 
 * 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 * 
 * 示例：
 * 
 * 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 输出：7 -> 0 -> 8
 * 原因：342 + 465 = 807
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
var addTwoNumbers = function (l1, l2) {
    // if (l1 == null) {
    //     return l2;
    // }
    // if (l2 == null) {
    //     return l1;
    // }

    // let ele = {
    //     next: null
    // }, ret = ele;
    // let num2 = 0, num1 = 0;
    // while (l1 != null || l2 != null) {
    //     let val1 = l1 != null ? l1.val : 0,
    //         val2 = l2 != null ? l2.val : 0,
    //         sum = val1 + val2 + num2;

    //     num2 = sum >= 10 ? 1 : 0;
    //     num1 = sum % 10;
    //     ele.next = new ListNode(num1);
    //     ele = ele.next;

    //     if (l1 != null) {
    //         l1 = l1.next;
    //     }
    //     if (l2 != null) {
    //         l2 = l2.next;
    //     }
    // }

    // if (num2 != 0) {
    //     ele.next = new ListNode(num2);
    // }
    // return ret.next;


    let curr = {
        next: null
    }, ret = curr;
    let p1 = l1, p2 = l2, carry = 0;
    while (p1 != null || p2 != null) {
        let val1 = p1 != null ? p1.val : 0,
            va12 = p2 != null ? p2.val : 0,
            sum = val1 + va12 + carry;

        carry = sum >= 10 ? 1 : 0;
        curr.next = new ListNode(sum % 10);
        curr = curr.next;

        if (p1 != null) {
            p1 = p1.next;
        }
        if (p2 != null) {
            p2 = p2.next;
        }
    }

    if (carry > 0) {
        curr.next = new ListNode(carry);
    }
    return ret.next;
};
// @lc code=end

