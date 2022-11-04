function isAnagram(s, t) {
    if (s.length !== t.length) return false;

    let map = {};

    for (let i = 0; i < s.length; i++) {
        map[s[i]] = map[s[i]] ? map[s[i]] + 1 : 1;
    }

    for (let i = 0; i < t.length; i++) {
        if (!map[t[i]]) {
            return false;
        } else {
            map[t[i]] = map[t[i]] - 1;
        }
    }

    return true;
}