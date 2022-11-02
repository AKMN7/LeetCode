function wordPattern(pattern, s) {
    const strArr = s.split(' ');

    if (pattern.length !== strArr.length) return false;

    const patMap = new Map();
    const strMap = new Map();

    for (let i = 0; i < pattern.length; i++) {
        if ((patMap.has(pattern[i])) && patMap.get(pattern[i]) !== strArr[i]) return false;
        if ((strMap.has(strArr[i])) && strMap.get(strArr[i]) !== pattern[i]) return false;

        patMap.set(pattern[i], strArr[i]);
        strMap.set(strArr[i], pattern[i]);
    }

    return true;
}