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

let leftInputs = document.querySelectorAll("div.main-controls__views element input[type=text]");
let select = document.querySelector("div.screen .select");


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


    init: function () {
        appData.addTitle();
        inputRange.addEventListener("input", appData.addInputRange.bind(this));
        btnStart.addEventListener("click", appData.start.bind(this));
        btnPlus.addEventListener("click", appData.addScreenBlock.bind(this));
        btnReset.addEventListener("click", appData.reset.bind(this));
    },


    checkScreenFields: function () {
        return !this.screens.find(function (item) {
            return item.price === 0
        });
    },

    addTitle: function () {
        document.title = title.textContent;
    },


    start: function () {
        this.addScreens();

        if (this.checkScreenFields()) {
            btnStart.style.display = "none";
            btnReset.style.display = "block"
            this.addServices();
            this.addPrices();
            // appData.getServicePercentPrice();
            // appData.logger();
            this.showResult();
            this.allDisabled();

        } else {
            alert("Заполните все поля правильно")
        }

    },


    showResult: function () {
        total.value = this.screenPrice;
        totalCount.value = this.countScreens;
        totalCountOther.value =
            this.servicePricesPercent + this.servicePricesNumber;
        totalFullCount.value = this.fullPrice;
        totalCountRollback.value = this.servicePercentPrice;
    },


    //// восстанавливаю все свойства обьекта к начальному

    clear: function () {
        this.title = "",
            this.screens = [],
            this.screenPrice = 0,
            this.adaptive = true,
            this.rollback = 0,
            this.count = {},
            this.countScreens = 0,
            this.servicesPercent = {},
            this.servicesNumber = {},
            this.servicePricesPercent = 0,
            this.servicePricesNumber = 0,
            this.fullPrice = 0,
            this.servicePercentPrice = 0
    },

    reset: function () {

        this.clear();
        screens = document.querySelectorAll(".screen");

        for (let i = 1; i < screens.length; i++) {
            screens[i].remove();
        }

        screens[0].querySelector('input').value = '';
        screens[0].querySelector("input").placeholder = "Количество экранов";
        screens[0].querySelector('select').options[0].selected = true;
        btnStart.style.display = "block";
        btnReset.style.display = "none"

        //this.allDisabled(); //
        this.showResult();
        inputRange.value = 0;
        inputRangeValue.textContent = inputRange.value + "%";

    },


///////////////////////////////// пункт 3 задания   ////////////////////////////////////////
    allDisabled: function () {
        //select = document.querySelector("select")
        screens = document.querySelectorAll(".screen");

        if (btnStart.style.display = "none") {
            screens.forEach((element) => {
                element.querySelector("select").setAttribute("disabled", "true");
                element.querySelector('input[type=text]').setAttribute("disabled", "true");
                ;
            })

        } else if (btnStart.style.display = "block") {
            screens.forEach((element) => {
                element.querySelector("select").removeAttribute("disabled");
                element.querySelector('input[type=text]').removeAttribute("disabled");
                ;
            })
        }
    },

