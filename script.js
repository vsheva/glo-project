'use strict'

let arr = ["2", "33", "455", "88", "99", "100", "25"];

arr.forEach(function (item) {
    if (item.startsWith('2') || item.startsWith('4')) {
        console.log(item);
    }
});


function isPrime(n) {
    for (let i = 2; i * i <= n; i == 2 ? i++ : i += 2) if (n % i == 0) return false;
    return n > 1;
}

const res = [...Array(101)].reduce((a, _, i) => a.concat(isPrime(i) ? `Делители числа ${i}: 1 и ${i}` : []), []).join('\n');
console.log(res);