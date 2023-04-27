if (true) {
  console.log("Hola");
} else {
  console.log("falso hola xd");
}

var edad = 18;
if (edad === 18) {
  console.log("puedes votar por primera vez");
} else if (edad > 18) {
  console.log("Puedes votar de nuevo");
} else {
  console.log("eres menor de edad, no puedes votar aun!");
}

//operador ternario
condition ? true : false;

var num = 1;

var resultado = numero === 1 ? "Si soy un numero 1" : "No, no soy un 1";
console.log(resultado);

//reto

var op1 = "piedra";
var op2 = "tijera";
var op3 = "papel";

var resultado = function (user, cpu) {
  if (user != cpu) {
    if (user === op1 && cpu === op3) {
      console.log("el usuario GANO con " + op1);
    } else if (user === op2 && cpu === op1) {
      console.log("el usuario GANO con " + op2);
    } else if (user === op3 && cpu === op2) {
      console.log("el usuario GANO con " + op3);
    } else {
      console.log("La CPU Gano!!");
    }
  } else if (user === cpu) {
    console.log("Empate");
  }
};

resultado(op1, op3); //el usuario GANO con Piedra```
