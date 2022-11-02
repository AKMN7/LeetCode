// Question Number 160

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */


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