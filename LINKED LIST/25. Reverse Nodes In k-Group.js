function reverseKGroup(head, k) {
    const root = new ListNode();
    root.next = head;

    let prev = root;
    let i = 0;
    while (i < k && head) {
        head = head.next;
        i += 1;
        if (i === k) {
            const [reversedHead, reversedTail] = reverse(prev.next, k);
            prev.next = reversedHead;
            reversedTail.next = head;
            prev = reversedTail;
            i = 0;
        }
    }

    return root.next;
}

function reverse(head, length) {
    const tail = head;
    let prev = null;
    while (length > 0) {
        const next = head.next;
        head.next = prev;
        prev = head;
        head = next;
        length -= 1;
    }
    return [prev, tail];
}