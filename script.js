"use strict";

let appData = {
    title: "",
    screens: [],
    screenPrice: 0,
    adaptive: true,
    services: {},
    allServicePrices: 0,
    rollback: 10,
    servicePercentPrice: 0,
    fullPrice: 0,

    asking: function () {
        let title;                                                                                              //appData.title = prompt("Как назывется ваш проект?");
        do {
            title = prompt('Как называется ваш проект?', 'Калькулятор верстки')
        } while (appData.isString(title))


        for (let i = 0; i < 2; i++) {
            let name                                                                                            //= prompt("Какие типы экранов нужно разработать?");
            let servicePrice = 0;

            do {
                name = prompt("Какие типы экранов нужно разработать?");
            } while (appData.isString(name))


            do {
                servicePrice = prompt("Сколько будет стоить данная работа?");
            } while (!appData.isNumber(servicePrice));


            appData.screens.push({id: i, name: name, servicePrice: servicePrice});                              //можно сократить
        }

        for (let i = 0; i < 2; i++) {
            let name                                                                                            // = prompt("Какой дополнительный тип услуги нужен?");
            let servicePrice = 0;

            do {
                name = prompt("Какой дополнительный тип услуги нужен?");
            } while (appData.isString(title))


            do {
                servicePrice = prompt("Сколько это будет стоить?");
            } while (!appData.isNumber(servicePrice));


            appData.services[name] = +servicePrice;
        }

        appData.adaptive = confirm("Нужен ли адаптив на сайте?");
    },

    addPrices: function () {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.servicePrice;
        }

        for (let key in appData.services) {
            appData.allServicePrices += appData.services[key];
        }
    },

    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },

    isString: function (str) {
        return !isNaN(parseFloat(str)) && isFinite(str);
    },

    getFullPrice: function () {
        appData.fullPrice = +appData.screenPrice + +appData.allServicePrices;
    },

    getServicePercentPrices: function () {
        appData.servicePercentPrice = Math.ceil(
            appData.fullPrice - (appData.fullPrice * appData.rollback) / 100
        );
    },

    getTitle: function () {
        appData.title = appData.title.trim().substr(0).toUpperCase() + appData.title.trim().substr(1).toLowerCase();
        //appData.title = appData.title.trim().charAt(0).toUpperCase() + appData.title.trim().substr(1).toLowerCase()
    },

    getRollbackMessage: function (price) {
        if (price >= 30000) {
            return "Даем скидку в 10%";
        } else if (price >= 15000 && price < 30000) {
            return "Даем скидку в 5%";
        } else if (price >= 0 && price < 15000) {
            return "Скидка не предусмотрена";
        } else if (price < 0) {
            return "Что то пошло не так";
        }
    },

    start: function () {
        appData.asking();
        appData.addPrices();
        appData.getFullPrice();
        appData.getServicePercentPrices();
        appData.getTitle();
        appData.logger();
    },

    logger: function () {
        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);
        console.log(appData.screens);
    },
};

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


