/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */
var maxDepth = function (root) {
  /**递归写法 */
  // const isNode = (n) => typeof n === "object" && n !== null;

  // if (!isNode(root)) return 0;

  // const getHeight = (node) => {
  //   if (!isNode(node)) {
  //     if (node === null) {
  //       return 0;
  //     } else {
  //       return 1;
  //     }
  //   }

  //   const maxL = getHeight(node.left);
  //   const maxR = getHeight(node.right);

  //   const max = Math.max(maxL, maxR);
  //   return max + 1;
  // };

  // const depth = getHeight(root);

  // return depth;

  /**循环写法 */
  const isNode = (n) => typeof n === "object" && n !== null;

  if (!isNode(root)) return 0;

  let queen = [root];
  let depth = 0;

  while (queen.length) {
    let temp = [];

    queen.forEach((n) => {
      if (isNode(n)) {
        if (isNode(n.left)) temp.push(n.left);
        if (isNode(n.right)) temp.push(n.right);
      }
    });

    queen = temp;

    depth++;
  }
  return depth;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = maxDepth;
// @after-stub-for-debug-end
