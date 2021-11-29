/*
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function user(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.phone = phone;
    this.email = email;
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)

const users = [
    new user(25, 'Oleg', 'Saikevych', 'asdqwe@gmail.com', 380963258743),
    new user(2, 'Nastia', 'Saikevych', 'assssqwe@gmail.com', 380973258744),
    new user(3, 'Roman', 'Saikevych', 'asddfe@gmail.com', 380983258745),
    new user(4, 'Viktoria', 'Saikevych', 'asqwewe@gmail.com', 380932587646),
    new user(5, 'Andriy', 'Saikevych', 'asdxx@gmail.com', 380936258747),
    new user(6, 'Valentyna', 'Saikevych', 'acdqwe@gmail.com', 380963458748),
    new user(7, 'Zinoviy', 'Danyliv', 'asvqwe@gmail.com', 380963258749),
    new user(8, 'Lidia', 'Danyliv', 'asdqbe@gmail.com', 380963258445),
    new user(9, 'lyiza', 'Saikevych', 'asdnwe@gmail.com', 380963253747),
    new user(10, 'Murzik', 'Saikevych', 'asdmwe@gmail.com', 380963258743),
];
console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filterUser = users.filter((item) => {
    if (item.id % 2 === 0) {
        return item;
    }
});
console.log(filterUser);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// users.sort((a,b) => a.id - b.id);
// console.log(users)
*/

/*// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {

    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.order = order;
    }
}


// створити пустий масив, наповнити його 10 об'єктами Client
let usersClient = [
    new Client(25, 'Oleg', 'Saikevych', 'asdqwe@gmail.com', 380963258743, ['lob', 'head']),
    new Client(2, 'Nastia', 'Saikevych', 'assssqwe@gmail.com', 380973258744, ['book', 'phone', 'disk', 'stiks']),
    new Client(3, 'Roman', 'Saikevych', 'asddfe@gmail.com', 380983258745, ['loshka', 'wilka', 'tarilka',]),
    new Client(4, 'Viktoria', 'Saikevych', 'asqwewe@gmail.com', 380932587646, ['phone', 'cars', 'toys', 'mause', 'cola', 'pepsi']),
    new Client(5, 'Andriy', 'Saikevych', 'asdxx@gmail.com', 380936258747, ['book', 'phone', 'fanta', 'pepsi', 'tablet']),
    new Client(6, 'Valentyna', 'Saikevych', 'acdqwe@gmail.com', 380963458748, ['car', 'phone', 'disk', 'iqos', 'son', 'pepsi']),
    new Client(7, 'Zinoviy', 'Danyliv', 'asvqwe@gmail.com', 380963258749, ['book', 'lis', 'disk', 'stiks', 'mari']),
    new Client(8, 'Lidia', 'Danyliv', 'asdqbe@gmail.com', 380963258445, ['dog', 'drowa', 'disk', 'stiks', 'lol', 'pepsi', 'sasd', 'disk']),
    new Client(9, 'lyiza', 'Saikevych', 'asdnwe@gmail.com', 380963253747, ['man', 'philips', 'disk', 'stiks', 'disk']),
    new Client(10, 'Murzik', 'Saikevych', 'asdmwe@gmail.com', 380963258743, ['book', 'phone', 'disk', 'stiks']),
]


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let clientSort = usersClient.sort((a, b) => a.order.length - b.order.length);
console.l*/og(clientSort)