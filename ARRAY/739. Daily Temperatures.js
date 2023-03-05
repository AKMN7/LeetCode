function dailyTemperatures(temperatures, hottest = 0) {
	const days = new Array(temperatures.length).fill(0);

	for (let day = temperatures.length - 1; day >= 0; day--) {
		const temperature = temperatures[day];

		if (temperature >= hottest) {
			hottest = temperature;
			continue;
		}

		let dayCount = 1;
		while (temperatures[day + dayCount] <= temperature) {
			dayCount += days[day + dayCount];
		}

		days[day] = dayCount;
	}

	return days;
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
console.log(dailyTemperatures([30, 40, 50, 60]));
console.log(dailyTemperatures([30, 60, 90]));
