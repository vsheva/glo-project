'use strict'

let title,
    screens,
    screenPrice,
    adaptive,
    service1,
    // servicePrice1 = +prompt('Сколько это будет стоить?'),
    service2,
    // servicePrice2 = +prompt('Сколько это будет стоить?'),
    rollback = 10;

let fullPrice;

//let fullPrice = screenPrice + servicePrice1 + servicePrice2;

let asking = function () {
        title = prompt('Как называется ваш проект?', "Калькулятор верстки")
        screens = prompt('Какие типы экранов нужно разработать?', "Простые, Сложные")
        while () {
            screenPrice = +prompt('Сколько будет стоить данная работа?', "15000")
        }

        adaptive = confirm('Нужен ли адаптив на сайте?')
}

let allServicePrices = function () {
    let sum = 0;
    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            service1 = prompt('Какой дополнительный тип услуги нужен?')
        } else if (i === 1) {
            service2 = prompt('Какой дополнительный тип услуги нужен?')
        }

        sum += +prompt('Сколько это будет стоить?');
    }
    return sum
    //return servicePrice1 + servicePrice2;
}

function getFullPrice() {
    let fullPrice = screenPrice + allServicePrices;
    return fullPrice;
}

function getTitle() {
    if (!title) return title;
    return title[0].toUpperCase() + title.slice(1);
}

let servicePercentPrice = function () {
    return servicePercentPrice = Math.ceil(fullPrice - (fullPrice * rollback / 100));
}

let showTypeOf = function (variable) {
    console.log(variable, typeof variable);
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
title = getTitle();
fullPrice = getFullPrice();
allServicePrices();


showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log("allServicePrices", allServicePrices);

console.log(getRollbackMessage(fullPrice));
console.log(screens.toLowerCase().split(" "));
console.log(servicePercentPrice());
console.log(`Стоимость верстки экранов ${screenPrice} долларов`);
console.log(`Стоимость разработки сайта ${fullPrice} долларов`);








