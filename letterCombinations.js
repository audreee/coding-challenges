/* Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
*/

var letterCombinations = function(digits) {
  if (digits === '') {
      return [];
  }

  let letterMap = {
      2: 'abc',
      3: 'def',
      4: 'ghi',
      5: 'jkl',
      6: 'mno',
      7: 'pqrs',
      8: 'tuv',
      9: 'wxyz'
  }

  let words = [];

  let lettersForDigits = (word, remainingDigits) => {
      if (remainingDigits.length === 0) {
          return words.push(word);
      }

      let currentDigit = remainingDigits[0];
      let letters = letterMap[currentDigit].split('');
      for (let i = 0; i < letters.length; i++) {
          lettersForDigits(word + letters[i], remainingDigits.slice(1))
      }
  }

  lettersForDigits('', digits.split(''));

  return words;
};