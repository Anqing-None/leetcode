/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const list = [];

  const totalRows = numRows;

  while (numRows > 0) {
    // 当前行的数量
    let times = totalRows - numRows + 1;
    const item = [];
    // 全部填充1
    for (let i = 0; i < times; i++) {
      item.push(1);
    }

    if (list.length > 1) {
      // 获取上一个数组
      const prevList = list[list.length - 1];

      for (let j = 1; j < prevList.length; j++) {
        const prevNum = prevList[j - 1] 
        const sum = prevList[j] + prevNum;
        item[j] = sum;
      }
    }

    list.push(item);

    numRows--;
  }

  return list;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = generate;
// @after-stub-for-debug-end