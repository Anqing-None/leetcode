/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let lastLength = 0;
    for (let index = s.length-1; index >= 0; index--) {
        if (s[index] !== " ") {
            lastLength += 1;
            if(s[index-1] == " " || !s[index-1]) {
                break;
            }
        }        
    }
    return lastLength;
};

// lengthOfLastWord("a");
// @lc code=end

