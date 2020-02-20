/*

给定一个字符串，对该字符串可以进行 “移位” 的操作，也就是将字符串中每个字母都变为其在字母表中后续的字母，比如："abc" -> "bcd"。这样，我们可以持续进行 “移位” 操作，从而生成如下移位序列：

"abc" -> "bcd" -> ... -> "xyz"
给定一个包含仅小写字母字符串的列表，将该列表中所有满足 “移位” 操作规律的组合进行分组并返回。

示例：

输入: ["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"]
输出: 
[
  ["abc","bcd","xyz"],
  ["az","ba"],
  ["acef"],
  ["a","z"]
]
*/

/**
 * @param {string[]} strings
 * @return {string[][]}
 */

function computeDistance(char1, char2) {
    const code1 = char1.charCodeAt(0);
    const code2 = char2.charCodeAt(0);
    if (code2 - code1 > 0) {
        return code2 - code1;
    }
    return 26 + code2 - code1;
}

function getKey(str) {
    let strCode = '';
    for (let i = 1; i < str.length; i++) {
        const prev = str[i - 1];
        const cur = str[i];
        strCode += computeDistance(prev, cur) + ',';
    }
    return strCode.slice(0, -1);
}
//思路同49字母异位词分组
var groupStrings = function (strings) {
    let myMap = new Map();
    for (let i = 0; i < strings.length; i++) {
        let item = strings[i],
            key = getKey(item);
        if (myMap.has(key)) {
            let val = myMap.get(key);
            val.push(item);
            myMap.set(key, val);
        } else {
            myMap.set(key, [item]);
        }
    }
    return Array.from(myMap.values());
};
