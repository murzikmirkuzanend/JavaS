/*// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

function car(model, sozdatel, yers, max, objekt) {

    this.model = model;
    this.sozdatel = sozdatel;
    this.yers = yers;
    this.max = max;
    this.objekt = objekt;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.max} на годину`)
    }
    this.info = function () {
        for (const kay in this) {
            if (typeof this[kay] !== 'function')
                console.log(`${kay}-${this[kay]}`)
        }
    }
    this.increaseMaxSpeed = function (nawSpid) {
        this.max = this.max + nawSpid;
    }
    this.changeYear = function (newValue) {
        this.yers = newValue;
    }
this.addDriver = function (driver){
        this.driver = driver
}
}
 let addCar = new car('lada','SSSR',2000,180, 5.5)
console.log(addCar);
addCar.drive(22);
addCar.info();
addCar.increaseMaxSpeed(250);
addCar.drive(22);
addCar.changeYear(2052);
addCar.info();
addCar.addDriver();
console.log(addCar)
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//*/
//
/*
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`+
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля+`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed+
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class car {
    constructor(model, sozdatel, yers, max, objekt) {
        this.model = model;
        this.sozdatel = sozdatel;
        this.yers = yers;
        this.max = max;
        this.objekt = objekt;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.max} на годину`)
    };

    info() {
        for (const kay in this) {
            console.log(`${kay}-${this[kay]}`)
        }
    }

    increaseMaxSpeed(newSpeed) {
        this.max = this.max + newSpeed;
    }

    changeYear(newValue) {
        this.yers = newValue
    }

    addDriver(driver) {
        this.driver = driver;
    }
}
let cars = new Cars('Ford', 'USA', 1903, 180, 2.0);
console.log(addCar2);
cars.drive();
cars.info();
cars.increaseMaxSpeed(250);
cars.drive();
cars.changeYear(2000)
cars.info();
cars.addDriver('Tomas')
console.log(cars)
*/


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class Popelushka {
    constructor(name, age, footsize) {
        this.name = name;
        this.age = age;
        this.footsize = footsize;
    }
}

const popelushkaArray = [
    new Popelushka('Olia', 22, 46),
    new Popelushka('Vaselina', 21, 25),
    new Popelushka('Natalia', 24, 30),
    new Popelushka('Lina', 26, 31),
    new Popelushka('Maria', 29, 32),
    new Popelushka('Galina', 25, 35),
    new Popelushka('Mirana', 30, 34),
    new Popelushka('Luna', 34, 39),
];
console.log(popelushkaArray);


// Створити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Princ {
    constructor(name, age, findShose) {
        this.name = name;
        this.age = age;
        this.findShose = findShose;
    }
}
const prince = new Princ('KorolArthur', 45, 46);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

const newPara = (popelushkaArray, prince) => {
    for (const item of popelushkaArray) {
        if (item.footsize === prince.findShose) {
            return `tvoya populushka: ${item.name}`
        }
    }
};
console.log(newPara(popelushkaArray, prince))

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

const emptyPrincess = popelushkaArray.find((item) => item.footsize === prince.findShose);
console.log(emptyPrincess);