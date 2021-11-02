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


    init:  () => {
        appData.addTitle();
        inputRange.addEventListener("input", appData.addInputRange);
        btnStart.addEventListener("click", appData.start);
        btnPlus.addEventListener("click", appData.addScreenBlock);
    },


    // checkScreenFields: function () {
    //     return !this.screens.find( function(item) {item.price ===0});
    // },

    addTitle: () => {
        document.title = title.textContent;
    },


    start: () => {
        appData.addScreens();
        // if (appData.checkScreenFields()) {
        appData.addServices();
        appData.addPrices();
        // appData.getServicePercentPrice();
        // appData.logger();
        appData.showResult();
        // }
    },


    showResult: ()=> {
        total.value = appData.screenPrice;
        totalCount.value = appData.countScreens;
        totalCountOther.value =
            appData.servicePricesPercent + appData.servicePricesNumber;
        totalFullCount.value = appData.fullPrice;
        totalCountRollback.value = appData.servicePercentPrice;
    },



    addScreens: () => {
        screens = document.querySelectorAll(".screen");

        screens.forEach(function (screen, index) {
            const select = screen.querySelector("select");
            const input = screen.querySelector("input");
            const selectName = select.options[select.selectedIndex].textContent;

            if (select.selectedIndex === 0) {
                alert("Выберите хоть один тип экрана ");
            } else if (input.value === "") {
                alert("Укажите количество экранов");
            } else {
                appData.screens.push({
                    id: index,
                    name: selectName,
                    price: +select.value * +input.value,
                });

                appData.count[selectName] = +input.value;
            }
        });
    },


    addServices: () => {
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


    addScreenBlock: () => {
        const cloneScreen = screens[0].cloneNode(true);
        screens[screens.length - 1].after(cloneScreen);
    },


    addInputRange: () => {
        inputRangeValue.textContent = inputRange.value + "%";
        appData.rollback = inputRange.value;
    },


    //сумма допуслуг
    addPrices:  () =>{
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


















































