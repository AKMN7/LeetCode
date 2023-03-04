function generateParenthesis(n) {
	let res = [];
	let stack = [];

	function backTrack(openN, closeN) {
		if (openN == closeN && closeN == n) {
			res.push(stack.join(""));
			return;
		}

		if (openN < n) {
			stack.push("(");
			backTrack(openN + 1, closeN);
			stack.pop();
		}

		if (closeN < openN) {
			stack.push(")");
			backTrack(openN, closeN + 1);
			stack.pop();
		}
	}

	backTrack(0, 0);

	return res;
}

console.log(generateParenthesis(2));
console.log(generateParenthesis(3));
