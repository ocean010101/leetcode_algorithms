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
/*
递归
1->2->3->NULLs

reverseList start
head.val=1
let ret = reverseList(head.next);--satrt
    head(2)
    reverseList start
    head.val=2
 	let ret = reverseList(head.next);-satrt
 		head(3)
 		reverseList start
 		3.next 为null，出栈
 	let ret = reverseList(head.next);--end
	ret=3
	head.next.next =  head;//3.next=2
	head.next = null;/2.next = null
	return ret;//head == 2 出栈
let ret = reverseList(head.next); -- end
head.next.next = head;//2.next = 1
head.next = null;// 1.next = null
*/
var reverseList1 = function (head) {
    console.log('reverseList start');
    if (head == null || head.next == null) { // 没有节点或只有一个节点，无需反转， 直接返回
        return head;
    }
    console.log(`head.val=${head.val}`);
    let ret = reverseList(head.next);//找到链表尾节点
    // let ret = head.next; 
    console.log(`ret=${ret.val}`)
    head.next.next = head;
    head.next = null;
    return ret;
};

/*
迭代
定义一个新的变量prev 引用cur节点之前的节点
反转链表：
    当前节点的next 指向之前节点, cur.next = prev
    当前节点跳到当前节点的下一个节点
    prev需要跟随curr跳转， prev一直是cur的前一个节点
将当前节点的 next 指针改为指向前一个元素

在最后返回新的头引用
*/
/*
Accepted
27/27 cases passed (60 ms)
Your runtime beats 96.33 % of javascript submissions
Your memory usage beats 55.55 % of javascript submissions (35.2 MB)
*/
var reverseList = function (head) {
    let cur = head;
    let prev = null;
    while (cur) {
        let nextTmp = cur.next;//保存当前节点对下一个节点的引用
        cur.next = prev;// 当前节点的引用指向prev
        prev = cur;//prev指向当前节点
        cur = nextTmp;//跳到下一个节点
    }
    return prev;
};
// @lc code=end

