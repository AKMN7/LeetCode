function searchMatrix(matrix, target) {
    let result = false;

    for (let i = 0; i < matrix.length; i++) {
        let found = matrix[i].includes(target);
        if (found) {
            result = true;
            break;
        }
    }

    return result;
}