'use strict'

let appData = {
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

    start: function () {
        appData.asking();
        appData.allServicePrices = appData.getAllServicePrices();
        appData.fullPrice = appData.getFullPrice();
        appData.getServicePercentPrice();
        appData.title = appData.getTitle();
        appData.getRollbackMessage();
        appData.logger();
    },

    asking: function () {
        appData.title = prompt('Как назывется ваш проект?', 'Калькулятор верстки');
        appData.screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные');

        do {
            appData.screenPrice = prompt('Сколько будет стоить данная работа?');
        } while (!appData.isNumber(appData.screenPrice));  //

        appData.adaptive = confirm('Нужен ли адаптив на сайте?');
    },

    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },

    getAllServicePrices: function () {
        let sum = 0;

        for (let i = 0; i < 2; i++) {
            //let price = 0

            if (i === 0) {
                appData.service1 = prompt('Какой дополнительный тип услуги нужен?');
            } else if (i === 1) {
                appData.service2 = prompt('Какой дополнительный тип услуги нужен?');
            }

            let servicePrice = prompt('Сколько это будет стоить?');

            while (!appData.isNumber(servicePrice)) {                                          //                  //изменил do while
                servicePrice = prompt('Сколько это будет стоить?');
            }

            sum += servicePrice;
        }

        return sum;
    },


    getFullPrice: function () {
        return appData.screenPrice + appData.allServicePrices;
    },

    getServicePercentPrice: function () {
        return Math.ceil(appData.fullPrice - (appData.fullPrice * appData.rollback / 100));
    },

    getTitle: function () {
        if (!appData.title) return title;
        //return appData.title[0].toUpperCase() + appData.title.slice(1);
        return appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase();
    },

    getRollbackMessage: function (price) {
        if (price >= 30000) {
            return ('Даем скидку в 10%');
        } else if (price >= 15000 && price < 30000) {
            return ('Даем скидку в 5%');
        } else if (price >= 0 && price < 15000) {
            return 'Скидка не предусмотрена';
        } else if (price < 0) {
            return ('Что то пошло не так');
        }
    },

    logger() {
        for (let key in appData) {
            console.log(`Ключ: ${key} значение: ${appData[key]} `)
        }
    },


}


appData.start();

// appData.isNumber();
// appData.asking();


// appData.allServicePrices = getAllServicePrices();
// appData.fullPrice = getFullPrice();
// appData.servicePercentPrice = getServicePercentPrice();
// appData.title = getTitle();
//
// console.log(appData.fullPrice);
// console.log(appData.servicePercentPrice);






