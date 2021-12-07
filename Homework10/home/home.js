// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//

let byIdElement = document.getElementById('text');
let button = document.getElementById('button');
button.onclick = function (){
    byIdElement.style.display = 'none';
}


//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

let klik = document.getElementById('button2');
klik.onclick = function (){
    klik.style.display = 'none';
}


//
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//

document.getElementById('button1').onclick = function () {
  let age =   document.getElementById('age').value;
    if (age > 18) {
        alert('Вітаємо на нашому сайті.');
    } else if (+age < 18) {
        alert('Вибачте вам потрібно підрости');
    } else {
        alert('Ви неввели свого віку');
    }
}
document.getElementById('button').onclick = function () {
    document.getElementById('text').hidden = true;
}
// - Создайте меню, которое раскрывается/сворачивается при клике
//
let menuElement = document.querySelector('.menu');
let titleElement = menuElement.querySelector('.title');

titleElement.onclick = function () {
    menuElement.classList.toggle('hidden');
};


//
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

let podia = [
    {title: 'lorem', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, dignissimos.'},
    {title: 'lorem', body: 'Lorem ipsum dolor sit amet.'},
    {title: 'lorem', body: 'Lorem ipsum dolor sit amet, elit. Aspernatur, dignissimos.'},
    {title: 'lorem', body: 'Lorem ipsum dolor sit amet, sicing elit. Aspernatur, dignissimos.'},
    {title: 'lorem', body: 'Lorem , consectetur adipisicing elit. Aspernatur, dignissimos.'},
    {title: 'lorem', body: 'Lorem. Aspernatur, dignissimos.'}
]

let divElement = document.createElement('div');
for (const item of podia){
    let div = document.createElement("div");
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    let btn = document.createElement('button');
    h2.innerText = item.title;
    p.innerText = item.body;
    btn.innerText = 'Закрий все!!';
    btn.onclick = () =>{
        p.classList.add('mein')
    }
div.appendChild(p);
    div.appendChild(h2);
    div.appendChild(btn);
    divElement.appendChild(div);
    document.body.appendChild(divElement);
}

