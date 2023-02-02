// 3v    4s
// cnp   ncn
//       cnp
//       pc
//       cn

function reverseList(head) {
	if (head === null) return;

	let current = head;
	let prev = null;
	let next = null;

	while (current) {
		next = current.next;
		current.next = prev;
		prev = current;
		current = next;
	}

	return prev;
}

//!|| Input: head = [1,2,3,4,5]
//?|| Output: [5,4,3,2,1]
