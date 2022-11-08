class ListNode {
    constructor(val, next) {
        this.val = val !== undefined ? val : 0;
        this.next = next !== undefined ? next : null;
    }
}

class MyLinkedList {
    constructor() {
        this.head = null
    }

    get(index) {
        if (index < 0 || index >= this.getLength()) return -1;

        let i = 0;
        let node = this.head;
        while (node) {
            if (i == index) return node.val;
            node = node.next;
            i++;
        }
    }

    addAtHead(val) {
        let newNode = new ListNode(val, this.head);
        this.head = newNode;
    }

    addAtTail(val) {

        if (this.head == null) {
            this.addAtHead(val);
            return
        }

        let node = this.head;
        while (node) {
            if (node.next == null) {
                node.next = new ListNode(val);
                break;
            }
            node = node.next
        }
    }

    addAtIndex(index, val) {
        if (index == 0) {
            this.addAtHead(val);
            return;
        }

        if (index == this.getLength()) {
            this.addAtTail(val);
            return
        }

        if (index > this.getLength()) return;

        let node = this.head;
        let prevNode = node;

        let i = 0;
        while (node) {
            if (i == index) {
                let temp = node;
                prevNode.next = new ListNode(val, temp);
                break;
            }

            prevNode = node;
            node = node.next;
            i++;
        }
    }

    deleteAtIndex(index) {
        if (index < 0 || index >= this.getLength()) return;
        if (index == 0) {
            this.head = this.head.next;
            return;
        }

        let node = this.head;
        let i = 0;
        while (node) {
            if (i == index - 1) {
                node.next = node.next.next
                break
            }
            node = node.next;
            i++;
        }
    }

    getLength() {
        let len = 0;
        let node = this.head;

        while (node) {
            len++;
            node = node.next
        }

        return len;
    }

    reverse() {
        if (!this.head) return;

        let curr = this.head;
        let next = null;
        let prev = null;

        while (curr) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        this.head = prev;
    }

    printList() {
        let res = ""
        let node = this.head;
        while (node) {
            res = res + node.val + "->";
            node = node.next
        }
        return res;
    }
}


let myLinkedtList = new MyLinkedList();
myLinkedtList.addAtHead(1);
myLinkedtList.addAtTail(3);
myLinkedtList.addAtIndex(1, 2);
console.log(myLinkedtList.printList());
console.log(myLinkedtList.get(1));
myLinkedtList.deleteAtIndex(1);
console.log(myLinkedtList.printList());
console.log(myLinkedtList.get(1));
myLinkedtList.reverse();
console.log(myLinkedtList.printList());
console.log(myLinkedtList.get(1));