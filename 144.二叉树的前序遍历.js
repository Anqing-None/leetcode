/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  const isNode = (node) => typeof node === "object" && node !== null;
  const ret = [];

  const traverse = (node) => {
    if (!node) return;
    if (isNode(node)) {
      ret.push(node.val);
      traverse(node.left);
      traverse(node.right);
    } else {
      ret.push(node);
    }
  };

  traverse(root);
  return ret;
};
// @lc code=end
