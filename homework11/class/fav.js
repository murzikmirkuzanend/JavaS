

const far = JSON.parse(localStorage.getItem('favorites'));
console.log(far);
for (const favorite of far) {
    let divElement = document.createElement('div');
    divElement.innerText = JSON.stringify(favorite);
    document.body.appendChild(divElement);
}

//JSON.parse(localStorage.getItem(favoritesKey))