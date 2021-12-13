// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
//
//
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(baza => baza.json())
    .then(someUser => {

            let divElement = document.createElement('div');
            divElement.classList.add('dov');
        for (const post of someUser) {
            let divPost = document.createElement('div');
            divPost.classList.add('post');
            divPost.innerText = `
            <h1>ID: ${post.id}</h1>
            <h2>Title: ${post.title}</h2>
            <h3>Body: ${post.body}</h3>

            `;
            divElement.appendChild(divPost);
            document.body.appendChild(divElement);
        }



    } );
//

//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(comen => comen.json())
    .then(contet =>{
        let divElement1 = document.createElement('div');
        divElement1.classList.add('wraper');
        for (const contetElement of contet) {
            let htmlDivElement = document.createElement('div');
            htmlDivElement.classList.add('comm');
            htmlDivElement.innerText = `
            <h3>ID: ${contetElement.id}</h3>
                        <h4>Name: ${contetElement.name}</h4>
                        <h5>Email: ${contetElement.email}</h5>
                        <h6>Body: ${contetElement.body}</h6>
`;
  document.body.appendChild(divElement1);
  divElement1.appendChild(htmlDivElement);
        }
    })
