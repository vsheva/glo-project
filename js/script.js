"use strict";

let title = document.getElementsByTagName("h1")[0];
let startBtn = document.getElementsByClassName('handler_btn')[0];
let resetBtn = document.getElementsByClassName('handler_btn')[1];
let buttonPlus = document.querySelector('.screen-btn');
//let inputRange = document.querySelector(".rollback >.main-controls__range> input")        //.rollback input
let inputRange = document.querySelector('input[type=range]')
let inputRangeValue = document.querySelector(".rollback >.main-controls__range> .range-value")
let otherItemsPercent = document.querySelectorAll('.other-items.percent');
let otherItemsNumber = document.querySelectorAll('.other-items.number');


let total = document.getElementsByClassName("total-input")[0];
let totalCount = document.getElementsByClassName("total-input")[1];
let totalCountOther = document.getElementsByClassName("total-input")[2];
let fullTotalCount = document.getElementsByClassName("total-input")[3];
let totalCountRollback = document.getElementsByClassName("total-input")[4];

let screens = document.querySelectorAll(".screen")


let appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    servicesPercent: {},
    servicesNumber: {},
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    screensCount: 0,
    rollback: 0,
    servicePercentPrice: 0,
    fullPrice: 0,


    init: function () {
        appData.addTitle();
        startBtn.addEventListener("click", appData.start)
        buttonPlus.addEventListener("click", appData.addScreenBlock)

        inputRange.addEventListener("input", function () {

            inputRangeValue.textContent = inputRange.value + "%";
            appData.rollback = inputRange.value
        })
    },

    addTitle: function () {
        document.title = title.textContent;
    },

    start: function () {
        appData.addScreens()
        appData.addServices()
        appData.addPrices()
        appData.success()
        // appData.logger();
        appData.showResult();

    },


    success: function () {

        screens = document.querySelectorAll(".screen")

        screens.forEach(function (screen) {
            const select = screen.querySelector('select')
            const input = screen.querySelector('input')


            // if (select.selectedIndex == 0 || input.value === "") {
            //     startBtn.disabled = true;
            // } else {
            //     startBtn.disabled = false;
            // }

            if (select.selectedIndex === 0) {
                alert("Выберите не менее одного типа экрана ");
            } else if (input.value === "") {
                alert("Укажите количество экранов");
            }
        })
    },


    showResult: function () {
        total.value = appData.screenPrice
        totalCount.value = appData.screensCount
        totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber
        fullTotalCount.value = appData.fullPrice
        totalCountRollback.value = appData.servicePercentPrice
    },

    addScreens: function () {
        screens = document.querySelectorAll(".screen")

        screens.forEach(function (screen, index) {
            const select = screen.querySelector('select')
            const input = screen.querySelector('input')
            const selectName = select.options[select.selectedIndex].textContent

            appData.screens.push({
                id: index,
                name: selectName,
                price: +select.value * +input.value,
                count: +input.value
            })
        })
        console.log(appData.screens);
    },

    addServices: function () {
        otherItemsPercent.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')

            if (check.checked) {
                appData.servicesPercent[label.textContent] = +input.value
            }
        })
        otherItemsNumber.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')

            if (check.checked) {
                appData.servicesNumber[label.textContent] = +input.value
            }
        })
    },

    addScreenBlock: function () {
        const cloneScreen = screens[0].cloneNode(true);
        //screens[screens.length - 1].after(cloneScreen);
        buttonPlus.before(cloneScreen);
    },

    addPrices: function () {

        for (let i = 0; i < appData.screens.length; i++) {
            appData.screensCount = appData.screensCount + appData.screens[i].count            //подсчет количества экранов
        }

        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price;
        }

        for (let key in appData.servicesNumber) {
            appData.servicePricesNumber += appData.servicesNumber[key]
        }

        for (let key in appData.servicesPercent) {
            appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100)
        }
        appData.fullPrice = +appData.screenPrice + appData.servicePricesNumber + appData.servicePricesPercent


        // Стоимость за вычетом отката

        appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
    },

    logger: function () {
        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);
        console.log(appData.screens);
    },
};

appData.init();






















































