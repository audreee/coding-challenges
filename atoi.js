/*
Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).

The algorithm for myAtoi(string s) is as follows:

Read in and ignore any leading whitespace.
Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
Read in next the characters until the next non-digit charcter or the end of the input is reached. The rest of the string is ignored.
Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
Return the integer as the final result.
Note:

Only the space character ' ' is considered a whitespace character.
Do not ignore any characters other than the leading whitespace or the rest of the string after the digits.

Examples:
myAtoi("42") // 42
myAtoi("-42") // -42
myAtoi("  -42") // -42
myAtoi("4193 with words") // 4193
myAtoi("words and 987") // 0
myAtoi("-91283472332") // -2147483648
myAtoi("+-12") // 0
myAtoi("-+12") // 0
*/

var myAtoi = function(s) {
  let neg = false;
  s = s.trim();

  if (s[0] === '-') {
      neg = true;
      s = s.slice(1)
  } else if (s[0] === "+") {
      s = s.slice(1)
  }

  let num = '';

  for (let i = 0; i < s.length; i++) {
      if (!isNaN(Number.parseInt(s[i]), 10)) {
          num += s[i]
      } else {
          break;
      }
  }

  if (num === '') {
      return 0;
  }

  num = Number.parseInt(num, 10);

  if (neg === true) {
      num *= -1;
  }

 if (num > Math.pow(2, 31) - 1) {
      return Math.pow(2, 31) - 1;
  } else if (num < -Math.pow(2, 31)) {
      return -Math.pow(2, 31)
  } else {
      return num;
  }

};