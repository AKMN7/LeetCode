// Question 36

function isValidSudoku(board) {
    let rowResult = board;
    let boxScatter = [];
    let colResult = [[], [], [], [], [], [], [], [], []];

    let tempBox = [[], [], []];
    for (let i = 1; i < 10; i++) {
        let row = rowResult[i - 1];
        tempBox[0] = tempBox[0].concat(row.slice(0, 3));
        tempBox[1] = tempBox[1].concat(row.slice(3, 6));
        tempBox[2] = tempBox[2].concat(row.slice(6, 9));

        if (i == 3 || i == 6 || i == 9) {
            boxScatter.push(tempBox);
            tempBox = [[], [], []];
        }

        row.forEach((el, ind) => colResult[ind].push(el));
    }

    let boxResult = [];
    boxScatter.forEach(el => {
        el.forEach(elm => boxResult.push(elm))
    });

    let result = [validate(rowResult), validate(boxResult), validate(colResult)];

    return result.every(el => el === true) ? true : false;
}


function validate(arr) {
    let result = true;

    for (let i = 0; i < arr.length; i++) {
        let removeNull = arr[i].filter(el => el != ".");
        let removeDuplicates = [...new Set(removeNull)];
        if (removeNull.length !== removeDuplicates.length) {
            result = false;
            break;
        }
        let belowNine = removeDuplicates.every(el => el > 0 && el < 10);
        if (!belowNine) {
            result = false;
            break;
        }
    }

    return result;
}