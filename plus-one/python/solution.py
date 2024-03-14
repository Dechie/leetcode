class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        n = len(digits)

        for i in reversed(range(n)):
            digits[i] += 1

            if digits[i] < 10:
                return digits
            else:
                digits[i] = 0
            
        digits.insert(0, 1)
        return digits
