function matrixReshape(mat, r, c) {
    let flatten = mat.flat();
    let result = [];

    if (r * c != flatten.length) return mat;

    for (let i = 0; i < r; i++) {
        let temp = [];
        for (let j = 0; j < c; j++) {
            temp.push(flatten.shift());
        }
        result.push(temp)
    }

    return result
}


console.log(matrixReshape([[1, 2], [3, 4]], 1, 4));
console.log(matrixReshape([[1, 2], [3, 4]], 2, 4));