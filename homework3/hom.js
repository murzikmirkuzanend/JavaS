/*
/!*
створити масив з:
    - з 5 числових значень
- з 5 стічкових значень
- з 5 значень стрічкового, числового та булевого типу
- та вивести його в консоль*!/

let number = [1, 2, 3, 4, 5];
let string = ['one', 'tho', 'three','four','five'];
let bool = [true , 'tho', 1995, false, 12];
console.log(number);
console.log(string);
console.log(bool);
*/


/*/!*Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль*!/


let one = [];
one[0] = 'Привіт';
one[1] = 'Тобі є';
one[2] = 18;
one[3] = 'років';
one[4] = 'для'
one[5] = 'перегляду'
one[6] = 'цього контенту?'
console.log(one);
document.write(one);*/


/*/!*- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
 - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
 - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
 - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.*!/


 for (let i = 0; i < 10; i++) {
     document.write(`<div>Taxt</div>`);
}
for (let i = 1; i < 11; i++)
{
    document.write(`<div>${i}text row</div>`)
}

i = 0;
while (i < 20)
{
    document.write(`<div><h1>Taxt</h1></div>`);
    i++;
}


i = 0;
while (i < 20)
{
    document.write(`<div>${i}<h1>text row</h1></div>`)
    i++;
}*/

/*
/!*- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи*!/


let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for ( i = 0; i < number.length; i++){
    console.log(number[i]);
}
let string = ['one','tho','main','old', 'wor', 'kor', 'lol', 'mon', 'sos', 'room'];
for ( i = 0; i < string.length; i++){
    console.log(string[i]);
}
let boolean = ['one', 2, false, true, 'klon', 6, 'for', 22, 33, 150];
for ( i = 0; i < boolean.length; i++){
    console.log(boolean[i]);
}

let number = ['one', 2, false, true, 'klon', 6, 'for', 22, 33, 150];
for ( i = 0; i < number.length; i++){
    if (typeof number[i] === 'number')
    console.log(number[i]);
}
let string = ['one', 2, false, true, 'klon', 6, 'for', 22, 33, 150];
for ( i = 0; i < string.length; i++){
    if (typeof string[i] === 'string')
        console.log(string[i]);
}
let boolean = ['one', 2, false, true, 'klon', 6, 'for', 22, 33, 150];
for ( i = 0; i < boolean.length; i++){
    if (typeof boolean[i] === 'boolean')
        console.log(boolean[i]);
}*/

/*- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write


let main = [];
main[0] = 'Nastia';
main[1] = 346;
main[2] = 222;
main[3] = 'gdp';
main[4] = 'Dota';
main[5] = 'LOLka';
main[6] = 'Forza';
main[7] = false;
main[8] = true;
main[9] = false;

for (let i = 0; i < main.length; i++) {
    console.log(main[i]);
}

for (let i = 0; i < 10; i++) {
    console.log('page' + i + ' ');
    document.write('page' + i + ' ');
}


for (let i = 0; i < 100; i++) {
    console.log('page' + i + ' ');
    document.write('page' + i + ' ');
}


 for (let i = 0; i < 100; i+=2) {
     console.log('page' + i + ' ');
     document.write('page' + i + ' ');
 }

 for (let i = 0; i < 100; i++) {
     if(i % 2 === 0){
         console.log('page' + i + ' ');
         document.write('page' + i + ' ');
     }
 }

 for (let i = 0; i < 100; i++) {
     if(i % 2 === 1){
         console.log('page' + i + ' ');
         document.write('page' + i + ' ');
     }
}*/
