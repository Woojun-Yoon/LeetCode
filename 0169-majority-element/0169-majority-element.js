/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let dic = {};
    for (let num of nums) {
        dic[num] = dic[num] + 1 || 1;
        if (dic[num] > nums.length / 2) {
            return (num); 
        }
    }
};