/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
var inorderTraversal = function (root) {
  // const ret = [];
  // const leftTraverse = (node) => {
  //   // 处理字节点，当不为null时添加到数组
  //   if (node === null) return;
  //   if (typeof node !== "object") {
  //     ret.push(node);
  //     return;
  //   }

  //   leftTraverse(node.left);
  //   // 子节点处理完毕，处理二叉树自身值
  //   ret.push(node.val);
  //   // 左边处理完毕，处理右侧
  //   leftTraverse(node.right);
  // };

  // leftTraverse(root);

  // return ret;

  /** 循环方式 */
  let tempNode = root;
  const stack = [];
  const isNode = (node) => typeof node === 'object' && node !== null;
  const ret = [];

  while (isNode(tempNode) || stack.length) {
    while (isNode(tempNode)) {
      stack.push(tempNode);
      tempNode = tempNode.left;
    }

    tempNode = stack.pop();

    // 访问节点
    if (tempNode.left !== null && !isNode(tempNode.left))
      ret.push(tempNode.left);
    if (tempNode.right !== null && !isNode(tempNode.right))
      ret.push(tempNode.right);
    ret.push(tempNode.val);

    tempNode = tempNode.right;
  }
  return ret;
};
// @lc code=end
