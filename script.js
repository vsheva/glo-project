'use strict'

let arr = ['25', '44', '20', '5', '0', '777', '2000'];

arr.forEach(item => {
    if (item.startsWith('2') || item.startsWith('4')) {
        console.log(item);
    }
});

function isPrimeNumber(n) {
    for (let i = 2; i * i <= n; i == 2 ? i++ : i += 2) if (n % i == 0) return false;
    return n > 1;
}

const res = [...Array(41)].reduce((a, _, i) => a.concat(isPrimeNumber(i) ? `Делители числа ${i}: 1 и ${i}` : []) , []).join('\n');




