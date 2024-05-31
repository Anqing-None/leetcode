/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  a = [...a].reverse().join('');
  b = [...b].reverse().join('');
  let long = a;
  let short = b;
  if (a.length < b.length) [long, short] = [b, a];

  const ret = [];
  for (let i = 0; i < long.length; i++) {
    const a = Number(long[i]||0);
    const b = Number(short[i] || 0);

    if (a + b > 1) { // 需要进位
      ret[i] = 0;
      let j = i + 1;
      let next = Number(long[j] || 0) + Number(short[j] || 0) + 1
      while (next > 1) { // 持续进位
        ret[j] = next - 2
        j++;
        next = Number(long[j] || 0) + Number(short[j] || 0) + 1
      }
      ret[j] = 1
      i = j
    } else {
      ret[i] = Number(a) + Number(b);
    }
  }

  return ret.reverse().join('');
};

// addBinary('1010', '1011')
// addBinary('100', '110010')

// @lc code=end

