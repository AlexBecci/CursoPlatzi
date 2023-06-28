
//STREAM DE LECTURA
const fs = require('fs');
const stream = require('stream');
const util = require('util')

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');

readableStream.setEncoding('utf-8');

readableStream.on('data', function (chunk) {
    data += chunk;
    // console.log(chunk.toString());
})

readableStream.on('end', function () {
   // console.log(data)
})


//STREAM DE ESCRITURA
// process.stdout.write('Hola desde visual');
// process.stdout.write('Que tal niniooo');

//Logica
const Transform = stream.Transform;

function Mayus() {
    Transform.call(this)
}

util.inherits(Mayus, Transform)

Mayus.prototype._transform = function (chunk, codif, cb) {
    chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus);
    cb();
}

//Creandola
let mayus = new Mayus();

//UTILIZANDOLA
readableStream.pipe(mayus).pipe(process.stdout);