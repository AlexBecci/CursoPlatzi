console.count("veces"); //1
console.count("veces"); //2
console.count("veces"); //3
console.countReset("veces"); //0
console.count("veces"); //1

/////
function function1() {
  console.group("funcion 1");
  console.log("Esto es de la funcion 1");
  console.log("Esto tambien");
  console.log("Esto tambien");

  function2();
  console.log("Hemos vuelto a la 1");
  console.groupEnd("funcion 1");
}
function function2() {
  console.group("funcion 2");
  console.log("Ahora estamos en la funcion 2");
  console.groupEnd("funcion 2");
}

console.log("Empezamos");
function1();
