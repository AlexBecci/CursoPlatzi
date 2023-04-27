var estudiantes = ["Alex", "Lourdes", "Emilio", "Angelica", "Brian"];

function saludarEstudiantes(estudiante) {
  console.log(`Hola ${estudiante}`);
}
//opcion 1

for (var i = 0; i < estudiantes.length; i++) {
  saludarEstudiantes(estudiantes[i]);
}

//Opcion 2
for (var estudiante of estudiantes) {
  saludarEstudiantes(estudiante);
}
