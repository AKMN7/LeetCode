function carFleet(target, position, speed) {
	const coordinates = position
		.map((_position, index) => [_position, speed[index]])
		.sort(([aPosition], [bPosition]) => bPosition - aPosition)
		.map(([_position, _speed]) => (target - _position) / _speed);

	let previous = 0;
	let fleets = 0;

	for (const coordinate of coordinates) {
		const isPreviousLess = previous < coordinate;
		if (!isPreviousLess) continue;

		previous = coordinate;
		fleets++;
	}

	return fleets;
}

console.log(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]));
console.log(carFleet(12, [3], [3]));
console.log(carFleet(12, [0, 2, 4], [4, 2, 1]));
