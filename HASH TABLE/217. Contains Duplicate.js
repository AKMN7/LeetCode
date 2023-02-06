//! Given an integer array nums, return true if any value appears at least twice in the array,
//! and return false if every element is distinct.

function containsDuplicate(nums) {
	let obj = {};
	for (let i = 0; i < nums.length; i++) {
		if (obj[nums[i]]) return true;
		obj[nums[i]] = true;
	}
	return false;
}
