'use strict'

let title = prompt('Как называется ваш проект?'),
    screens = prompt('Какие типы экранов нужно разработать?'),
    screenPrice = +prompt('Сколько будет стоить данная работа?'),
    adaptive = confirm('Нужен ли адаптив на сайте?'),
    service1 = prompt('Какой дополнительный тип услуги нужен?'),
    servicePrice1 = +prompt('Сколько это будет стоить?'),
    service2 = prompt('Какой дополнительный тип услуги нужен?'),
    servicePrice2 = +prompt('Сколько это будет стоить?'),
    rollback = 10;
    let fullPrice = screenPrice + servicePrice1 + servicePrice2;


let allServicePrices = function () {
    return servicePrice1 + servicePrice2;
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


showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(getRollbackMessage(fullPrice));
console.log(screens.toLowerCase().split(" "));
console.log(servicePercentPrice());








