let title = 'project',
    screens = 'Simple, Complex, Interactive',
    screenPrice = 21,
    rollback = 50,
    fullPrice = 100,
    adaptive = true;

console.log(title);
console.log(fullPrice);
console.log(adaptive);
console.log(screens.length);
console.log(`Стоимость верстки экранов ${screenPrice} рублей/ долларов/гривен/юани`);
console.log(`Стоимость разработки сайта ${fullPrice} рублей/ долларов/гривен/юани`);
console.log(screens.toLowerCase().split(" "));
console.log(fullPrice * (rollback/100));


