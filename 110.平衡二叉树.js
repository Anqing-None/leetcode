/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
var isBalanced = function (root) {
  if (!root) return true;

  const getDepth = (tree) => {
    if (tree === null) return 0;
    if (typeof tree !== "object") {
      if (!tree) {
        return 0;
      } else {
        return 1;
      }
    }

    const maxLeftHeight = getDepth(tree.left);
    const maxRightHeifht = getDepth(tree.right);

    const max = Math.max(maxLeftHeight, maxRightHeifht);

    return max + 1;
  };

  let _root = root;
  let _root2 = root;

  const leftHeight = getDepth(_root.left);
  const rightHeight = getDepth(_root.right);

  if (Math.abs(leftHeight - rightHeight) > 1) return false;

  while (_root.left) {
    const flag = isBalanced(_root.left);
    if (!flag) return false;
    _root = _root.left;
  }

  while (_root2.right) {
    const flag = isBalanced(_root2.right);
    if (!flag) return false;

    _root2 = _root2.right;
  }

  return true;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = isBalanced;
// @after-stub-for-debug-end
