/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  /** 递归写法 */
  // const isNode = (n) => typeof n === "object" && n !== null;

  // const traverse = (root) => {
  //   const { left, right } = root;

  //   if (isNode(left) && isNode(right)) {
  //     if (left.val !== right.val) return false;
  //     const a = traverse({ left: left.left, right: right.right });
  //     const b = traverse({ left: left.right, right: right.left });
  //     return a === true && b === true;
  //   } else {
  //     return left === right;
  //   }
  // };

  // return traverse(root);

  /**循环写法 */
  const isNode = (n) => typeof n === "object" && n !== null;

  if (!isNode(root.left) || !isNode(root.right)) {
    return root.left === root.right;
  }

  // 双队列 逐步对比
  const queenL = [root.left];
  const queenR = [root.right];

  while (queenL.length) {
    const tempL = queenL.shift();
    const tempR = queenR.shift();

    if (tempL === null && tempR === null) continue;

    if (isNode(tempL) && isNode(tempR)) {
      if (tempL.val !== tempR.val) return false;
    }

    if (!isNode(tempL) || !isNode(tempR)) {
      if (tempL !== tempR) return false;
    }

    // 先左后右
    queenL.push(tempL.left);
    queenL.push(tempL.right);
    // 先右后左
    queenR.push(tempR.right);
    queenR.push(tempR.left);
  }

  return true;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = isSymmetric;
// @after-stub-for-debug-end
