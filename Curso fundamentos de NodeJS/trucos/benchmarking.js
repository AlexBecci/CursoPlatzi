console.time('todo')
let suma = 0;

console.time('bucle')

for (let i = 0; i < 10000000; i++) {
    suma += 1;
}

console.timeEnd('bucle')


let suma2 = 0;

console.time('bucle2')

for (let j = 0; j < 1000000000; j++) {
    suma2 += 1;
}

console.timeEnd('bucle2')

console.time('async')
console.log('Empieza el proceso async')

async()
    .then(() => {
        console.timeEnd('async')
    });


console.timeEnd('todo')


function async() {
    return new Promise((resolve) => {
        setTimeout(function () {
            console.log('termina el proceso asincrono')
            resolve();
        })
    })
}