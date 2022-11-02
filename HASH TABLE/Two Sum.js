function twoSum(nums, target) {
    let results = [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (j != i && nums[i] + nums[j] == target) {
                let answer = [j, i];
                if (!results.some(subarray => subarray.every((elm, ind) => elm == answer[ind]))) {
                    results.push([i, j])
                }
            }
        }
    }

    return results;
}


console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
