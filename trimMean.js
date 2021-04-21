/* Given an integer array arr, return the mean of the remaining integers after removing the smallest 5% and the largest 5% of the elements.

Answers within 10-5 of the actual answer will be considered accepted.

Constraints:
* 20 <= arr.length <= 1000
* arr.length is a multiple of 20.
* 0 <= arr[i] <= 105

*/


var trimMean = function(arr) {
  arr = arr.sort((a, b) => (a - b));

  let trim = arr.length / 20;

  let trimmed = arr.slice(trim, arr.length - trim)

  let total = 0;
  trimmed.forEach(value => {
      total += value;
  })

  return total / trimmed.length;
};