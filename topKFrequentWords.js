// Given a non-empty list of words, return the k most frequent elements.

// Your answer should be sorted by frequency from highest to lowest. If two words have the same frequency, then the word with the lower alphabetical order comes first.

var topKFrequent = function(words, k) {
  let results = [];
  let counts = {};

  for (let i = 0; i < words.length; i++) {
      if (!counts[words[i]]) {
          counts[words[i]] = 1
      } else {
          counts[words[i]]++;
      }
  }

  while (results.length < k) {
      let highest = 0;
      let highestCounts = []
      for (let word in counts) {
          if (counts[word] > highest) {
              highest = counts[word]
          }
      }
      for (let word in counts) {
          if (counts[word] === highest) {
            highestCounts.push(word);
            delete counts[word];
          }
      }
      highestCounts.sort()
      results.push(...highestCounts)
  }
    return results.slice(0, k);
};