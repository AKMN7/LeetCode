// Question 2221

function triangularSum(nums) {
    if (nums.length == 1) return nums[0];

    let result = [];
    result[0] = nums
    let previous = result[0];

    for (let i = 1; i < nums.length; i++) {
        result[i] = [];
        for (let j = 0; j < previous.length - 1; j++) {
            result[i].push((previous[j] + previous[j + 1]) % 10);
        }
        previous = result[i];
    }

    return result[result.length - 1][0];
}


console.log(triangularSum([1, 2, 3, 4, 5]));