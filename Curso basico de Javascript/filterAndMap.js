var articulos = [
  { nombre: "Bici", costo: 3000 },
  { nombre: "Tv", costo: 2500 },
  { nombre: "Libro", costo: 320 },
  { nombre: "Celular", costo: 12000 },
  { nombre: "Laptop", costo: 18000 },
  { nombre: "Teclado", costo: 500 },
  { nombre: "Audifonos", costo: 1700 },
];

//Primer metodo
var articulosFiltrados = articulos.filter(function (articulo) {
  return articulo.costo <= 500;
});
articulosFiltrados;

//Segundo metodo
var nombreArticulos = articulos.map(function (articulo) {
  return articulo.nombre;
});

nombreArticulos;