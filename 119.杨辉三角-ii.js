/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  // const cacheList = [[1], [1, 1]];
  // if (cacheList[rowIndex]) return cacheList[rowIndex];

  // let startRow = 2;

  // while (startRow <= rowIndex) {
  //   // 全部填充1
  //   const item = new Array(startRow + 1).fill(1);
  //   // 找到上一个数组
  //   const prevList = cacheList[startRow - 1];
  //   // 计算填充当前数组
  //   for (let i = 1; i < prevList.length; i++) {
  //     const prevNum = prevList[i - 1];
  //     const sum = prevList[i] + prevNum;
  //     item[i] = sum;
  //   }
  //   // 加入计算缓存
  //   cacheList.push(item);

  //   startRow++;
  // }

  // return cacheList[rowIndex];
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = getRow;
// @after-stub-for-debug-end
