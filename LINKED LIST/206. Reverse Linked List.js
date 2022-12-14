function reverseList(head) {
    if (head == null) return;

    let currentNode = head;
    let prevNode = null;
    let nextNode = null;

    while (currentNode) {
        nextNode = currentNode.next;
        currentNode.next = prevNode;
        prevNode = currentNode;
        currentNode = nextNode;
        nextNode = null;
    }

    head = prevNode;
    return head;
}


//!|| Input: head = [1,2,3,4,5]
//?|| Output: [5,4,3,2,1]