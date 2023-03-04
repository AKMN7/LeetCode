const generateParenthesis = (n) => dfs(n);

function dfs(n, combos = [], open = 0, close = 0, path = []) {
	const isBaseCase = path.length === n * 2;

	if (isBaseCase) {
		combos.push(path.join(""));
		return combos;
	}

	// Case of opening bracket
	if (open < n) backTraceOpen(n, combos, open, close, path);

	// Case of closing bracket
	if (close < open) backTrackClose(n, combos, open, close, path);

	return combos;
}

function backTraceOpen(n, combos, open, close, path) {
	path.push("(");
	dfs(n, combos, open + 1, close, path);
	path.pop();
	console.log("Poped Open");
}

function backTrackClose(n, combos, open, close, path) {
	path.push(")");
	dfs(n, combos, open, close + 1, path);
	path.pop();
	console.log("Poped Close");
}

console.log(generateParenthesis(2));
