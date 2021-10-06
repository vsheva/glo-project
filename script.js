'use strict'


let lang = "ru";

if (lang === "ru") {
    console.log('Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье');
} else if (lang === "en") {
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

let  wdays = {
{'ru': 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'},
{'en':'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'},
};
console.log(wdays['ru']);
console.log (wdays['en']);




let namePerson;
(namePerson == 'Артем') ? console.log('директор') :
    (namePerson == 'Александр') ? console.log('преподаватель') :
        console.log('студент');



