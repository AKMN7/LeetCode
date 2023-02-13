function longestConsecutive(nums) {
	if (!nums.length) return 0;

	nums.sort((a, b) => a - b);

	return search(nums);
}

function search(nums) {
	let [maxScore, score] = [1, 1];

	for (let i = 1; i < nums.length; i++) {
		if (nums[i - 1] === nums[i]) continue;

		if (nums[i] === nums[i - 1] + 1) {
			score++;
			continue;
		}

		maxScore = Math.max(maxScore, score);
		score = 1;
	}

	return Math.max(maxScore, score);
}

console.log([100, 4, 200, 1, 3, 2]);
