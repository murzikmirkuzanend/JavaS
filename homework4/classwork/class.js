/*
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

function number(a, b, c) {
    if (a < b && a < c) {
        console.log(a)

    } else if (b < c && b < a)
    {
        console.log(b)

    } else {
         console.log(c)

    }
}

number(45,25,12);
*/

/*

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function number(a, b, c) {
    if (a > b && a > c) {
        console.log(a)

    } else if (b > c && b > a)
    {
        console.log(b)

    } else {
        console.log(c)

    }
}

number(25,55,12);
*/

/*
// - створити функцію яка повертає найбільше число з масиву
let masiv = [1, 15, 45, 25, 999, -15];

function maxs(maxWis){
    let max = masiv[1];
    for (const masivs of maxWis){
        if (masivs > max){
    max = masivs
        }
    }
    return max
}
console.log(maxs(masiv))
*/


/*
// - створити функцію яка повертає найменьше число з масиву

let masiv = [650,25,35,1,-985,666];
function mins(minWis) {
    let min = masiv[1];
    for (const masivs of minWis){
        if (masivs < min){
            min = masivs
        }
    }
    return min
}

console.log(mins(masiv))

*/


/*
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let masiv = [5, 6, 9, 13, 24];
function number(num) {
    let itog = 0;
    for (const nim of num){
        itog = itog + nim
    }
return itog
}

console.log(number(masiv))
*/
/*

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let masiv = [5, 6, 16];
function number(num) {
    let itog = 0;
    for (const nim of num){
        itog = itog + nim
    }
    return itog/num.length
}
console.log(number(masiv));
*/

/*
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

function minMax(num) {
    let min = arguments[0];
    let max = arguments[0];
    for (const element of arguments) {
        if (element > max) {
            max = element;
        }
        if (element < min) {
            min = element;
        }
    }
    console.log(max);
    return min;
}

console.log(minMax(152, -255, 153, 10000, 20))
*/

/*
// - створити функцію яка заповнює масив рандомними числами

function random (randomaizer){
    let number = []
    for (let i = 0; i < randomaizer; i++){
    number.push(Math.floor(Math.random()*25))
    }
    return number
}
console.log(random(5))

*/

/*
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
let masiv = []
function random(randomaizer) {
    for (let i = 0; i < 50; i++) {
        masiv[i] = Math.round(Math.random() * 100)
    }
    return randomaizer;
}

document.write(random(masiv))
*/

/*// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
let masiv = []
function random(randomaizer, limit) {
    for (let i = 0; i < 50; i++) {
        masiv[i] = Math.round(Math.random() * limit)
    }
    return masiv;
}

document.write(random(1,25))*/
/*// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let masiv = [1,2,3,4,5];
let arik = []
function reverse(masivs) {
    for (let i = masiv.length - 1, ri = 0; i >= 0; i--, ri++) {
        arik[ri] = masiv[i];
    }

    return masivs;
}

console.log(reverse(arik))*/

