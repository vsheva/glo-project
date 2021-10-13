'use strict'

const appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    adaptive: true,
    service1: '',
    service2: '',
    allServicePrices: 0,
    rollback: 10,
    servicePercentPrice: 0,
    fullPrice: 0,
    asking: function () {
        appData.title = prompt('Как назывется ваш проект?', 'Калькулятор верстки');
        appData.screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные');

        do {
            appData.screenPrice = prompt('Сколько будет стоить данная работа?');
        } while (!isNumber(appData.screenPrice));

        appData.adaptive = confirm('Нужен ли адаптив на сайте?');
    }
}



const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};


const getAllServicePrices = function () {
    let sum = 0;

    for (let i = 0; i < 2; i++) {
        //let price = 0

        if (i === 0) {
            appData.service1 = prompt('Какой дополнительный тип услуги нужен?');
        } else if (i === 1) {
            appData.service2 = prompt('Какой дополнительный тип услуги нужен?');
        }

        let servicePrice = prompt('Сколько это будет стоить?');

        while (!isNumber(servicePrice)) {                                                            //изменил do while
            servicePrice = prompt('Сколько это будет стоить?');
        }

        sum += servicePrice;
    }

    return sum;
};


const getFullPrice = function () {
    return appData.screenPrice + appData.allServicePrices;
}

const getServicePercentPrice = function () {
    // console.log('fullPrice ', typeof fullPrice);
    // console.log('rollback', rollback);
    return Math.ceil(appData.fullPrice - (appData.fullPrice * appData.rollback / 100));
}

const getTitle = function () {
    if (!appData.title) return title;
    return appData.title[0].toUpperCase() + appData.title.slice(1);
     //return appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase();
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

appData.asking();
appData.allServicePrices = getAllServicePrices();
appData.fullPrice = getFullPrice();
appData.servicePercentPrice = getServicePercentPrice();
appData.title = getTitle();

console.log(appData.fullPrice);
console.log(appData.servicePercentPrice);






