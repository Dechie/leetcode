// solution one: using map (dictionary in the case of python)
class Solution1 {
  int singleNumber(List<int> nums) {
    Map<int, int> freq = {};

    for (var num in nums) {
        if (!freq.containsKey(num)) {
            freq[num] = 1; 
        } else {
            freq[num] = freq[num]! + 1;
        }
    }

    return freq.keys.firstWhere((key) => freq[key]! == 1);
  }
}

// second solution: with XOR
// this is a brilliant solution, with 
// space complexity of O(1), which was what the problem demanded.
// the idea behind this is to keep xor'ing every number with the 
// next one. whenever a number gets xor'd with itself, it cancels out
// so since there is two of each number in the list (except the one
// we're looking for) so the numbers cancel each other out but that
// one number remains. and that way, we find it simply.

class Solution {
  int singleNumber(List<int> nums) {
        int acc = 0;

        for (var num in nums) {
            acc ^= num;
        }
        return acc;
    }
}
