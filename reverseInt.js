/* Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).*/

var reverse = function(x) {
  let neg = false;
  if (x < 0) {
      neg = true;
      x = x.toString().slice(1);
  }
  x = Number(x.toString().split('').reverse().join(''));
  if (x < Math.pow(-2, 31) || x > Math.pow(2, 31) - 1) {
      return 0;
  } else {
      if (!neg) {
          return x;
      } else {
          return -x;
      }
  }
};