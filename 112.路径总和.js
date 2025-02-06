/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (root === null) return false;

  const preOrder = (root, sum) => {
    if (root === null) return;

    sum += root.val;

    if (root.left === null && root.right === null) {
      if (sum === targetSum) return true;
    }
    return preOrder(root.left, sum) || preOrder(root.right, sum);
  };

  return !!preOrder(root, 0);
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = hasPathSum;
// @after-stub-for-debug-end
