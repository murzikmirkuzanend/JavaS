// а странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации -
// https://jsonplaceholder.typicode.com/posts/POST_ID/comments)


let url = new URL(location.href);
let idUser = url.searchParams.get('id');
fetch('https://jsonplaceholder.typicode.com/posts/' + idUser)
    .then(posts => posts.json())
    .then(post => {
        let divPostElement = document.createElement('div');
        divPostElement.classList.add('postDiv');
        let detalisDivElement = document.createElement('div');
        detalisDivElement.classList.add('detalisDiv');
        detalisDivElement.innerText = `
userId: ${post.userId},
id: ${post.id},
title: ${post.title},
body: ${post.body}
`;
        let comentsBtn = document.createElement('button');
        comentsBtn.innerText = 'Натисни щоб побачити Коментарі!!!';
        comentsBtn.onclick = () => {
            fetch('https://jsonplaceholder.typicode.com/comments/' + idUser)
                .then(coments => coments.json())
                .then(respons => {
                    if (post.id === respons.id) {
                        let comentDivElement = document.createElement("div");
                        comentDivElement.classList.add('comentDiv');
                        comentDivElement.innerText = ` postId: ${respons.postId},
                id: ${respons.id},
                name: ${respons.name},
                email: ${respons.email},
                body: ${respons.body}
                `
                        divPostElement.appendChild(comentDivElement);
                    }
                    comentsBtn.disabled = true;
                    let backToStart = document.createElement('a');
                    backToStart.classList.add('back');
                    backToStart.href = 'index1.html';
                    backToStart.innerText = 'Повернутись на початок!';
                    divPostElement.appendChild(backToStart);

                })
        }

        divPostElement.appendChild(comentsBtn);
        divPostElement.appendChild(detalisDivElement);
        document.body.appendChild(divPostElement);
    })