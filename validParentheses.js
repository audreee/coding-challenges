var isValid = function(s) {
  var parens = {
      '(': ')',
      '{': '}',
      '[': ']'
  };

  var stack = [];

  for (var i = 0; i < s.length; i++) {
      if (parens[s[i]]) {
         stack.push(parens[s[i]]);
      } else {
          if (s[i] !== stack.pop()) {
              return false;
          }
      }
  }

  return stack.length === 0;
};
