// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html,
//     которая имеет детальную информацию про текущий пост.

let heder = document.createElement('div');
heder.classList.add('heder');

let url = new URL(location.href);
let idUser = url.searchParams.get('id');
fetch('https://jsonplaceholder.typicode.com/users/' + idUser)
    .then(uses => {
        return uses.json()
    })
    .then(usesr => {

        let htmlDivElement = document.createElement('div');
        htmlDivElement.classList.add('divheder');
        let divElement = document.createElement('div');
        divElement.classList.add('divMax');
        divElement.innerText = `${usesr.id}
Name: ${usesr.name}
Username: ${usesr.username}
email: ${usesr.email}
 address: ${usesr.address.street}
suite: ${usesr.address.suite}
city: ${usesr.address.city}
zipcode ${usesr.address.zipcode}
 geo.lat: ${usesr.address.geo.lat}
geo.lng: ${usesr.address.geo.lng}
phone: ${usesr.phone}
website: ${usesr.website}
company: ${usesr.company.name}
${usesr.company.catchPhrase}
${usesr.company.bs}
   `;



        let divHederBtn = document.createElement('div');
        divHederBtn.classList.add('divBtnHeder');
        let btn = document.createElement('button');
        btn.classList.add('btn')
        btn.innerText = 'post of current user'

        btn.onclick = () => {
            fetch(`https://jsonplaceholder.typicode.com/users/` + usesr.id + `/posts`)
                .then(uses => uses.json())
                .then(response => {
                    for (const resp of response) {



                        let diveElement = document.createElement('div');
                        diveElement.classList.add('btnDiv');
                        diveElement.innerText = `title: ${resp.title}`;
                        divHederBtn.appendChild(diveElement);

                        btn.disabled = true;
                        let documElA = document.createElement('a');
                        documElA.classList.add('elementA');
                        documElA.href = 'post-details.html?id=' + resp.id;
                        documElA.innerText = 'Деталі!'
                        diveElement.appendChild(documElA)
                        heder.appendChild(divHederBtn)
                    }

                })

        }

        heder.appendChild(btn)
        htmlDivElement.appendChild(divElement);
        document.body.appendChild(htmlDivElement);
        document.body.appendChild(heder)
    })
