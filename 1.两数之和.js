/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const numi = nums[i];

    for (let j = i + 1; j < nums.length; j++) {
      const numj = nums[j];

      const sum = numi + numj;

      if (sum === target) return [i, j];
    }
  }
};
// @lc code=end
