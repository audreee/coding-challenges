// Heap's algorithm
const getPermutations = (array) => {
  const results = [];

  const swapInPlace = (arrayToSwap, indexA, indexB) => {
    const temp = arrayToSwap[indexA];
    arrayToSwap[indexA] = arrayToSwap[indexB];
    arrayToSwap[indexB] = temp;
  }

  const generate = (len, heapArray) => {
    if (len === 1) {
      results.push(heapArray.slice());
      return;
    }

    generate(len - 1, heapArray);

    for (let i = 0; i < len - 1; i++) {
      if (len % 2 === 0) {
        swapInPlace(heapArray, i, len - 1);
      } else {
        swapInPlace(heapArray, 0, len - 1)
      }

      generate(len - 1, heapArray);
    }
  }

  generate(array.length, array.slice());

  return results;
}

console.log(getPermutations([4, 3, 2, 1]));

// Other algorithm (https://stackoverflow.com/questions/39927452/recursively-print-all-permutations-of-a-string-javascript)

const findPermutations = (string) => {
  if (string.length < 2) {
    return string;
  }

  let results = [];

  for (let i = 0; i < string.length; i++) {
    let letter = string[i];

    if (string.indexOf(letter) !== i) {
      continue;
    }

    let remaining = string.slice(0, i) + string.slice(i + 1, string.length)

    for (let permutation of findPermutations(remaining)){
      results.push(letter + permutation);
    }
  }

  return results;

}

console.log(findPermutations("abc"));