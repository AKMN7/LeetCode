function smallerNumbersThanCurrent(nums) {
	let hash = new Map();
	let sorted = nums.slice().sort((a, b) => a - b);
	sorted.forEach((number, idx) => (hash.has(number) ? null : hash.set(number, idx)));
	return nums.map((x) => hash.get(x));
}
