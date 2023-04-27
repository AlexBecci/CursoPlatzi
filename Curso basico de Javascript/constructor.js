function auto(marca, modelo, annio) {
  this.marca = marca;
  this.modelo = modelo;
  this.annio = annio;
}

var autoNuevo = new auto("BMW", "320", 1987);

var autoNuevo2 = new auto("Chevrolet", "CorsaReff", 2005);
var autoNuevo3 = new auto("Toyota", "Corola", 2020);
autoNuevo;
autoNuevo2;
autoNuevo3;

//reto
function auto(marca, modelo, annio) {
  this.marca = marca;
  this.modelo = modelo;
  this.annio = annio;
}

var autos = [];
for (let i = 0; i < 5; i++) {
  var marca = prompt("Ingresa la marca del auto");
  var modelo = prompt("Ingresa el modelo");
  var annio = prompt("Ingresa el año");

  autos.push(new auto(marca, modelo, annio));
}
for (let i = 0; i < autos.length; i++) {
  console.log(autos[i]);
}
