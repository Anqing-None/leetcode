/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const nums = digits.reverse();

  const traverse = (_digits, rest = []) => {
    if (!_digits[0]) _digits[0] = 0;
    const n = _digits[0];

    if (n + 1 >= 10) {
      _digits[0] = (_digits[0] + 1) % 10;
      return rest.concat(traverse(_digits.slice(1), [_digits[0]]));
    } else {
      _digits[0] = n + 1;
      return rest.concat(_digits);
    }
  };

  const ret = traverse(nums);
  return ret.reverse();
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = plusOne;
// @after-stub-for-debug-end
