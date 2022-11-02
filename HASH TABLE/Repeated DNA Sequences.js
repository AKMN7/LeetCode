// Question 187

function findRepeatedDnaSequences(s) {
    let temp = new Set();
    let res = [];
    for (let i = 0; i <= s.length - 10; i++) {
        let str = s.substring(i, i + 10);
        temp.has(str) ? res.add(str) : temp.add(str);
    }
    return [...new Set(res)];
}