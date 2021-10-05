'use strict'

let lang;

if (lang = "ru") {
    console.log('Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье');
} else if (lang = "en") {
    console.log('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');
}


switch (lang) {
    case "ru":
        console.log('Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье');
        break;
    case "en":
        console.log('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');
        break;
}


let wdaysRu = {'ru': 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'};
console.log(wdaysRu['ru']);
let wdaysEng= {'en':'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'};
console.log(wdaysEng['en']);


let namePerson;
(namePerson == 'Артем') ? console.log('директор') :
    (namePerson == 'Александр') ? console.log('преподаватель') :
        console.log('студент');



