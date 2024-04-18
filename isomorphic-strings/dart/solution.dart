class Solution1 {
  bool isIsomorphic(String s, String t) {
     if (s.length != t.length) {
        return false;
     }
     Map sMap = {};
     Map tMap = {};

     for (var i = 0; i < s.length; i++) {
        var sChar = s[i];
        var tChar = t[i];

        if (!sMap.containsKey(sChar)) {
            sMap[sChar] = tChar;
        }

        if (!tMap.containsKey(tChar)) {
            tMap[tChar] = sChar;
        }

        if (sMap[sChar] != tChar || tMap[tChar] != sChar) {
            return false;
        }
     }

     return true;
  }
}
