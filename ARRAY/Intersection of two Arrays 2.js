// Question 350


function intersect(nums1, nums2) {
    let a1 = nums1.sort((a, b) => a - b);
    let a2 = nums2.sort((a, b) => a - b);
    let result = [];

    while (a1.length && a2.length) {
        if (a1[0] === a2[0]) {
            result.push(a1.shift());
            a2.shift();
        } else if (a1[0] > a2[0]) {
            a2.shift();
        } else {
            a1.shift();
        }
    }

    return result;
}







console.log(intersect([1, 2, 2, 1], [2, 2]));
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
console.log(intersect([1, 2, 2, 1], [2]));




