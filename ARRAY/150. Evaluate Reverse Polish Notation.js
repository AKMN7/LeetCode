const OPERATORS = {
	"+": (a, b) => a + b,
	"-": (a, b) => a - b,
	"*": (a, b) => a * b,
	"/": (a, b) => Math.trunc(a / b),
};

function performOperation(char, stack) {
	const [rightNum, leftNum] = [stack.pop(), stack.pop()];
	const operation = OPERATORS[char];

	return operation(leftNum, rightNum);
}

function evalRPN(tokens, stack = []) {
	for (const char of tokens) {
		if (char in OPERATORS) {
			const value = performOperation(char, stack);
			stack.push(value);
			continue;
		}

		stack.push(Number(char));
	}

	return stack.pop();
}

console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])); // 22
