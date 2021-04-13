var romanToInt = function(s) {
  var values = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
  };

  var number = 0;

  for (var i = 0; i < s.length; i++) {
      if (i + 1 === undefined) {
          number += values[s[i]];
      }
      if (values[s[i + 1]] > values[s[i]]) {
          number -= values[s[i]];
      } else {
          number += values[s[i]];
      }
  }

  return number;
};