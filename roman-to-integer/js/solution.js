/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let romans = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000};

    let res = 0;
    for (let i = 0; i < s.length; i++) {
        if (i < s.length && romans[s[i]] < romans[s[i + 1]]) {
            res -= romans[s[i]];
        } else {
            res += romans[s[i]];
        }
    }
    return res;
};
