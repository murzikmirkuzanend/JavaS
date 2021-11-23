// Всі функції повинні бути описані стрілочним типом!!!


/*
//     - створити функцію яка обчислює та повертає площу прямокутника висотою

let fan = (a, b) => a * b;

fan(10, 25);
console.log(fan(10, 25))
*/


/*
// - створити функцію яка обчислює та повертає площу кола

let kolo = (r)=> {
    let radius = r **2;
    const p = 3.14;
    let form = p * radius;
    return form
}
console.log(kolo(5))
*/

/*// - створити функцію яка обчислює та повертає площу циліндру


let cili = (h,r) => {
    let radius = r **2;
    const pi = 3.14;
    let formula = pi * r * h;
    return formula;
}
console.log(cili(10,115))*/
/*
// - створити функцію яка приймає масив та виводить кожен його елемент
let masiv = (...l) =>{
    console.log(l)
}
masiv( 1,2,3,4,5,6,)
*/

/*
// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
let parag = (name) => {
  document.write(`<p>${name}</p>`)
}
parag('lol')
*/


/*// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let fun = (taxt) => {
    console.log(`<ul>`);
    console.log(`<li>${taxt}</li>`);
    console.log(`<li>${taxt}</li>`);
    console.log(`<li>${taxt}</li>`);
    console.log(`</ul>`);
}
fun('lol')*/



/*
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let greeting = (text, numbers)=> {
    document.write(`<ul>`);
    for (let i = 0; i < numbers; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
greeting('Midl', 7);
*/

/*
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let masiv = [123, 'one', true];


const masivs = (masiv) => {
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

const obgekt = (masivs) => {
    for(const masivElement of masivs){
        document.write(`<div>${masivElement.id}. ${masivElement.name} - ${masivElement.age}</div>`)
    }
}
obgekt(masiv)*/
