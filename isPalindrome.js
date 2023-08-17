/**
 * Module: isPalindrome
 * Description: Given an integer x, return true if x is a palindrome, and false otherwise
 * 
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x = x.toString();
    var t = "";
    for (var i = x.length - 1; i >= 0; i--) {
        t += x[i];
    }
    if (x == t)
        return true;
    else
        return false;
};

export default isPalindrome;