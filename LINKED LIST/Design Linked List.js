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
        if (index < 0 || index > this.getLength()) return -1;

        let i = 0;
        let node = this.head;
        while (node) {
            if (i == index) return node.val;
            node = node.next;
        }
    }

    addAtHead() {

    }

    addAtTail() {

    }

    addAtIndex() {

    }

    deleteAtIndex() {

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
}