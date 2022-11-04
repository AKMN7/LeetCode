function subarraySum(nums, k) {
    let counter = 0;
    for (let i = 0; i < nums.length; i++) {
        let curr = 0;
        for (let j = i; j < nums.length; j++) {
            curr += nums[j];
            if (curr == k) counter++
        }
    }
    return counter
}

console.log(subarraySum([1, 1, 1], 2));
console.log(subarraySum([1, 2, 3], 3));