'use strict'
let title = prompt('Как называется ваш проект?'),
    screens = prompt('Какие типы экранов нужно разработать?'),
    screenPrice = prompt('Сколько будет стоить данная работа?'),
    rollback = 50,
    adaptive = confirm('“Нужен ли адаптив на сайте?');

let service1 = prompt('Какой дополнительный тип услуги нужен?'),
    servicePrice1 = prompt('Сколько это будет стоить?'),
    service2 = prompt('Какой дополнительный тип услуги нужен?'),
    servicePrice2 = prompt('Сколько это будет стоить?');

let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = Math.ceil(fullPrice * rollback / 100);


if (fullPrice >= 30000) {
    console.log('you get discount 10%');
} else if (fullPrice >= 15000 && fullprice < 30000) {
    console.log('you get discount 5%');
} else if (fullPrice >= 0 && fullprice < 15000) {
    console.log('no discount for you');
} else if (fullPrice < 0) {
    console.log('Something went wrong');
}

console.log(servicePercentPrice);
console.log(title);
console.log(fullPrice);
console.log(adaptive);
console.log(screens.length);
console.log(`Стоимость верстки экранов ${screenPrice} рублей/ долларов/гривен/юани`);
console.log(`Стоимость разработки сайта ${fullPrice} рублей/ долларов/гривен/юани`);
console.log(screens.toLowerCase().split(" "));
console.log(fullPrice * (rollback / 100));


