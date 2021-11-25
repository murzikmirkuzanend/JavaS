/*
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let one = 'hello world';
console.log(one.length);
let tho = 'lorem ipsum';
console.log(tho.length);
let tre = 'javascript is cool';
console.log(tre.length);

*/


/*
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let one = 'hello world'
let toUpperCase = one.toUpperCase();
console.log(toUpperCase);
let toLowerCase = toUpperCase.toLowerCase();
console.log(toLowerCase)


let tho = 'lorem ipsum';
let toUpperCase1 = tho.toUpperCase();
console.log(toUpperCase1);
let toLowerCase1 = toUpperCase1.toLowerCase();
console.log(toLowerCase1)


let tre = 'javascript is cool';
let toUpperCase2 = tre.toUpperCase();
console.log(toUpperCase2)
let toLowerCase2 = toUpperCase2.toLowerCase();
console.log(toLowerCase2)
*/


/*
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
let dirt = ' dirty string   ';
let trim = dirt.trim();
console.log(trim)
console.log(trim.length)
*/


/*
//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.

//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

let stringToarray = (str)=>{
   return  str.split(' ')
}
let str = 'Каждый охотник желает знать';
let mor = stringToarray(str);
console.log(mor);

*/

/*
//
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый


let delete_characters = (str, length) =>{
    return str.substr(0, length)
}
let str = 'Каждый охотник желает знать';
document.write(delete_characters(str ,7))
*/


/*
//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
let insert_dash = (str) => {
    let resol = str.split(' ').join('-').toUpperCase()
    return resol
}
let str = "HTML JavaScript PHP";
document.write(insert_dash(str))
console.log(insert_dash(str))
*/

/*
//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
//
let Up = (str) => {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1)
};
console.log(Up('hello okten'));

*/

//
//
/*
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.


let capitalize = (str) => {
    return str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
};
console.log(capitalize('okten hi you are welcome'));*/
