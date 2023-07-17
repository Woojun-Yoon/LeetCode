/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let dict = {};
    for (let num of nums) {
        dict[num] = dict[num] + 1 || 1;
        if (dict[num] > nums.length / 2) {
            return (num); 
        }
    }
};