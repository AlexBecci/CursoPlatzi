const fs = require("fs");

function leer(ruta, callBack) {
  fs.readFile(ruta, (error, data) => {
    //leido
    callBack(data.toString);
  });
}

function escribir(ruta, contenido, callBack) {
  fs.writeFile(ruta, contenido, function (error) {
    if (error) {
      console.log("no eh podido escribirlo");
    } else {
      console.log("Se ha escrito correctamente");
    }
  });
}

function borrar(ruta, callBack) {
  fs.unlink(ruta, callBack);

}

//escribir(__dirname + '/archivo1.txt' , 'Soy un archivo nuevooooooo', console.log)
//leer(__dirname + "/archivo.txt", console.log());
borrar(__dirname + '/archivo.txt',console.log)