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
console.log(fullPrice * (rollback / 100));


// Complicated

function mult(num) {
    let stringNum = num.toString();
    let total = 1;
    for (let i = 0; i < stringNum.length; i++) {
        total = total * stringNum[i];
    }
    let z = total ** 3;
    let digit = (z).toString().split('').slice(0, 2);

    console.log(total);
    console.log(z);
    console.log(digit.join(''));

}

mult(266219);
