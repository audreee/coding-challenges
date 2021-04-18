/*
 * Find the first item that occurs an even number of times in an array.

 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {
  let counts = {};
  evens = [];
  for (let i = 0; i < arr.length; i++) {
    if (counts[arr[i]] === undefined) {
      counts[arr[i]] = [arr[i], 1];
    } else {
      counts[arr[i]][1]++;
    }
  }

  for (let key in counts) {
    if (counts[key][1] % 2 === 0) {
      evens.push(counts[key][0]);
    }
  }

  if (evens.length === 0) {
      return null;
  }

  var first = arr.length - 1;

  for (let i = 0; i < evens.length; i++) {
    if (first > arr.indexOf(evens[i])) {
        first = arr.indexOf(evens[i]);
    }
  }

  return arr[first];
};
