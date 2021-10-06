'use strict'
let title,
    screens,
    screenPrice,
    adaptive,
    service1,
    service2,
    allServicePrices,
    rollback = 10,
    servicePercentPrice,
    fullPrice;

const isNumber = function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function () {
    title = prompt('Как назывется ваш проект?', 'Калькулятор');
    screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные');

    do {
        screenPrice = prompt('Сколько будет стоить данная работа?');
    } while (!isNumber(screenPrice));

    adaptive = confirm('Нужен ли адаптив на сайте?');
};

const getAllServicePrices = function () {
    let sum = 0;

    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            service1 = prompt('Какой дополнительный тип услуги нужен?');
        } else if (i === 1) {
            service2 = prompt('Какой дополнительный тип услуги нужен?');
        }

        let servicePrice = prompt('Сколько это будет стоить?');

        while (!isNumber(servicePrice)) {
            servicePrice = prompt('Сколько это будет стоить?');
        }

        sum += servicePrice;
    }

    return sum;
};

let showTypeOf = function (variable) {
    console.log(variable, typeof variable);
}

const getFullPrice = function () {
    return screenPrice + allServicePrices;
}

const getServicePercentPrice = function () {
    console.log('fullPrice ', typeof fullPrice);
    console.log('rollback', rollback);
    return Math.ceil(fullPrice - (fullPrice * rollback / 100));
}

const getTitle = function () {
    if (!title) return title;
    return title[0].toUpperCase() + title.slice(1);
}

const getRollbackMessage = function (price) {
    if (price >= 30000) {
        return ('Даем скидку в 10%');
    } else if (price >= 15000 && price < 30000) {
        return ('Даем скидку в 5%');
    } else if (price >= 0 && price < 15000) {
        return 'Скидка не предусмотрена';
    } else if (price < 0) {
        return ('Что то пошло не так');
    }
}

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrice();
title = getTitle();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);


console.log(screens.toLowerCase().split(" "));
console.log('Стоимость доп.услуг', allServicePrices);
console.log(getRollbackMessage(fullPrice));
console.log('Cтоимость разработки - откат', servicePercentPrice);
console.log('Общая стоимость', fullPrice);
console.log(screens.split(', '));




