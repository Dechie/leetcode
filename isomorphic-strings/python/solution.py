class Solution1:
    def isIsomorphic(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        
        s_map = {}
        t_map = {}

        for i in range(0, len(s)):
            s_char = s[i]
            t_char = t[i]

            if s_char not in s_map:
                s_map[s_char] = t_char
            if t_char not in t_map:
                t_map[t_char] = s_char

            if s_map[s_char] != t_char or t_map[t_char] != s_char:
                return False
        return True      
