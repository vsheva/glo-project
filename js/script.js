"use strict";

const title = document.getElementsByTagName("h1")[0];
const btnPlus = document.querySelector(".screen-btn");
const otherItemsPercent = document.querySelectorAll(".other-items.percent");
const otherItemsNumber = document.querySelectorAll(".other-items.number");
const inputRange = document.querySelector("div.rollback input[type=range]");
const inputRangeValue = document.querySelector("div.rollback .range-value");
const btnStart = document.getElementsByClassName("handler_btn")[0];
const btnReset = document.getElementsByClassName("handler_btn")[1];

const total = document.getElementsByClassName("total-input")[0];
const totalCount = document.getElementsByClassName("total-input")[1];
const totalCountOther = document.getElementsByClassName("total-input")[2];
const totalFullCount = document.getElementsByClassName("total-input")[3];
const totalCountRollback = document.getElementsByClassName("total-input")[4];

let screens = document.querySelectorAll(".screen");

const appData = {
    title: "",
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 0,
    count: {},
    countScreens: 0,
    servicesPercent: {},
    servicesNumber: {},
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    fullPrice: 0,
    servicePercentPrice: 0,


    init:  function()  {
        appData.addTitle();
        inputRange.addEventListener("input", appData.addInputRange);
        btnStart.addEventListener("click", appData.start);
        btnPlus.addEventListener("click", appData.addScreenBlock);
    },


    checkScreenFields: function () {
        return !this.screens.find( function(item) {return item.price ===0});
    },

    addTitle: function()  {
        document.title = title.textContent;
    },


    start: function() {
        appData.addScreens();
        if (appData.checkScreenFields()) {
            appData.addServices();
            appData.addPrices();
            // appData.getServicePercentPrice();
            // appData.logger();
            appData.showResult();
        } else {
            alert("Заполните все поля правильно")
        }
    },


    showResult: function() {
        total.value = appData.screenPrice;
        totalCount.value = appData.countScreens;
        totalCountOther.value =
            appData.servicePricesPercent + appData.servicePricesNumber;
        totalFullCount.value = appData.fullPrice;
        totalCountRollback.value = appData.servicePercentPrice;
    },



    addScreens: function()  {
        screens = document.querySelectorAll(".screen");
        appData.screens.length = 0;

        screens.forEach(function (screen, index) {
            const select = screen.querySelector("select");
            const input = screen.querySelector("input");
            const selectName = select.options[select.selectedIndex].textContent;

                appData.screens.push({
                    id: index,
                    name: selectName,
                    price: +select.value * +input.value,
                });

                appData.count[selectName] = +input.value;
        });
    },


    addServices: function()  {
        otherItemsPercent.forEach(function (item) {
            const check = item.querySelector("input[type=checkbox]");
            const label = item.querySelector("label");
            const input = item.querySelector("input[type=text]");

            if (check.checked) {
                appData.servicesPercent[label.textContent] = +input.value;
            }
        });

        otherItemsNumber.forEach(function (item) {
            const check = item.querySelector("input[type=checkbox]");
            const label = item.querySelector("label");
            const input = item.querySelector("input[type=text]");

            if (check.checked) {
                appData.servicesNumber[label.textContent] = +input.value;
            }
        });
    },


    addScreenBlock: function()  {
        const cloneScreen = screens[0].cloneNode(true);
        btnPlus.before(cloneScreen);
    },


    addInputRange: function() {
        inputRangeValue.textContent = inputRange.value + "%";
        appData.rollback = inputRange.value;
    },


    //сумма допуслуг
    addPrices:  function(){
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price;
        }

        for (let key in appData.servicesNumber) {
            appData.servicePricesNumber += appData.servicesNumber[key];
        }

        for (let key in appData.servicesPercent) {
            appData.servicePricesPercent +=
                appData.screenPrice * (appData.servicesPercent[key] / 100);
        }

        for (let key in appData.count) {
            appData.countScreens += appData.count[key];
        }
        appData.fullPrice =
            +appData.screenPrice + appData.servicePricesPercent + appData.servicePricesNumber;


//итоговая стоимость за вычетом процента отката
        appData.servicePercentPrice = Math.ceil(
            appData.fullPrice - appData.fullPrice * (appData.rollback / 100)
        );
    },

    // getServicePercentPrice: function () {
    //     appData.servicePercentPrice = Math.ceil(
    //         appData.fullPrice - appData.fullPrice * (appData.rollback / 100)
    //     );
    // },
    // logger: function () {
    //     console.log(appData.fullPrice);
    //     console.log(appData.servicePercentPrice);
    //     console.log(appData.screens);
    // },
};

appData.init();

















































































































