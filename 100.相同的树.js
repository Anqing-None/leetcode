/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  /** 递归解法 */
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);

  /** 循环解法 */

  // const leftTraverseTree = (tree) => {
  //   let temp = tree;
  //   const stack = [];
  //   const ret = [];
  //   const isNode = (n) => typeof n === 'object' && n !== null;
  //   const isValue = (n) => typeof n === 'number' || n === null;

  //   while (isNode(temp) || stack.length) {
  //     while (isNode(temp)) {
  //       stack.push(temp);
  //       temp = temp.left;
  //     }

  //     temp = stack.pop();

  //     if (isValue(temp.left)) ret.push(temp.left);
  //     ret.push(temp.val);
  //     if (isValue(temp.right)) ret.push(temp.right);
      
  //     temp = temp.right;
  //   }
  //   return ret;
  // };

  // const pret = leftTraverseTree(p);
  // const qret = leftTraverseTree(q);

  // if (pret.length !== qret.length) return false;

  // for (let i = 0; i < pret.length; i++) {
  //   const p = pret[i];
  //   const q = qret[i];

  //   if (p !== q) return false;
  // }

  // return true;
};
// @lc code=end
