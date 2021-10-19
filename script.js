'use strict'
let userInput;


function isNullOrWhiteSpace(n) {
    return (
        n === undefined || n === null || n.match(/^\s+|\s+$/) !== null || isNaN(n)
    );
}

function numTrim(n) {
    do {
        n = prompt("Введите аргумент");
    } while (isNullOrWhiteSpace(n));
    return n.trim();
}

console.log(numTrim(userInput));