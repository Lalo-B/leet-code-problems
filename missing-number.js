/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let arr = [...Array(nums.length+1).keys()]; // the keys are strings so
    // when first attempting i kept getting wrong type error
    for(let i in arr){
        if(nums.includes(Number(i))){
            continue
        } else {
            return Number(i)
        }
    }
};

/*

best itteration

var missingNumber = function(nums) {
    const length = nums.length;

const expectedSum = (length * (length + 1)) / 2;

const sum = nums.reduce((a, b) => a + b,0)

return expectedSum - sum

};

so rather than actually check for the missing num because we know
only one num from the range will be missing we can add up the values and
expected values to make it faster

*/
