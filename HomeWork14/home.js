// Зробити свій розпорядок дня.
//
//     У вас має бути більше 10 асинхронних дій з рандомними затримками.
//     Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
//
//     Напиклад.


//


//
// 
// 
//
// І так далi

//     Прикнутись 
function newDay(goodMorning) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (goodMorning) {
                console.log('------------------')
                console.log('Ранок');
                resolve('випити води!!');
            } else {
                console.log('Stop slip!!');
                reject('oh mi!')
            }
        }, 3000);
    });
}

// Поснідати
function breakfast(pasta) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (pasta) {
                console.log('------------------')
                console.log('makaroni');
                resolve('drink jus');
            } else {
                reject('lol');
            }
        }, 1000);
    });
}

// помитись
function bathroom(wash) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (wash) {
                console.log('------------------')
                console.log('i wash head');
                resolve('brush your teeth')
            } else {
                reject('hol')
            }
        }, 5000);
    });
}

// Дочекатись автобус - 3с
function busStop(bus) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (bus) {
                console.log('------------------')
                console.log('i sow happy');
                resolve('drink coffee');
            } else {
                reject('erors bas not came!!!');
            }
        }, 2000);
    });
}

// попрацювати
function goWork(working) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (working) {
                console.log('------------------')
                console.log('type type type');
                resolve('work lazily')
            } else {
                reject('pererobiv')
            }
        }, 6000);
    });
}

// сходити на обід
function lunch(sandwiches) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (sandwiches) {
                console.log('------------------')
                console.log('tune');
                resolve('Tuna with salmon');
            } else {
                reject('po obidaw((');
            }
        }, 1500);
    })
}

// попрацювати
function backToWork(backToWorking) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (backToWorking) {
                console.log('------------------')
                console.log('work work work')
                resolve('workaholic');
            } else {
                reject('you work')
            }
        }, 5000);
    })
}

// піти на пиво
function bar(beer) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (beer) {
                console.log('------------------')
                console.log('OOOO pivo');
                resolve('Well, everything is clear');
            } else {
                reject('not beer');
            }
        }, 2000);
    })
}

// поїхати додому
function backToHome(home) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (home) {
                console.log('------------------')
                console.log('play for Daughter');
                resolve('cheers at home');
            } else {
                reject('TV');
            }
        }, 1200);
    })
}

// піти спати

function goToSlip(slip) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (slip) {
                console.log('------------------')
                console.log('Good Night!')
                resolve('beautiful dreams');
            } else {
                reject('Go working!!!');
            }
        }, 1000);
    })
}

// newDay(true)
//     .then(morning => {
//         console.log('Morning')
//         return breakfast(morning);
//     })
//     .then(breakfast => {
//         console.log('breakfast')
//         return bathroom(breakfast);
//     })
//     .then(bathroom => {
//         console.log('bathroom')
//         return busStop(bathroom)
//     })
//     .then(busStop => {
//         console.log('busStop')
//         return goWork(busStop)
//     })
//     .then(goWork => {
//         console.log('goWork')
//         return lunch(goWork);
//     })
//     .then(lunch => {
//         console.log('lunch')
//         return backToWork(lunch);
//     })
//     .then(backToWork => {
//         console.log('backToWork')
//         return bar(backToWork);
//     })
//     .then(bar => {
//         console.log('bar')
//         return backToHome(bar);
//     })
//     .then(backToHome => {
//         console.log('backToHome')
//         return goToSlip(backToHome)
//     })

async function morningDay(){
 const day = await newDay(true);
 const breakfas = await breakfast(day);
 const  batrom = await  bathroom(breakfas);
 const bus = await busStop(batrom);
 const work = await goWork(bus);
 const lunc = await  lunch(work);
 const backWork = await backToWork(lunc);
 const baar = await bar(backWork);
 const backHome = await backToHome(baar);
 const goSlip = await goToSlip(backHome);


    console.log(day);
    console.log(breakfas);
    console.log(batrom);
    console.log(bus);
    console.log(work);
    console.log(lunc);
    console.log(backWork);
    console.log(baar);
    console.log(backHome);
    console.log(goSlip);

}
morningDay();