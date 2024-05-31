/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {

  let low = 0;
  let up = x;

  do {
    let mid = (low + up) / 2;
    let mul = mid * mid
    if (mul >= x) {
      low = 0;
      up = mid;
    } else {
      low = mid;
    }
    
  } while (
    up - low > 1e-10
  );

  return Math.floor(up);
};
// @lc code=end

