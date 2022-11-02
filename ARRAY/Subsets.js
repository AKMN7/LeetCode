// Question Number 78

function subsets(nums) {
    let array = nums;
    let result = [[]];

    array.forEach(el => {
        let current = [el];
        result.forEach(elm => {
            result.push(elm.concat(current))
        });
    });

    return result;
}


console.log(subsets([1, 2, 3]));

//! OUTPUT -> [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]];