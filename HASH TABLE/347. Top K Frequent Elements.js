function topKFrequent(nums, k, map = new Map()) {
	for (let i = 0; i < nums.length; i++) {
		if (!map.has(nums[i])) map.set(nums[i], 0);
		map.set(nums[i], map.get(nums[i]) + 1);
	}

	console.log("map", map);

	return [...map.entries()]
		.sort((a, b) => b[1] - a[1])
		.slice(0, k)
		.map((el) => el[0]);
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
console.log(topKFrequent([-1, -1], 1));
