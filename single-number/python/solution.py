# first solution: with dictionary

class SolutionX:
    def singleNumber(self, nums: List[int]) -> int:
        freq = {}

        for num in nums:
            if num not in nums:
                freq[num] = 1
            else:
                freq[num] += 1

        for num in nums:
            if freq[num] == 1:
                return num


# second solution: with XOR
# this is a brilliant solution, with 
# space complexity of O(1), which was what the problem demanded.
# the idea behind this is to keep xor'ing every number with the 
# next one. whenever a number gets xor'd with itself, it cancels out
# so since there is two of each number in the list (except the one
# we're looking for) so the numbers cancel each other out but that
# one number remains. and that way, we find it simply.
class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        acc = 0
        for num in nums:
            acc ^= num
        return acc
        
