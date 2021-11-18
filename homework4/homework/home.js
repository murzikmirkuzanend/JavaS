/*
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function number (a, b){
    let numbers = a * b;
    return numbers
}
console.log(number(25,150));

*/


/*
// - створити функцію яка обчислює та повертає площу кола з радіусом r

function kolo(r){
    let radius = r **2;
    const pi = 3.14;
    let formula = pi * radius;
    return formula;
}

console.log(kolo(35));

*/


/*
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r


function cilindr(h, r) {
    let radius = r ** 2;
    const pi = 3.14;
    let formula = pi * r * h;
    return formula;
}

console.log(cilindr(15,45))
*/


/*
// - створити функцію яка приймає масив та виводить кожен його елемент

let masiv = ['oleg', 'saikevych', 28, 'anguard']
function masivs(masiv){
    for (let i = 0; i < masiv.length; i++ )
        console.log(masiv[i])


}
masivs(masiv)
*/


/*
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function greeting (name, sname) {
    console.log(`<p>${name}</p>`);
    console.log(`<p>${sname}</p>`);
    document.write(`<p>${name}</p>`)
    document.write(`<p>${sname}</p>`)
}
greeting ('Oleg','Saikevych');

*/


/*
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function greeting (Dota){
    console.log(`<ul>`);
    console.log(`<li>${Dota}</li>`);
    console.log(`<li>${Dota}</li>`);
    console.log(`<li>${Dota}</li>`);
    console.log(`</ul>`);
}
greeting('Hero');
*/

/*
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function greeting(text, numbers) {
    console.log(`<ul>`);
    document.write(`<ul>`);
    for (let i = 0; i < numbers; i++) {
        console.log(`<li>${text}</li>`);
        document.write(`<li>${text}</li>`);
    }
    console.log(`</ul>`);
    document.write(`</ul>`);
}
greeting('Hero', 3);
*/


/*
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let masiv = [123, 'one', true];
function masivs(masiv) {
    console.log(`<ul>`)
    for(let i = 0; i < masiv.length; i++){
        console.log(`<li>${masiv[i]}</li>`)
    }
    console.log(`</ul>`)
}
masivs(masiv)
*/


/*
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let masiv = [{id: 1, name: 'Oleh', age: 25}, {id: 2, name: "Nastia", age: 25}, {id: 3, name: 'Viktoria', age: 2}]
function obgekt (masivs){
    for(const masivElement of masivs){
        document.write(`<div>${masivElement.id}. ${masivElement.name} - ${masivElement.age}</div>`)
    }
}
obgekt(masiv)*/
