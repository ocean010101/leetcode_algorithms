/*
一个单词的缩写需要遵循 <起始字母><中间字母数><结尾字母> 这样的格式。

以下是一些单词缩写的范例：

a) it                      --> it    (没有缩写)

     1
     ↓
b) d|o|g                   --> d1g

              1    1  1
     1---5----0----5--8
     ↓   ↓    ↓    ↓  ↓    
c) i|nternationalizatio|n  --> i18n

              1
     1---5----0
     ↓   ↓    ↓
d) l|ocalizatio|n          --> l10n
假设你有一个字典和一个单词，请你判断该单词的缩写在这本字典中是否唯一。若单词的缩写在字典中没有任何 其他 单词与其缩写相同，则被称为单词的唯一缩写。

示例：

给定 dictionary = [ "deer", "door", "cake", "card" ]

isUnique("dear") -> false
isUnique("cart") -> true
isUnique("cane") -> false
isUnique("make") -> true
执行结果：
通过
显示详情
执行用时 :
152 ms
, 在所有 JavaScript 提交中击败了
90.00%
的用户
内存消耗 :
55.8 MB
, 在所有 JavaScript 提交中击败了
66.67%
的用户
*/

/**
 * @param {string[]} dictionary
 */
var ValidWordAbbr = function (dictionary) {
    this.abbrMap = new Map();
    for (let i = 0; i < dictionary.length; i++) {
        let item = dictionary[i],
            itemLen = item.length,
            itemAbbr = item;
        if (itemLen > 2) {
            itemAbbr = item[0] + (itemLen - 2) + item[itemLen - 1];
        }
        if (this.abbrMap.has(itemAbbr)) {
            let val = this.abbrMap.get(itemAbbr);
            if (!val.includes(item)) {
                val.push(item);
                this.abbrMap.set(itemAbbr, val);
            }
        } else {
            this.abbrMap.set(itemAbbr, [item]);
        }
    }
};

/** 
 * @param {string} word
 * @return {boolean}
 */
ValidWordAbbr.prototype.isUnique = function (word) {
    //单词的缩写
    let len = word.length,
        abbr = word;
    if (len > 2) {
        abbr = word[0] + (len - 2) + word[len - 1];
    }
    let val = this.abbrMap.get(abbr);
    if (!this.abbrMap.has(abbr) ||
        (val.length == 1 && val.includes(word))) {
        return true;
    }
    return false;
};

/**
 * Your ValidWordAbbr object will be instantiated and called as such:
 * var obj = new ValidWordAbbr(dictionary)
 * var param_1 = obj.isUnique(word)
 */