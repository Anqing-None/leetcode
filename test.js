/*
@lc app=leetcode.cn id=108 lang=javascript
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

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var sortedArrayToBST = function (nums) {
  if (!nums.length) return null;

  // 左小右大
  // 高度平衡 每个节点的左右子树 高度差不超过1
  const getMidIndex = (n) => Math.ceil(n / 2) - 1;

  function traverse(nums) {
    if (!nums.length) return null;
    const mid = getMidIndex(nums.length);
    const val = nums[mid];

    let leftNums = nums.slice(0, mid);
    let rightNums = nums.slice(mid + 1, nums.length);

    if (leftNums.length <= 1 && rightNums.length <= 1) {
      const left = leftNums[0] || null;
      const right = rightNums[0] || null;
      return new TreeNode(val, left, right);
    }

    const leftTree = traverse(leftNums);
    const rightTree = traverse(rightNums);

    return new TreeNode(val, leftTree, rightTree);
  }

  const t = traverse(nums);
  return t;

  // if (!nums.length) return null;

  // // 用于把数组分割成两半的中间元素索引
  // const splitIndex =
  //   nums.length % 2 === 0 ? nums.length / 2 : nums.length / 2 - 0.5;

  // return new TreeNode(
  //   // 分割索引对应的元素就是当前节点的值
  //   nums[splitIndex],
  //   // 分割数组左边，递归生成左分支
  //   sortedArrayToBST(nums.slice(0, splitIndex)),
  //   // 分割数组右边，递归生成右分支
  //   sortedArrayToBST(nums.slice(splitIndex + 1, nums.length))
  // );
};

const a = sortedArrayToBST([-10, -3, 0, 5, 9]);
const b = sortedArrayToBST([1, 3]);
console.log(b)
// console.log(a);

// @lc code=end

// @after-stub-for-debug-begin
module.exports = sortedArrayToBST;
// @after-stub-for-debug-end
