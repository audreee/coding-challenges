/* Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.

Find the kth positive integer that is missing from this array. */


var findKthPositive = function(arr, k) {
  let missing = [];

  for (let i = 1; i <= arr[arr.length - 1]; i++) {
      if (!arr.includes(i)) {
          missing.push(i);
      }
  }

  if (missing.length < k) {
      return arr[arr.length - 1] + k - missing.length
  }

  return missing[k - 1];

};
