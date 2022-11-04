function twoSum(numbers, target) {
    let record = {};
    for (let i = 0; i < numbers.length; i++) {
        let n = numbers[i];
        if (record[target - n] !== undefined) {
            return [record[target - n], i + 1]
        }
        record[n] = i + 1;
    }
    return [];
}

