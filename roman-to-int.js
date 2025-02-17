/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    // if next numeral is bigger subtract this amount from that amount and
    // add that to total
    // edge cases: 1 and 3999
    // 1 = I
    // 3999 = MMMCMXCIX
    let final = 0
    for (let i = 0; i <= s.length - 1; i++) {
        if(s[i] === 'C' && (s[i+1] === 'M' || s[i+1] === 'D')){
            final-=100;
            continue;
        }
        if(s[i] === 'X' && (s[i+1] === 'L' || s[i+1] === 'C')){
            final-=10;
            continue;
        }
        if(s[i] === 'I' && (s[i+1] === 'X' || s[i+1] === 'V')){
            final -=1;
            continue;
        }
        if (s[i] === 'M') {
            final += 1000;
        }
        if (s[i] === 'D') {
            final += 500;
        }
        if (s[i] === 'C') {
            final += 100;
        }
        if (s[i] === 'L') {
            final += 50;
        }
        if (s[i] === 'X') {
            final += 10;
        }
        if (s[i] === 'V') {
            final += 5;
        }
        if (s[i] === 'I') {
            final += 1;
        }
    }
    return final;
};
