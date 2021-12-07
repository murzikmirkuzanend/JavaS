//
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//
document.getElementById('btn').onclick = function () {
    let i1 = document.forms.f1.i1.value;
    let i2 = document.forms.f1.i2.value;
    let i3 = document.forms.f2.i3.value;
    let i4 = document.forms.f2.i4.value;
    console.log(i1, i2, i3, i4)
};

//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
let form = document.forms['dokument'];
form.onsubmit = function (e){
    e.preventDefault();
    let rows = +form.rows.value;
    let columns = +form.columns.value;
    let content = form.content.value;
    console.log(rows, columns, content)

    let table = document.createElement('table');
    for (let i = 0; i < rows; i++){
        document.createElement('tr')
        for (let j = 0; j < columns; j++){
            let td = document.createElement('td');
            td.innerText = content;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
document.body.appendChild(table)

}

//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
//

let plohislowa = ['Пі','Лоб','КУКУ','Альфонс'];
let bt = document.getElementById('bt');
bt.onclick = function (){
    let mat = document.getElementById('materni').value;
    for (const plohi of plohislowa){
        if (plohi === mat){
            alert("ойойойо не матюкайся!!")
        }
    }
};

//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
let plohislowas = ['Пі','Лоб','КУКУ','Альфонс'];
let bts = document.getElementById('bts');
bts.onclick = function (){
    let mat = document.getElementById('maternis').value;
    for (const plohi of plohislowas){
        if (mat.includes(plohi)){
            alert("ойойойо не матюкайся!!")
        }
    }
};
