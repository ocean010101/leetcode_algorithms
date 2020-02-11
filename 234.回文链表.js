/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 *
 * https://leetcode-cn.com/problems/palindrome-linked-list/description/
 *
 * algorithms
 * Easy (40.09%)
 * Likes:    388
 * Dislikes: 0
 * Total Accepted:    60.8K
 * Total Submissions: 151.1K
 * Testcase Example:  '[1,2]'
 *
 * 请判断一个链表是否为回文链表。
 * 
 * 示例 1:
 * 
 * 输入: 1->2
 * 输出: false
 * 
 * 示例 2:
 * 
 * 输入: 1->2->2->1
 * 输出: true
 * 
 * 
 * 进阶：
 * 你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let cur = head, tmp = [];
    while (cur) {
        tmp.push(cur.val);
        cur = cur.next;
    }
    let len = tmp.length;

    for (let i = 0; i < len; i++) {
        let index = len - 1 - i;
        if (index >= i) {
            if (tmp[i] != tmp[index]) {
                return false;
            }
        } else {
            break;
        }
    }

    return true;
};
// @lc code=end

