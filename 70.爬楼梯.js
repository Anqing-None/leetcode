/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const map = {
    1: 1,
    2: 2
  }


  for (let i = 3; i <= n; i++) {
    map[i] = map[i - 1] + map[i - 2]

  }

  return map[n]
};
// @lc code=end

