/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let pointer2 = m;

  // 始终指向最大数字的索引
  let maxNumPointer = m === 0 ? 0 : m - 1;

  const findRightIndex = (list, startIndex, num) => {
    let index = startIndex;
    for (let i = startIndex; i >= 0; i--) {
      const value = list[i];
      if (value <= num) break;
      index = i;
    }
    return index;
  };

  while (pointer2 < m + n) {
    const num2 = nums2[pointer2 - m];
    const maxNum = nums1[maxNumPointer];

    if (num2 > maxNum) {
      // 如果数字大雨num1的最大数字，最大数之后
      maxNumPointer = pointer2;
      nums1[pointer2] = num2;
    } else {
      // 小于时，找到位置
      const rightIndex = findRightIndex(nums1, maxNumPointer, num2);
      let destIndex = maxNumPointer + 1;

      while (destIndex > rightIndex) {
        const x1 = nums1[destIndex - 1];
        nums1[destIndex] = x1;
        destIndex--;
      }

      nums1[rightIndex] = num2;
      maxNumPointer++;
    }

    pointer2++;
  }
};
// @lc code=end
