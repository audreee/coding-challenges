var longestCommonPrefix = function(strs) {
  var prefix = '';
  var match = false;

  if (strs.length > 200 || strs.length <= 0) {
      return prefix;
  }

  for (var i = 1; i <= strs[0].length; i++) {
      var testPrefix = strs[0].slice(0, i);
      for (var j = 0; j < strs.length; j++) {
          if (testPrefix === strs[j].slice(0, i)) {
              match = true;
          } else {
              match = false;
              break;
          }
      }

      if (match) {
          prefix = strs[0].slice(0, i);
      }
  }
  return prefix;
};