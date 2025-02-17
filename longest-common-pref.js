/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    // check each string in arr of strings
    // if they all start w same letter add it to final string
    // increment j to check next letter.
    // i like the idea of having i in a for loop but two while loops works too
    if(strs === undefined || strs[0] === ''){
        return ''
    }
    let final = '';
    let j;
    for (let i = 0; i <= strs[0].length - 1; i++) {
        let curr = strs[0][i];
        for (j = 0; j <= strs.length - 1; j++) {
            if (curr !== strs[j][i]) {
                return final
            }
        }
            final += strs[0][i];
    }
    return final
};
