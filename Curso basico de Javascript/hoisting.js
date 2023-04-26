//HOISTING CON VARIIABLES

var miNombre = undefined;

console.log(miNombre + "Soy ese");

var miNombre = "Alex";

//HOISTING CON FUNCIONES
hey();

function hey() {
  console.log("Hola " + miNombre);
}
