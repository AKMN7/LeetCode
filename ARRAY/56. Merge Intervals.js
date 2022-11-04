function merge(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    let i = 0;
    while (i < intervals.length - 1) {
        const [_, firstRight] = intervals[i];
        const [secondLeft, secondRight] = intervals[i + 1];
        if (firstRight >= secondLeft) {
            intervals[i][1] = Math.max(firstRight, secondRight);
            intervals.splice(i + 1, 1);
        } else {
            i++;
        }
    }

    return intervals;
}

//merge([[1, 3], [2, 6], [8, 10], [15, 18]]);
console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]));
console.log(merge([[1, 4], [4, 5]]));
console.log(merge([[1, 4], [0, 4]]));
