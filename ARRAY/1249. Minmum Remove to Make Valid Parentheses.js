function minRemoveToMakeValie(s) {
    let arr = s.split('');
    let stack = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "(") stack.push(i);

        if (arr[i] == ")") {
            if (stack.length == 0) {
                arr[i] = "";
            } else {
                stack.pop();
            }
        }
    }

    for (let j = 0; j < stack.length; j++) {
        let index = stack[i];
        arr[index] = "";
    }

    return arr.join('');
}

console.log(minRemoveToMakeValie('lee(t(c)o)de)'));