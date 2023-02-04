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
