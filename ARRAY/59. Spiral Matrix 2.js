function generateMatrix(n) {
    let result = new Array(n).fill(0).map(() => new Array(n).fill(0));

    let size = n * n;
    let count = 0;
    let left = 0;
    let right = n - 1;
    let top = 0;
    let bottom = n - 1;

    while (count < size) {
        // Going Right 
        for (let i = left; i <= right; i++) {
            count++;
            result[top][i] = count;
        }
        top++;
        // Going Bottom
        for (let j = top; j <= bottom; j++) {
            count++;
            result[j][right] = count;
        }
        right--;
        // Going Left
        for (let k = right; k >= left; k--) {
            count++;
            result[bottom][k] = count;
        }
        bottom--;
        //Going Up
        for (let h = bottom; h >= top; h--) {
            count++;
            result[h][left] = count;
        }
        left++;
    }

    return result;
}

console.log(generateMatrix(3));