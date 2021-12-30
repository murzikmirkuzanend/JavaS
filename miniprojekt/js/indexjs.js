//
//
// <!--В index.html-->
// <!--1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users-->
// <!--2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.-->
// <!--3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули-->





let heder = document.createElement('div');
heder.classList.add('heder');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(uses => uses.json())
    .then(someUser => {
        let divElement = document.createElement('div');
        divElement.classList.add('usersDivPhaser');
        for (const userChek of someUser) {
            let element = document.createElement('div');
            element.classList.add('divBorder');
            element.innerText = `
           ID: ${userChek.id}
           Name: ${userChek.name}`;
            let userDetalis = document.createElement('a');
            userDetalis.classList.add('hrefka')
            userDetalis.href = 'user-details.html?id=' + userChek.id;
            userDetalis.innerText = 'Натисни щоб перейти та дізнатись детальну інфу!!!'
            element.appendChild(userDetalis)
            divElement.appendChild(element);
            heder.appendChild(divElement)
        }
    })

document.body.appendChild(heder)

