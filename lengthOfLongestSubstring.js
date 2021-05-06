// Given a string s, find the length of the longest substring without repeating characters.

 var lengthOfLongestSubstring = function(s) {
  if (s.length < 2) {
      return s.length;
  }

  let longestLength = 0;
  for (let i = 0; i < s.length - 1; i++) {
      let currentLength = 1;
      let char = {};
      let end = i + 1;
      let nonRepeating = true;
      while (nonRepeating && s[end] !== undefined) {
              char[s[i]] = 1;
          if (!char[s[end]]) {
              char[s[end]] = 1;
              end++;
              currentLength++;
          } else {
              nonRepeating = false;
          }
      }
      if (longestLength < currentLength) {
          longestLength = currentLength;
      }
  }

  return longestLength;
};