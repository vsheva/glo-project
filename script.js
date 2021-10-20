'use strict'

let arr = ["2", "33", "455", "88", "99", "100", "25"];

arr.forEach( function(item) {
    if (item.startsWith('2') || item.startsWith('4')) {
        console.log(item);
    }
});

for (let i = 2; i < 100; i++) {
    let count = 0;
    for (let j = 2; j <= i && count < 2; j++) {
        if (i % j == 0) {
            count++;
        }
    }
    if (count < 2)
        console.log(i);
}