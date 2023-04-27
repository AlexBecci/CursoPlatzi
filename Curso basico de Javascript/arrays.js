var frutas = ["Manzana", "Pera", "Mandarina", "Banana", "Cereza", "Kiwi"];

console.log(frutas);

console.log(frutas.length);
//4

console.log(frutas[0]);
//Manzana

console.log(frutas[2]);
//Mandarina

//Mutando mi array

var masFrutas = frutas.push("Fresa", "Uvas"); //Agrega al final

console.log(frutas);
//var frutas = ["Manzana", "Pera", "Mandarina", "Banana", "Cereza", "Kiwi","Fresa", "Uvas"];

console.log(frutas[7]); //Uvas

var ultFruta = frutas.pop("Uvas");

frutas; ////var frutas = ["Manzana", "Pera", "Mandarina", "Banana", "Cereza", "Kiwi","Fresa"];

var nuevaLongitud = frutas.unshift("Uva Negra");

frutas; ////var frutas = ["Uva Negra","Manzana", "Pera", "Mandarina", "Banana", "Cereza", "Kiwi","Fresa"];

var borrarFruta = frutas.shift("Uva Negra");
frutas; ////var frutas = ["Manzana", "Pera", "Mandarina", "Banana", "Cereza", "Kiwi","Fresa"];

var posicion = frutas.indexOf("Cereza");
posicion; //4

