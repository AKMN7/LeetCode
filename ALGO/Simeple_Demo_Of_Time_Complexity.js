//! Example of Time Complexity Importance
// The Question is simple, determine if a given number (n) is prime or not.
// The code is written in a way to achieve the worst case scenario of each algorthim.

function notOptimal(n) {
	let isPrime = true;
	for (let i = 2; i < n - 1; i++) {
		if (n % i == 0) isPrime = false;
	}
	return isPrime;
}

function Optimal(n) {
	let isPrime = true;
	for (let i = 2; i < Math.floor(Math.sqrt(n)) + 1; i++) {
		if (n % i == 0) isPrime = false;
	}
	return isPrime;
}

const number = 100000009;

console.time("Total Execution Time (Not Optimal)");
console.log(notOptimal(number)); // ~320ms
console.timeEnd("Total Execution Time (Not Optimal)");

console.time("Total Execution Time (Optimal)");
console.log(Optimal(number)); // ~2ms
console.timeEnd("Total Execution Time (Optimal)");

//------------------------------------------------------------------------------
//! Example of Calcualting Time Complexity

//? Time Complexity -> O(1)
function exampleOne() {
	let a;
	a = 5;
	return a;
}

//? Time Complexity -> O(n)
function exampleTwo(n) {
	for (let i = 0; i < n; i++) {
		// Do Something
	}
}

//? Time Complexity -> O(n^2)
function exampleThree(n) {
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			// Do Something
		}
	}
}

//? Time Complexity -> O(n * m)
function exampleFour(n, m) {
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++) {
			// Do Something
		}
	}
}

//? Time Complexity -> O(n^2) based on the insignificant droping rule.
function exampleFive() {
	exampleOne(); // O(1)
	exampleTwo(); // O(n)
	exampleThree(); // O(n^2)
}
