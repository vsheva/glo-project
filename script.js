'use strict'

let screenPrice = prompt('Сколько будет стоить данная работа?'

let isNumber = function (num) {
    if (!isNaN(parseFloat(num)) && isFinite(num) && (num.trim() != '')) {
        return number;
    }
};

const asking = function () {
    if (!isNumber(screenPrice)) {
       return screenPrice = prompt('Сколько будет стоить данная работа?');
    }
};

asking();
let number =isNumber(screenPrice);
console.log(number);







let number1 = function (num) {
    if (isNumber(num)) {
        return Number(num);
    }
    return 0;
else
    if (!isNaN(parseFloat(num)) && isFinite(num)) {
        return Number(num);
    }
};

const asking = function () {
    let price = prompt('Сколько это будет стоить?');

    while (!isNumber(price)) {
        price = prompt('Сколько это будет стоить?');
    }
};


asking();

let number = number1(price);
console.log(number);
