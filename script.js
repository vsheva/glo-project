'use strict'
let title = prompt('What is the name of your project?'),
    screens = prompt('What type of screens should be developed?'),
    screenPrice = prompt('How much will this work cost?'),
    rollback = 50,
    adaptive = confirm('Do I need an adaptive on the site?');

let service1 = prompt('What additional services are needed?'),
    servicePrice1 = prompt('What is the price of the service?'),
    service2 = prompt('What additional services are needed?'),
    servicePrice2 = prompt('What is the price of the service?');

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


