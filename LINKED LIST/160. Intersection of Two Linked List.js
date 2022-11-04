function getIntersectionNode(headA, headB) {
    let resultNode = null;
    while (headA) {
        let tempHeadB = headB;
        while (tempHeadB) {
            if (tempHeadB.val == headA.val) resultNode = headA.val;
            tempHeadB = tempHeadB.next;
        }

        headA = headA.next
    }
    return resultNode;
}