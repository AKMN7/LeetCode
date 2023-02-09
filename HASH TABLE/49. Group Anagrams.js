function groupAnagrams(strs, map = new Map()) {
	for (let i = 0; i < strs.length; i++) {
		const str = strs[i].split("").sort().join("");
		if (!map.has(str)) map.set(str, []);
		map.set(str, [...map.get(str), strs[i]]);
	}
	return Array.from(map.values());
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
