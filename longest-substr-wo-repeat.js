var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let maxLength = 0;
    let charSet = new Set();

    for (let right = 0; right < s.length; right++) {
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }

        charSet.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    // loop through s
    // make a string = s[0]
    // while string.includes(s[i]) === false keep going
    // once true stop and save this itteration
    // if string.length > max
    // max = string.length

    let max = s[0] ? 1 : 0;
    for (let i = 0; i <= s.length - 1; i++) {
        let curr = s[i];
        for (let j = i + 1; j <= s.length - 1; j++) {
            if (!curr.includes(s[j])) {
                curr = curr + s[j];
            } else {
                break
            }
            if(curr.length > max){
            max = curr.length;
        }
        }
    }
    return max;
};