// let title = document.getElementsByTagName("h1")[0];
// let startBtn = document.getElementsByClassName('handler_btn')[0];
// let resetBtn = document.getElementsByClassName('handler_btn')[1];
// let buttonPlus = document.querySelector('.screen-btn');
// //let inputRange = document.querySelector(".rollback >.main-controls__range> input")        //.rollback input
// let inputRange = document.querySelector('input[type=range]')
// let inputRangeValue = document.querySelector(".rollback >.main-controls__range> .range-value")
// let otherItemsPercent = document.querySelectorAll('.other-items.percent');
// let otherItemsNumber = document.querySelectorAll('.other-items.number');
//
//
// let total = document.getElementsByClassName("total-input")[0];
// let totalCount = document.getElementsByClassName("total-input")[1];
// let totalCountOther = document.getElementsByClassName("total-input")[2];
// let fullTotalCount = document.getElementsByClassName("total-input")[3];
// let totalCountRollback = document.getElementsByClassName("total-input")[4];
//
// let screens = document.querySelectorAll(".screen")
//
//
// let appData = {
//     title: '',
//     screens: [],
//     screenPrice: 0,
//     adaptive: true,
//     servicesPercent: {},
//     servicesNumber: {},
//     servicePricesPercent: 0,
//     servicePricesNumber: 0,
//     screensCount: 0,
//     rollback: 0,
//     servicePercentPrice: 0,
//     fullPrice: 0,
//     //count: {},
//
//
//     init: function () {
//         appData.addTitle();
//         startBtn.addEventListener("click", appData.start)
//         buttonPlus.addEventListener("click", appData.addScreenBlock)
//
//         inputRange.addEventListener("input", function () {
//
//             inputRangeValue.textContent = inputRange.value + "%";
//             appData.rollback = inputRange.value
//         })
//     },
//
//     success: () => {
//         screens = document.querySelectorAll(".screen");
//         for (let i = 0; i < screens.length; i++) {
//             if (screens[i].querySelector("select").selectedIndex === 0 || screens[i].querySelector("input").value === "") {
//                 startBtn.disabled = true;
//                 break;
//             } else {
//                 startBtn.disabled = false;
//             }
//         }
//     },
//
//
//     start: function () {
//         appData.addScreens()
//         appData.addServices()
//         appData.addPrices()
//         appData.success()
//         console.log(appData);
//         //appData.logger();
//         appData.showResult();
//         appData.clear();
//     },
//
//
//     clear: function () {
//         appData.screens = [],
//             appData.screensCount = 0,
//             appData.screenPrice = 0, //
//             appData.fullPrice = 0,  //
//             appData.servicePercentPrice = 0,//
//             appData.servicePricesNumber = 0,//
//             appData.servicePricesPercent = 0,//
//             appData.servicesPercent = {},//
//             appData.servicesNumber = {}
//
//     },
//
//
//     showResult: function () {
//         total.value = appData.screenPrice
//         totalCount.value = appData.screensCount
//         totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber
//         fullTotalCount.value = appData.fullPrice
//         totalCountRollback.value = appData.servicePercentPrice
//     },
//
//     addScreens: function () {
//         screens = document.querySelectorAll(".screen")
//
//         screens.forEach(function (screen, index) {                          //
//             const select = screen.querySelector('select')
//             const input = screen.querySelector('input')
//             const selectName = select.options[select.selectedIndex].textContent;
//
//             appData.screens.push({
//                 id: index,
//                 name: selectName,
//                 price: +select.value * +input.value,
//                 //count: +input.value
//             });
//             appData.count[selectName] = +input.value;
//         });
//     },
//
//     addServices: function () {
//         otherItemsPercent.forEach(function (item) {
//             const check = item.querySelector('input[type=checkbox]')
//             const label = item.querySelector('label')
//             const input = item.querySelector('input[type=text]')
//
//             if (check.checked) {
//                 appData.servicesPercent[label.textContent] = +input.value
//             }
//         });
//
//         otherItemsNumber.forEach(function (item) {
//             const check = item.querySelector('input[type=checkbox]')
//             const label = item.querySelector('label')
//             const input = item.querySelector('input[type=text]')
//
//             if (check.checked) {
//                 appData.servicesNumber[label.textContent] = +input.value
//             }
//         });
//     },
//
//     addScreenBlock: function () {
//         const cloneScreen = screens[0].cloneNode(true);
//         //screens[screens.length - 1].after(cloneScreen);
//         buttonPlus.before(cloneScreen);
//     },
//
//     addTitle: function () {
//         document.title = title.textContent;
//     },
//
//     addPrices: function () {
//
//         // for (let key in appData.count) {
//         //     appData.screensCount += appData.count[key];
//         // }
//
//         for (let i = 0; i < appData.screens.length; i++) {
//             appData.screensCount += appData.screens[i].count            //подсчет количества экранов
//         }
//
//         for (let screen of appData.screens) {                                             // сумма всех доп. услуг
//             appData.screenPrice += +screen.price;
//         }
//
//         for (let key in appData.servicesNumber) {
//             appData.servicePricesNumber += appData.servicesNumber[key]
//         }
//
//         for (let key in appData.servicesPercent) {
//             appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100)
//         }
//         appData.fullPrice = +appData.screenPrice + appData.servicePricesNumber + appData.servicePricesPercent
//
//
//         // Стоимость за вычетом отката
//
//         appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
//     },
//
//     getServicePercentPrice: function () {
//         appData.servicePercentPrice = Math.ceil(
//             appData.fullPrice - appData.fullPrice * (appData.rollback / 100)
//         );
//     },
//
//     logger: function () {
//         console.log(appData.fullPrice);
//         console.log(appData.servicePercentPrice);
//         console.log(appData.screens);
//     },
// };
//
// appData.init();
//
//
//
//
















































