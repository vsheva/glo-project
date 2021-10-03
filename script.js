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









