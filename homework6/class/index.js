/*// - Дано список імен.
let n1 = 'Harry..Potter'
const normal = (name) => {
  let n1 = name.replaceAll('..',' ');
  return n1
}
console.log(normal(n1))



let n2 = 'Ron---Whisley'
const normal1 = (name) => {
  let n2 = name.replaceAll('---',' ');
  return n2
}
console.log(normal1(n2))
let n3 = 'Hermione__Granger'
const normal2 = (name) => {
  let n3 = name.replaceAll('__',' ');
  return n3
}
console.log(normal2(n3))
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'*/

/*

//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

const random = (randomaizer, limit) => {
    let masiv = []
    for (let i = 0; i < randomaizer; i++) {
        masiv.push(Math.floor(Math.random() * limit))
    }
    return masiv
}
// document.write(random(1, 100))
*/

/*
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
let random1 = random(20, 25);
random1.sort((a, b) => a - b);
console.log(random1)*/

/*
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
відфільтрувати  його за допомоги filter, залишивши тільки парні числа
let random1 = random(20, 25);
random1.filter(value => value % 2 === 0)
console.log(random1)*/


/*// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let random1 = random(20, 25);
random1.map(value => value.toString())
console.log(random1)*/
/*

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
//

let sortNums = (number, direction) => {
    let nan = []
    if (direction === 'asc') {
        sortNumbers = number.sort((a, b) => a - b)
    } else if (direction === 'desc') {
        sortNumbers = number.sort((a, b) => b - a)
    }
    return sortNumbers
};
console.log(sortNums([11, 21, 3], 'asc'))
console.log(sortNums([11, 21, 3], 'desc'))
*/


//
/*
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration

console.log(coursesAndDurationArray.sort((a, b)=> a.monthDuration - b.monthDuration))
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log(coursesAndDurationArray.filter(value => value.monthDuration >5))
*/
