/* Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.
*/

 var threeSum = function(nums) {
  let results = [];
  nums = nums.sort((a, b) => (a - b));

  for (let firstIndex = 0; firstIndex < nums.length - 2; firstIndex++) {
      let secondIndex = firstIndex + 1;
      let lastIndex = nums.length - 1;

      if (firstIndex > 0 && nums[firstIndex] === nums[firstIndex - 1]) {
          continue;
      }

      while (secondIndex < lastIndex) {
          let sum = nums[firstIndex] + nums[secondIndex] + nums[lastIndex];
          if (sum < 0) {
              secondIndex++
          } else if (sum > 0) {
              lastIndex--;
          } else {
              results.push([nums[firstIndex], nums[secondIndex], nums[lastIndex]]);
              while (nums[secondIndex] === nums[secondIndex + 1]) { secondIndex++ }
              while (nums[lastIndex] === nums[lastIndex - 1]) { lastIndex-- }
              secondIndex++;
              lastIndex--;
          }

      }
  }
  return results;
}
