/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const findMax = (list) => {
    list.length === 0 ? list.push(0) : "";
    const max = Math.max(...list);
    const maxIndex = list.findIndex((n) => n === max);
    return { max, maxIndex };
  };

  const findMin = (list) => {
    list.length === 0 ? list.push(0) : "";
    const min = Math.min(...list);
    const minIndex = list.findIndex((n) => n === min);
    return { min, minIndex };
  };

  let profit = 0;

  const queen = [prices];

  while (queen.length) {
    const list = queen.pop();

    if (list.length > 1) {
      const { min, minIndex } = findMin(list);
      const prevList = list.slice(0, minIndex);
      const nextList = list.slice(minIndex, list.length);
      const { max } = findMax(nextList);

      if (profit < max - min) {
        profit = max - min;
      }
      if (minIndex === 0) continue;
      if (prevList.length) queen.push(prevList);
      if (nextList.length) queen.push(nextList);
    }
  }

  return profit;
};
// @lc code=end
// [3,2,6,5,0,3]
// @after-stub-for-debug-begin
module.exports = maxProfit;
// @after-stub-for-debug-end
