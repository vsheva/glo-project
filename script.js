'use strict'

let days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "<i>Суббота</i>", "<i>Воскресенье</i>"];

let today_index = (6 + new Date().getDay()) % 7;
days[today_index] = `<b>${ days[today_index] }</b>`;

document.body.insertAdjacentHTML("beforeEnd", days.join("<br>"));
