class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkNodeList {
    constructor() {
        this.length = 0;//元素数量
        this.head = null; //第一个元素的引用
    }
    //循环迭代链表直到目标位置
    getElementAt(index) {
        if (index >= 0 && index <= this.length) { // {1}
            let node = this.head; // {2}
            for (let i = 0; i < index && node != null; i++) { // {3}
                node = node.next;
            }
            return node; // {4}
        }
        return undefined; // {5}
    }
    //indexOf(element)：返回元素在链表中的索引。如果链表中没有该元素则返回-1。
    indexOf(element) {
        let cur = this.head;
        for (let i = 0; i < this.length && cur != null; i++) { // {2}
            if (element == cur.element) { // {3}
                return i; // {4}
            }
            cur = cur.next; // {5}
        }
        return -1; // {6}

    }
    //1.向链表尾部添加元素
    //两种场景： 链表为空，添加的是第一个元素；链表不为空，向其追加元素
    append(element) {
        let node = new Node(element);
        let cur;
        console.log("append this.head=", this.head);
        if (this.head == null) {//1. 链表为空，添加的是第一个元素
            this.head = node;
        } else {//2.链表不为空，向其追加元素
            cur = this.head; //一个指向链表中current 项的变量
            while (cur.next != null) { //获得最后一项
                cur = cur.next;
            }
            // 将其next 赋为新元素，建立链接
            cur.next = node;
        }
        this.length += 1;
    }
    //2.从链表中移除元素
    //2-1.removeAt(index) 从特定位置上移除元素
    //(1)移除第一个元素, (2)移除第一个元素之外的其他元素
    removeAt(index) {
        if (index >= 0 && index < this.length) { //检查索引有效性
            let cur = this.head; //cur: 总是为对所循环列表的当前元素的引用
            if (index === 0) {
                //使head 指向链表的第二个元素
                // this.head = this.head.next;
                this.head = cur.next;
            } else {
                //获取要删除节点的前一个节点。前一个节点的next使当前节点的引用。
                let prev = this.getElementAt(index - 1);
                cur = prev.next;
                prev.next = cur.next;
                ////迭代到目标位置
                // let prev, i = 0;
                // while (i < index) {
                //     prev = cur;//prev 对当前元素的前一个元素的引用
                //     cur = cur.next;
                //     i++;
                // }
                // //现在cur持有我们想从链表中移除的节点
                // //将prev与cur的下一项链接起来：跳过current，从而移除它
                // //让prev的next 指向cur.next 指向的节点。
                // prev.next = cur.next;
            }
            this.length--; // {9}
            return cur.element;
        }
        return undefined;
    }

    //2-2.remove(element) 根据元素的值移除元素

    //在任意位置插入元素
    //(1)在链表的起点添加一个元素; (2)在链表中间或尾部添加一个元素
    insert(element, index) {
        if (index >= 0 && index < this.length) {
            const node = new Node(element);
            let cur;
            if (index === 0) {//(1)在链表的起点添加一个元素
                cur = this.head; // 保存链表的第一个元素
                node.next = cur;// 新节点的next指向第一个元素
                this.head = node;//head 指向新节点
            } else {
                //1)获取期望位置的前一个元素prev，保存prev的next指向的元素到current中
                const prev = this.getElementAt(index - 1);
                cur = prev.next;
                //2)让node的next指向cur
                node.next = cur;
                //(3)让prev的next指向新元素node
                prev.next = node;
            }
            this.length++;
            return true;
        }
        return false;
    }

    remove(element) {
        //获取要移除节点的位置
        const index = this.indexOf(element);
        return this.removeAt(index);// 移除指定位置的节点
    }
    print() {
        let ret = [], cur = this.head;
        while (cur) {
            ret.push(cur.element);
            cur = cur.next;
        }
        console.log('1111111', ret);

        console.log(ret.join("==>"));
        return ret.join("==>");
    }


}

let linkNode = new LinkNodeList();
linkNode.append('111');
linkNode.append('222');
linkNode.append('333');
linkNode.print();
linkNode.removeAt(1);
linkNode.print();

