function isPalindrome(head) {
    let slow = head;
    let fast = head;
    let prev, temp;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    prev = slow;
    slow = slow.next;
    prev.next = null;

    while (slow) {
        temp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = temp;
    }

    fast = head;
    slow = prev;

    while (slow) {
        if (fast.val !== slow.val) return false
        else {
            fast = fast.next;
            slow = slow.next;
        }
    }

    return true
}

//!|| Input: head = [1,4,6,5,6,4,1]
//?|| Output: [5,4,3,2,1]