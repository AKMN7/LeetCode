function productExceptSelf(nums) {
    let ans = [];
    for (let i = 0; i < nums.length; i++) {
        let pro = 1;
        for (let j = 0; j < nums.length; j++) {
            if (j == i) continue;
            pro = pro * nums[j];
        }
        ans.push(pro)
    }
    return ans;
}

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));