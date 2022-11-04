//Question 24
function swapPairs(head) {
    if (!head || !head.next) return head;

    let nodeOne = head;
    let nodeTwo = head.next;
    let nodeThree = head.next.next;

    nodeTwo.next = nodeOne;
    nodeOne.next = swapPairs(nodeThree);
    return nodeTwo
}