////////////////////////////////////////////////////////////////

    addScreens: function () {
        screens = document.querySelectorAll(".screen");
        appData.screens.length = 0;

        screens.forEach((screen, index) => {
            const select = screen.querySelector("select");
            const input = screen.querySelector("input");
            const selectName = select.options[select.selectedIndex].textContent;

            this.screens.push({
                id: index,
                name: selectName,
                price: +select.value * +input.value,
            });

            this.count[selectName] = +input.value;
        });
    },


    addServices: function () {
        otherItemsPercent.forEach((item) => {
            const check = item.querySelector("input[type=checkbox]");
            const label = item.querySelector("label");
            const input = item.querySelector("input[type=text]");

            if (check.checked) {
                this.servicesPercent[label.textContent] = +input.value;
            }
        });

        otherItemsNumber.forEach((item) => {
            const check = item.querySelector("input[type=checkbox]");
            const label = item.querySelector("label");
            const input = item.querySelector("input[type=text]");

            if (check.checked) {
                this.servicesNumber[label.textContent] = +input.value;
            }
        });
    },


    addScreenBlock: function () {
        const cloneScreen = screens[0].cloneNode(true);
        btnPlus.before(cloneScreen);
    },


    addInputRange: function () {
        inputRangeValue.textContent = inputRange.value + "%";
        this.rollback = inputRange.value;
    },


    //сумма допуслуг
    addPrices: function () {
        for (let screen of this.screens) {
            this.screenPrice += +screen.price;
        }

        for (let key in this.servicesNumber) {
            this.servicePricesNumber += this.servicesNumber[key];
        }

        for (let key in this.servicesPercent) {
            this.servicePricesPercent +=
                this.screenPrice * (this.servicesPercent[key] / 100);
        }

        for (let key in this.count) {
            this.countScreens += this.count[key];
        }
        this.fullPrice =
            +this.screenPrice + this.servicePricesPercent + this.servicePricesNumber;


//итоговая стоимость за вычетом процента отката
        this.servicePercentPrice = Math.ceil(
            this.fullPrice - this.fullPrice * (this.rollback / 100)
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


































































































//
// const title = document.getElementsByTagName("h1")[0];
// const btnPlus = document.querySelector(".screen-btn");
// const otherItemsPercent = document.querySelectorAll(".other-items.percent");
// const otherItemsNumber = document.querySelectorAll(".other-items.number");
// const inputRange = document.querySelector("div.rollback input[type=range]");
// const inputRangeValue = document.querySelector("div.rollback .range-value");
// const btnStart = document.getElementsByClassName("handler_btn")[0];
// const btnReset = document.getElementsByClassName("handler_btn")[1];
//
// const total = document.getElementsByClassName("total-input")[0];
// const totalCount = document.getElementsByClassName("total-input")[1];
// const totalCountOther = document.getElementsByClassName("total-input")[2];
// const totalFullCount = document.getElementsByClassName("total-input")[3];
// const totalCountRollback = document.getElementsByClassName("total-input")[4];
//
// let screens = document.querySelectorAll(".screen");
//
// const appData = {
//     title: "",
//     screens: [],
//     screenPrice: 0,
//     adaptive: true,
//     rollback: 0,
//     count: {},
//     countScreens: 0,
//     servicesPercent: {},
//     servicesNumber: {},
//     servicePricesPercent: 0,
//     servicePricesNumber: 0,
//     fullPrice: 0,
//     servicePercentPrice: 0,
//
//
//     init:  function() {
//         appData.addTitle();
//         inputRange.addEventListener("input", appData.addInputRange);
//         btnStart.addEventListener("click", appData.start);
//         btnPlus.addEventListener("click", appData.addScreenBlock);
//     },
//
//
//     // checkScreenFields: function () {
//     //     return !this.screens.find( function(item) {item.price ===0});
//     // },
//
//     addTitle: function()  {
//         document.title = title.textContent;
//     },
//
//
//     start: function()  {
//         appData.addScreens();
//         // if (appData.checkScreenFields()) {
//         appData.addServices();
//         appData.addPrices();
//         // appData.getServicePercentPrice();
//         // appData.logger();
//         appData.showResult();
//         // }
//     },
//
//
//     showResult: function() {
//         total.value = this.screenPrice;
//         totalCount.value = this.countScreens;
//         totalCountOther.value =
//             this.servicePricesPercent + this.servicePricesNumber;
//         totalFullCount.value = this.fullPrice;
//         totalCountRollback.value = this.servicePercentPrice;
//     },
//
//
//
//     addScreens: function() {
//         screens = document.querySelectorAll(".screen");
//
//         screens.forEach( (screen, index) => {
//             const select = screen.querySelector("select");
//             const input = screen.querySelector("input");
//             const selectName = select.options[select.selectedIndex].textContent;
//
//             if (select.selectedIndex === 0) {
//                 alert("Выберите хоть один тип экрана ");
//             } else if (input.value === "") {
//                 alert("Укажите количество экранов");
//             } else {
//                 this.screens.push({
//                     id: index,
//                     name: selectName,
//                     price: +select.value * +input.value,
//                 });
//
//                 this.count[selectName] = +input.value;
//             }
//         });
//     },
//
//
//     addServices: function() {
//         otherItemsPercent.forEach( (item) => {
//             const check = item.querySelector("input[type=checkbox]");
//             const label = item.querySelector("label");
//             const input = item.querySelector("input[type=text]");
//
//             if (check.checked) {
//                 this.servicesPercent[label.textContent] = +input.value;
//             }
//         });
//
//         otherItemsNumber.forEach((item) => {
//             const check = item.querySelector("input[type=checkbox]");
//             const label = item.querySelector("label");
//             const input = item.querySelector("input[type=text]");
//
//             if (check.checked) {
//                 appData.servicesNumber[label.textContent] = +input.value;
//             }
//         });
//     },
//
//
//     addScreenBlock: function()  {
//         const cloneScreen = screens[0].cloneNode(true);
//         screens[screens.length - 1].after(cloneScreen);
//     },
//
//
//     addInputRange: function(){
//         inputRangeValue.textContent = inputRange.value + "%";
//         appData.rollback = inputRange.value;
//     },
//
//
//     //сумма допуслуг
//     addPrices:  function() {
//         for (let screen of this.screens) {
//             this.screenPrice += +screen.price;
//         }
//
//         for (let key in this.servicesNumber) {
//             this.servicePricesNumber += this.servicesNumber[key];
//         }
//
//         for (let key in this.servicesPercent) {
//             this.servicePricesPercent +=
//                 this.screenPrice * (this.servicesPercent[key] / 100);
//         }
//
//         for (let key in this.count) {
//             this.countScreens += this.count[key];
//         }
//         this.fullPrice =
//             +this.screenPrice + this.servicePricesPercent + this.servicePricesNumber;
//
//
// //итоговая стоимость за вычетом процента отката
//         this.servicePercentPrice = Math.ceil(
//             this.fullPrice - this.fullPrice * (this.rollback / 100)
//         );
//     },
//
//     // getServicePercentPrice: function () {
//     //     appData.servicePercentPrice = Math.ceil(
//     //         appData.fullPrice - appData.fullPrice * (appData.rollback / 100)
//     //     );
//     // },
//     // logger: function () {
//     //     console.log(appData.fullPrice);
//     //     console.log(appData.servicePercentPrice);
//     //     console.log(appData.screens);
//     // },
// };
//
// appData.init();
//
//
//















































