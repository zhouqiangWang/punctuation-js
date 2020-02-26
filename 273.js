/**
 * @param {number} num
 * @return {string}
 */
const nums = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirdteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
const units = new Map([
    [100, "Hundred"],
    [1000, "Thousand"],
    [1000000, "Million"],
    [1000000000, "Billion"]
]);

var numberToWords = function(num) {
    let res = "";
    let u = 1000000000;
    while (u > 0) {
        let n = Math.floor(num / u);
        if (n > 0) {
            if (res.length > 0) {
                res += " ";
            }
            res += getHundreds(n);
            if (u > 1) {
                res = res + " " + units[u];
            }
        }
        num = num % u;
        u = u / 1000;
    }
    
    return res;
};

function getHundreds(n) {
    let res = "";
    let h = Math.floor(n / 100);
    if (h > 0) {
        res = nums[h] + " " + units.get(100);
    }
    n = n % 100;
    let t = Math.floor(n / 10);
    if (t > 0) {
        if (res.length > 0) {
            res += " ";
        }
        if (t < 2) {
            res += nums[n];
            return res;
        }
        res += tens[t];
    }
    n = n % 10;
    if (n > 0) {
        if (res.length > 0) {
            res += " ";
        }
        res += nums[n];
    }
    return res;
}

console.log(numberToWords(123));