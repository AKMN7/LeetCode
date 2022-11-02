// Question 119


function getRow(rowIndex) {
    let pascal = [];

    for (let i = 0; i < rowIndex + 1; i++) {
        pascal[i] = [];
        pascal[i][0] = 1;

        for (let j = 1; j < i; j++) {
            pascal[i][j] = pascal[i - 1][j - 1] + pascal[i - 1][j];
        }

        pascal[i][i] = 1
    }

    return pascal[pascal.length - 1];
}


console.log(getRow(3));
console.log(getRow(1));
console.log(getRow(0));