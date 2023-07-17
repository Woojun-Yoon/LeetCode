/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let result = 0, count = 0;
    for (const num of nums) {
        if (count == 0) {
            result = num;
            count = 1;
        }
        else if (result == num) {
            count++;
        }
        else {
            count--;
        }
    }
    return result;
};