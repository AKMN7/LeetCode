function maxSubArray(nums) {
    let prev = 0;
    let max = -Number.MAX_VALUE;

    nums.forEach(el => {
        prev = Math.max(prev + el, el);
        max = Math.max(prev, max);
    });

    return max;
}