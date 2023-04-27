var estudiantes = ["Alex", "Lourdes", "Emilio", "Angelica", "Brian"];

function saludarEstudiantes(estudiante) {
  console.log(`Hola, ${estudiante}`);
}

//While

while (estudiantes.length > 0) {
  console.log(estudiantes);
  var estudiante = estudiantes.shift();
  saludarEstudiantes(estudiante);
}
