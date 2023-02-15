function isValid(s, stack = []) {
	const map = new Map(Object.entries({ "]": "[", "}": "{", ")": "(" }));

	for (const c of s) {
		if (!map.has(c)) {
			stack.push(c);
			continue;
		}

		if (stack[stack.length - 1] === map.get(c)) {
			stack.pop();
			continue;
		}

		return false;
	}

	return stack.length === 0;
}

console.log(isValid("()[]{}"));
console.log(isValid("(}"));
