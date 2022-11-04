function canConstruct(ransomeNote, magazine) {
    const map = {};

    for (let letter of magazine) {
        map[letter] = map[letter] + 1 || 1;
    }

    for (let letter of ransomeNote) {
        if (!map[letter]) return false;
        map[letter]--;
    }
    return true;
}