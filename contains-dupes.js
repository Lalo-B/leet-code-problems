/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let sett = new Set(nums);
    return sett.size !== nums.length;
};


/*
heres one of the best approaches:

var containsDuplicate = function(nums) {
    let set1= new Set();
    for(let num of nums){
        if(set1.has(num)){
            return true;
        }
        set1.add(num)
    }
    return false;
};

why is it better:
it adds each one one by one and if the set finds a dupe while adding it returns
rather than having to make the whole set it can stop in the middle
imporving speed obviously

*/
