//! Given two strings s and t, return true if t is an anagram of s, and false otherwise.

//! An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
//! typically using all the original letters exactly once.

function isAnagram(s, t) {
	if (s.length !== t.length) return false;

	let map = {};

	for (let i = 0; i < s.length; i++) {
		map[s[i]] = map[s[i]] ? map[s[i]] + 1 : 1;
	}

	for (let j = 0; j < t.length; j++) {
		if (!map[t[j]]) return false;
		map[t[j]] = map[t[j]] - 1;
	}

	return true;
}

console.log(isAnagram("anagram", "nagaram")); //true
console.log(isAnagram("rat", "car")); //false
