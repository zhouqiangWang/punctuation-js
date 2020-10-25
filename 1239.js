/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
    let dp = [];
    dp.push(0);
    
    let max = 0;
    for (let str of arr) {
        let dup = 0;
        let a = 0;
        for (let c of str) {
            let idx = c.charCodeAt() - 'a'.charCodeAt();
            dup = dup | ( a & 1 << idx);
            a = a | 1 << idx;
        }
        if (dup > 0) continue;
        let len = dp.length;
        for (let i = 0; i < len; i++) {
            if ((dp[i] & a) === 0) {
                dp.push(dp[i] | a);
                max = Math.max(max, countBits(dp[i] | a));
            }
        }
        
    }
    return max;
};

function countBits (n) {
    let res = 0;
    while (n > 0) {
        if (n & 1 > 0) {
            res++;
        }
        n = n >> 1;
    }
    
    return res;
}


console.log(maxLength(["un","iq","ue"]));