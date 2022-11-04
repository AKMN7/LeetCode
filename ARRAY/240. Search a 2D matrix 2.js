function searchMatrix(matrix, target) {
    let m = matrix.length;
    let row = 0;
    let col = matrix[0].length - 1;

    while (row < m && col >= 0) {
        let cell = matrix[row][col];

        if (cell == target) return true;
        else if (cell > target) col--;
        else row++;
    }

    return false;
}