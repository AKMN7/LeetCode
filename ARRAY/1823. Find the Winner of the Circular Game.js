function findTheWinner(n, k) {
    let arr = [];
    for (let i = 0; i < n; i++) arr.push(i + 1);

    let remove = 0;
    for (let i = 0; i < n - 1; i++) {
        remove = (remove + k - 1) % (n - i);
        arr.splice(remove, 1);
    }

    return a
}