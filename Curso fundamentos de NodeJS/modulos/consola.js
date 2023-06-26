console.log("Algo");
console.error("Algo");
console.warn("Algo");

var tabla = [
  {
    a: 1,
    b: "z",
  },
  {
    a: 2,
    b: "s",
  },
];
console.log(tabla);
console.table();

console.group("conversacion");
    console.log("Hola");
    console.group("bla");
        console.log("blablabla");
        console.log("blablabla");
        console.log("blablabla");
    console.groupEnd("bla");
    console.log("adios");
console.groupEnd("conversacion");

console.log("otra cosa de otra funcion");
