function dailyTemperatures(temperatures) {
    let result = [];

    for (let i = 0; i < temperatures.length; i++) {
        let counter = 0;

        for (let j = i; j < temperatures.length; j++) {

            if (j == temperatures.length - 1) result.push(0);

            if (temperatures[i] < temperatures[j + 1] && j != temperatures.length - 1) {
                counter++;
                result.push(counter);
                break;
            }

            counter++;
        }

    }

    return result;
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
console.log(dailyTemperatures([30, 40, 50, 60]));
console.log(dailyTemperatures([30, 60, 90]));