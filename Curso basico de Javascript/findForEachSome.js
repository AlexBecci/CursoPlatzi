var articulos = [
  { nombre: "Bici", costo: 3000 },
  { nombre: "Tv", costo: 2500 },
  { nombre: "Libro", costo: 320 },
  { nombre: "Celular", costo: 12000 },
  { nombre: "Laptop", costo: 18000 },
  { nombre: "Teclado", costo: 500 },
  { nombre: "Audifonos", costo: 1700 },
];

//Primer metodo find
var encuentraArticulo = articulos.find(function (articulo) {
  return articulo.nmbre === "Laptop";
});

encuentraArticulo;

//Metodo forEach
articulos.forEach(function (articulo) {
  console.log(articulo.nombre);
});

//Metodo some
some();

var articulosBaratos = articulos.some(function (articulo) {
  return articulo.costo <= 700;
});
articulosBaratos;
