/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic1 = function(s, t) {
    if (s.length != t.length) {
        return false;
    }

    let sMap = {};
    let tMap = {};

    for (let i = 0; i < s.length; i++) {
        let sChar = s[i];
        let tChar = t[i];

        if (!(sChar in sMap)) {
            sMap[sChar] = tChar;
        }

        if (!(tChar in tMap)) {
            tMap[tChar] = sChar;
        }

        if (sMap[sChar] != tChar || tMap[tChar] != sChar) {
            return false;
        }
    }

    return true;
};
