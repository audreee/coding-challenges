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


