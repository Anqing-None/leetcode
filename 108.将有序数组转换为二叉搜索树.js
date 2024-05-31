/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  const traverse = (_nums) => {
    if (!_nums.length) return null;
    const midIndex = Math.floor(_nums.length / 2);

    const midVal = _nums[midIndex];

    const node = new TreeNode(midVal);

    node.left = traverse(_nums.slice(0, midIndex));
    node.right = traverse(_nums.slice(midIndex + 1));

    return node;
  };

  const n = traverse(nums);
  return n;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = sortedArrayToBST;
// @after-stub-for-debug-end

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
