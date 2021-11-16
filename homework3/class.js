/*зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:*/

let number = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

/*  //1. перебрати його циклом while
i = 0;
while (i < 10){
    console.log(number[i]);
    i++;
}
*/

/*  //2. перебрати його циклом for
for ( i = 0; i < 10; i++){
    console.log(number[i])
}*/

/* //3. перебрати циклом while та вивести  числа тільки з непарним індексом

i = 0;
while (i < 10)
{   if( i % 2 === 1)
    console.log(number[i]);
    i++;
}*/

/*  //4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let i = 0; i < 10; i++) {
    if (i % 2 === 1) {
        console.log(number[i])
    }
}*/


/*   //5. перебрати циклом while та вивести  числа тільки парні  значення
i = 0;
while (i < 10)
{   if( i % 2 === 0)
   console.log(number[i]);
   i++;}
*/

/*   //6. перебрати циклом for та вивести  числа тільки парні  значення

for (let i = 0; i < number.length; i++){
   if( i % 2 === 0){
       console.log(number[i])
   }
}*/

/* //7. замінити кожне число кратне 3 на слово "okten"
for (i = 0; i < number.length;i++){
if (number[i]%3 === 0){
 number[i] = 'okten';
}
}
console.log(number)
*/

/*        //8. вивести масив в зворотньому порядку.
for(let i = number.length-1; i >= 0 ; i--){
    console.log(number[i])
}*/

//9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)*/
/*//1. перебрати його циклом while

 let i = number.length-1;
 while ( i >= 0){
     console.log(number[i])
     i--;
 }*/
/*//2. перебрати його циклом for
for (let i = number.length - 1; i >= 0; i--){
    console.log(number[i])
}*/
/*
//3. перебрати циклом while та вивести  числа тільки з непарним індексом
let i = number.length-1;
while (i >= 0){
    if (i % 2 === 1)
        console.log(number[i])
    i--;
}*/

/*
//4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let i = number.length - 1; i >= 0; i--) {
    if (i % 2 === 1)
        console.log(number[i])
        }*/
/*
//5. перебрати циклом while та вивести  числа тільки парні  значення
let i = number.length - 1;
while (i >= 0) {
    if (i % 2 === 0)
        console.log(number[i])
    i--;
        }*/
/*//6. перебрати циклом for та вивести  числа тільки парні  значення
for (let i = number.length - 1; i >= 0; i--) {
    if (i % 2 === 0)
        console.log(number[i])
}*/
/*
//7. замінити кожне число кратне 3 на слово "okten"
for (let i = number.length - 1; i >= 0; i--) {
    if (number[i] % 3 === 0) {
        number[i] = "okten";
    }
    console.log(number[i]);}
*/
