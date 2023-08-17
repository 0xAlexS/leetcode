/**
 * Module: twoSum
 * Description: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 *              You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *              You can return the answer in any order.
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (var i = 0; i < nums.length; i++) {
        for (var x = 0; x < nums.length; x++){
            if (i == x)
                continue;
            if (nums[i] + nums[x] == target)
                return [i, x];
        }
    }
};

export default twoSum;