//! In order to achieve a proper Binary Search, the given array must be sorted by ASC Order.
//! The Time Complexity of a Binary Search is -> O(logN)
const arr = [];
const target = 8;

for (let index = 0; index <= 1024; index++) {
	arr.push(index);
}

//! Recursive Approach
function recusiveBinarySearch(arr, target, start, end) {
	// Base Condition
	if (start > end) return false;

	// Get Middle
	let mid = Math.floor((start + end) / 2);

	// Found
	if (arr[mid] === target) return true;

	// Search Left Side
	if (arr[mid] > target) return recusiveBinarySearch(arr, target, start, mid - 1);

	// Search Right Side
	return recusiveBinarySearch(arr, target, mid + 1, end);
}

//! Iterative Approach
function iterativeBinarySearch(arr, target, start, end) {
	// Base Condition
	while (start <= end) {
		// Get Middle
		let mid = Math.floor((start + end) / 2);

		// Found
		if (arr[mid] === target) return true;
		// Search Left Side
		if (arr[mid] > target) end = mid - 1;
		// Search Right Side
		else start = mid + 1;
	}

	return false;
}

console.log(recusiveBinarySearch(arr, target, 0, arr.length - 1));
console.log(iterativeBinarySearch(arr, target, 0, arr.length - 1));
