var isPalindrome = function(x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }

    var rev = 0;
    var num = x;

    while (xcopy !== 0) {
        rev = rev * 10 + num % 10;
        num = Math.floor(num / 10);
    }

    return x === rev || x === rev/10;
};