// first solution, using dictionary/map
//
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber1 = function(nums) {
    let freq = {};

    for (let num of nums) {
        if (!(num in freq)) {
            freq[num] = 1
        } else {
            freq[num] += 1
        }
    }

    for (let num of nums) {
        if (freq[num] == 1) {
            return num;
        }
    }
};

// second solution: with XOR
// this is a brilliant solution, with 
// space complexity of O(1), which was what the problem demanded.
// the idea behind this is to keep xor'ing every number with the 
// next one. whenever a number gets xor'd with itself, it cancels out
// so since there is two of each number in the list (except the one
// we're looking for) so the numbers cancel each other out but that
// one number remains. and that way, we find it simply.
//
var singleNumber = function(nums) {
    let acc = 0;

    for (let num of nums) {
        acc ^= num;
    }
    return acc;
}
