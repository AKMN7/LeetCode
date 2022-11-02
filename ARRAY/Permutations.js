// Question Number 46


const permute = function (nums) {
    const result = [];
    const temp = [];
    findPermutations(temp, nums, result);
    return result;
};

const findPermutations = (temp, nums, result) => {
    if (!nums.length) {
        result.push(temp.concat());
        return;
    }

    for (let i = 0; i < nums.length; i++) {
        const newNum = nums[i];
        temp.push(newNum);
        nums.splice(i, 1);
        findPermutations(temp, nums, result);
        temp.pop();
        nums.splice(i, 0, newNum);
    }
};


console.log(permute([1, 2, 3]));
console.log(permute([0, 1]));
console.log(permute([1]));