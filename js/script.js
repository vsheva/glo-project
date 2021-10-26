"use strict";

let title = document.getElementsByTagName("h1")[0];
let startBtn = document.getElementsByClassName('handler_btn')[0];
let resetBtn = document.getElementsByClassName('handler_btn')[1];
let buttonPlus = document.querySelector('.screen-btn');
let inputRange = document.querySelector(".rollback >.main-controls__range> input")
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
    ServicePricesPercent: 0,
    ServicePricesNumber: 0,
    rollback: 10,
    servicePercentPrice: 0,
    fullPrice: 0,
    init: function () {
        appData.addTitle();
        startBtn.addEventListener("click",  appData.start)
        buttonPlus.addEventListener("click", appData.addScreenBlock)
    },
    addTitle: function() {
        document.title =title.textContent;
    },

    start: function () {
        appData.addScreens()
        appData.addServices()
        appData.addPrices();
        // appData.getServicePercentPrices();

        // appData.logger();
        appData.showResult();
    },

    showResult: function () {
        total.value = appData.screenPrice
        totalCountOther.value = appData.ServicePricesPercent + appData.ServicePricesNumber
        fullTotalCount.value = appData.fullPrice
    },

    addScreens: function() {
        screens = document.querySelectorAll(".screen")

        screens.forEach(function (screen, index) {
            const select = screen.querySelector('select')
            const input = screen.querySelector('input')
            const selectName = select.options[select.selectedIndex].textContent

            appData.screens.push({
                id: index,
                name: selectName,
                price: +select.value * +input.value
            });
        })
        console.log(appData.screens);
    },

    addServices: function() {
      otherItemsPercent.forEach(function(item) {
          const check = item.querySelector('input[type=checkbox]')
          const label = item.querySelector('label')
          const input = item.querySelector('input[type=text]')

          if(check.checked){
              appData.servicesPercent[label.textContent] = +input.value
          }
      })
        otherItemsNumber.forEach(function(item) {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')

            if(check.checked){
                appData.servicesNumber[label.textContent] = +input.value
            }
        })

    },

    addScreenBlock: function () {
        const cloneScreen = screens[0].cloneNode(true);
        screens[screens.length - 1].after(cloneScreen);
    },

    addPrices: function () {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price;
        }

        for (let key in appData.servicesNumber) {
            appData.ServicePricesNumber += appData.servicesNumber[key]
        }

        for (let key in appData.servicesPercent) {
            appData.ServicePricesPercent += appData.screenPrice * (appData.servicesPercent[key]/100)
        }
        appData.fullPrice = +appData.screenPrice + appData.servicePricesNumber + appData.servicePricesPercent

    },

    getServicePercentPrices: function () {
        appData.servicePercentPrice = Math.ceil(
            appData.fullPrice - (appData.fullPrice * appData.rollback) / 100
        );
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


    logger: function () {
        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);
        console.log(appData.screens);
    },
};

appData.init();





























// appData.isNumber();
// appData.asking();

// appData.allServicePrices = getAllServicePrices();
// appData.fullPrice = getFullPrice();
// appData.servicePercentPrice = getServicePercentPrice();
// appData.title = getTitle();
//
// console.log(appData.fullPrice);
// console.log(appData.servicePercentPrice);






