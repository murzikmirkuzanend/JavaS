// // Взяти файл template_2.html та працювати в ньому
// // 1) Напишіть код, який :
// // a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
// let elementById = document.getElementById('main_header');
// elementById.classList.add('sep2021')
//
//
//
//
// /*// b) робить шириниу елементу ul 400px
// let elementsByTagName = document.getElementsByTagName("ul");
// elementsByTagName.style.width = '400px';*/
//
// // c) робить шириниу всіх елементів з класом linkList шириною 50%
//
// let elementsByClassName = document.getElementsByClassName("linkList");
// for (const elementsByClass of elementsByClassName){
//     elementsByClass.style.width = '50%'
// }
//
//
// // d) отримує текст який зберігається в елементі з класом listElement2
// function addTax(Text) {
//     let elementsBy = document.getElementsByClassName('listElement2');
//     elementsBy.innerText = Text;
// }
//
//
//
// // e) отримує всі елементи li та змінює ім колір фону на сірий
//
// let elementsByTagName1 = document.getElementsByTagName('li');
// for (const li of elementsByTagName1){
//     li.style.background = 'silver'
// }
//
// // f) отримує всі елементи 'a' та додає їм клас anchor
//
// let alll = document.getElementsByTagName('a');
// for (const a of alll){
//     a.classList.add('anchor')
// }
//
// // g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// let aaaaa = document.getElementsByTagName('a');
// for (const a of aaaaa){
//     if (a.innerText === 'link3'){
//         a.style.fontSize = '40px'
//     }
// }
//
//
// // h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
//
// let alli = document.getElementsByTagName('a');
// for (const a of alli){
//     a.classList.add(a.innerText);
// }
//
// // i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let elementsByClassNa = document.getElementsByClassName('sub-header');
// for (const item of elementsByClassNa) {
//     item.style.background = prompt('color?')
// }
//
// // j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
//
// let elementsBy = document.getElementsByClassName('sub-header');
// for (const sub of elementsBy){
//     if (sub.innerText === 'content 2 segment'){
//         sub.style.color = prompt('Color?')
//     }
// }
//
//
// // k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let con = document.getElementsByClassName('content_1');
// con.innerText = prompt('');
//
// // l) отримати елементи p та змінити їм padding на 20px
// let pud = document.getElementsByTagName('p');
// for (const p of pud){
//     p.style.padding = '20px'
// }
//
//
//
//
// // m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
// let doc = document.getElementsByClassName('text2');
// doc.innerText = 'sep-2021';
