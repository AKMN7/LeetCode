function longestPalindrome(s) {
    let ans = 0;
    let keys = {};

    for (let letter of s) {
        keys[letter] = (keys[letter] || 0) + 1;
        if (keys[letter] % 2 == 0) ans = ans + 2;
    }

    return s.length > ans ? ans + 1 : ans;
}
