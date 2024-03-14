/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let holder = x, reverse = 0;

    if (x < 0) {
        holder *= -1;
    }

    while (holder != 0) {
        reverse = reverse * 10 + holder % 10;
        holder = Math.floor(holder / 10);
    }

    return x === reverse;
};
