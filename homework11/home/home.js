// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
//

let name = document.forms.from.name;
let age = document.forms.from.age;
let btn = document.getElementById('btn');
let key = 'key';
let save = (userName, userAge) => {
    let user = {
        name: userName,
        age: userAge

    };
    localStorage.setItem(key, JSON.stringify(user));
};
btn.onclick = () => {
    save(name.value, age.value);
};


// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.


let model = document.forms.cars.model;
let type = document.forms.cars.type;
let volume = document.forms.cars.volume;
let bur = document.getElementById('bur');
let kay = 'kay';
let models = (carsModel, carsType, carsVolume) => {
    let car = {
        model: carsModel,
        type: carsType,
        volume: carsVolume
    };
    localStorage.setItem(key, JSON.stringify(car));
};
bur.onclick = () => {
    models(model.value, type.value, volume.value)
};