//! The Merge Sort Algorthim has a time complexity of O(nlogN).
//! For more understaind rewatch -> https://www.youtube.com/watch?v=Mo4vesaut8g&list=PLwXGkWDRxWcSa3ztC_eMMj9Q3l-uQD2wP
//! Start -> 1:02:55
//! End -> 1:28:10

function mergeSort(arr) {
	// Already Sorted
	if (arr.length < 2) return arr;

	// Get the middle index, left array, and right array.
	const mid = Math.floor(arr.length / 2);
	const leftArr = arr.slice(0, mid);
	const rightArr = arr.slice(mid, arr.length);

	// Initialize Recursion
	return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
	// Define Result, leftIndex, and rightIndex
	let result = [],
		leftIndex = 0,
		rightIndex = 0;

	// Loop Unistil one of the index reachs its corresponding array length
	while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
		if (leftArr[leftIndex] < rightArr[rightIndex]) {
			result.push(leftArr[leftIndex]);
			leftIndex++;
		} else {
			result.push(rightArr[rightIndex]);
			rightIndex++;
		}
	}

	// return concated array that combine three arrays to make sure no element is left beind
	return result.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
}

const array = [6, 1, 23, 3, 0];
console.log("MergeSort", mergeSort(array));
