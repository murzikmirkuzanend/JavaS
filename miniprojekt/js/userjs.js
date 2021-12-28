// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html,
//     которая имеет детальную информацию про текущий пост.
let url = new URL(location.href);
let idUser = url.searchParams.get('id');
fetch('https://jsonplaceholder.typicode.com/users/' + idUser)
    .then(uses => uses.json())
    .then(uses => {
        let htmlDivElement = document.createElement('div');
        htmlDivElement.classList.add('divheder');
        let divElement = document.createElement('div');
        divElement.classList.add('divMax');
        divElement.innerText = `
            ID: ${uses.id}, 
            Name: ${uses.name},
            Username: ${uses.username},
            email: ${uses.email},
            address: ${uses.address.street},
            suite: ${uses.address.suite},
            city: ${uses.address.city},
            zipcode ${uses.address.zipcode},
            geo.lat: ${uses.address.geo.lat},
           geo.lng: ${uses.address.geo.lng},
           phone: ${uses.phone},
           website: ${uses.website},
           company: ${uses.company.name},
           ${uses.company.catchPhrase},
            ${uses.company.bs}
            `;
        let btn = document.createElement('button');
        btn.innerText = 'post of current user'
        btn.onclick = () => {
            fetch('https://jsonplaceholder.typicode.com/posts/' + idUser)
                .then(post => post.json())
                .then(response => {

                    if (uses.id === response.id) {
                        let diveElement = document.createElement('div');
                        diveElement.classList.add('btnDiv');
                        diveElement.innerText = `title: ${response.title}`;
                        htmlDivElement.appendChild(diveElement);
                    }
                    btn.disabled = true;
                    let documElA = document.createElement('a');
                    documElA.classList.add('elementA');
                    documElA.href = 'post-details.html?id=' + response.id;
                    documElA.innerText = 'Деталі!'
                    htmlDivElement.appendChild(documElA)
                })
        }

        htmlDivElement.appendChild(btn)
        htmlDivElement.appendChild(divElement);
        document.body.appendChild(htmlDivElement);
    })
