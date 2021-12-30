// на странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации -
// https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
// let url = new URL(location.href);
// let idUser = url.searchParams.get('id');


let url = new URL(location.href);
let idUser = url.searchParams.get('id');
fetch('https://jsonplaceholder.typicode.com/users/' + idUser)
    .then(uses => {return uses.json()})
    .then(usesr => {

fetch(`https://jsonplaceholder.typicode.com/users/` + usesr.id + `/posts`)
    .then(uses =>    uses.json())
    .then(post => {
        for (const resp of post) {
        let divPostElement = document.createElement('div');
        divPostElement.classList.add('postDiv');
        let detalisDivElement = document.createElement('div');
        detalisDivElement.classList.add('detalisDiv');
        detalisDivElement.innerText = `
userId: ${resp.userId},
id: ${resp.id},
title: ${resp.title},
body: ${resp.body}
`;

        let comentsBtn = document.createElement('button');
        comentsBtn.innerText = 'Натисни щоб побачити Коментарі!!!';
        comentsBtn.onclick = () => {
            fetch(`https://jsonplaceholder.typicode.com/posts/` + usesr.id + `/comments`)
                .then(coments => coments.json())
                .then(respons => {
                    for (const open of respons) {
                        let comentDivElement = document.createElement("div");
                        comentDivElement.classList.add('comentDiv');
                        comentDivElement.innerText = ` postId: ${open.postId},
                id: ${open.id},
                name: ${open.name},
                email: ${open.email},
                body: ${open.body}
                `
                        detalisDivElement.appendChild(comentDivElement);
                    }

                    comentsBtn.disabled = true;
                    let backToStart = document.createElement('a');
                    backToStart.classList.add('back');
                    backToStart.href = 'index1.html';
                    backToStart.innerText = 'Повернутись на початок!';
                    divPostElement.appendChild(backToStart);

                })
        }

        detalisDivElement.appendChild(comentsBtn);
        divPostElement.appendChild(detalisDivElement);
        document.body.appendChild(divPostElement);
        }

    })
    })