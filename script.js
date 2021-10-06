'use strict'
let title,
    screens,
    screenPrice,
    adaptive,
    service1,
    servicePrice,
    service2,
    rollback = 10;

let fullPrice;

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

let asking = function () {
    title = prompt('Как называется ваш проект?', "Калькулятор верстки")
    screens = prompt('Какие типы экранов нужно разработать?', "Простые, Сложные")
    screenPrice = prompt('Сколько будет стоить данная работа?')

    while (!isNumber(screenPrice)) {
        screenPrice = prompt('Сколько будет стоить данная работа?')
    }

    adaptive = confirm('Нужен ли адаптив на сайте?')
}

const allServicePrices = function () {
    let sum = 0;
    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            service1 = prompt('Какой дополнительный тип услуги нужен?')
        } else if (i === 1) {
            service2 = prompt('Какой дополнительный тип услуги нужен?')
        }
        let servicePrice = prompt('Сколько это будет стоить?')

        while (!isNumber(servicePrice)) {
            servicePrice = prompt('Сколько это будет стоить?')
        }
        sum += servicePrice;
    }
    return sum;
}

let showTypeOf = function (variable) {
    console.log(variable, typeof variable);
}

const  getFullPrice = function () {
    let fullPrice = screenPrice + allServicePrices;
    return fullPrice;
}

let servicePercentPrice = function () {
    return servicePercentPrice = Math.ceil(fullPrice - (fullPrice * rollback / 100));
}

function getTitle() {
    if (!title) return title;
    return title[0].toUpperCase() + title.slice(1);
}

const getRollbackMessage = function (price) {
    if (price >= 30000) {
        return 'Даем скидку в 10%';
    } else if (price >= 15000 && price < 30000) {
        return 'Даем скидку в 5%';
    } else if (price >= 0 && price < 15000) {
        return 'Скидка не предусмотрена';
    } else if (price < 0) {
        return 'Что то пошло не так';
    }
}

asking();
fullPrice = getFullPrice();
title = getTitle();
allServicePrices();


console.log(getRollbackMessage(fullPrice));
console.log(screens.toLowerCase().split(" "));
console.log(servicePercentPrice());
console.log(`Стоимость верстки экранов ${screenPrice} долларов`);
console.log(`Стоимость разработки сайта ${fullPrice} долларов`);





