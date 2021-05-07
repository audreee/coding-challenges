/* Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
*/

// Naive solution:
var searchInsert = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === target) {
          return i;
      } else if (nums[i] > target) {
          return i;
      }
  }
  return nums.length;
}

// Optimized solution with binary search:
var searchInsert = function(nums, target) {
  let lastIndex = nums.length - 1;
  let firstIndex = 0;

  while (lastIndex >= firstIndex) {
      let midpoint = Math.floor((lastIndex + firstIndex) / 2);
      if (nums[midpoint] === target) {
          return midpoint;
      } else if (nums[midpoint] > target) {
          lastIndex = midpoint - 1;
      } else {
          firstIndex = midpoint + 1;
      }
  }
  return firstIndex;
}

// Recursive solution
let findTarget = (array, target, left, right) => {
    let midpoint = left + ((right - left) / 2)
    if (target === array[midpoint]) {
      return midpoint;
    } else if (right === left) {
      if (target > array[right]) {
        return right + 1;
      } else {
        return left;
      }
    } else if (target > array[midpoint]) {
      return findTarget(array, target, midpoint + 1, right);
    } else if (target < array[midpoint]) {
      return findTarget(array, target, left, midpoint - 1);
    }
  }

  arr = [1, 2, 3, 4, 6, 7, 8]
  console.log(findTarget(arr, 5, 0, arr.length - 1))
