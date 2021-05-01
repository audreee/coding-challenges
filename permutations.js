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