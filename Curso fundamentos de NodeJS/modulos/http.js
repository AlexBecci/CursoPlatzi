const hhtp = require("http");

hhtp.createServer(router).listen(3000);

function router(req, res) {
  //
  console.log("nueva peticion");
  console.log(req.url);

  switch (req.url) {
    case "/hola":
      res.write("Hola, que tal");
      res.end();
      break;

    default:
      res.write("Error 404: No se lo que quieres");
      res.end();
  }

  res.writeHead(201, { "Content-Type": "text/plain" });
  //EScribir respuesta al usuario
  res.write("Hola se usar http con node JS");

  res.end();
}
console.log("escuchando http en el puerto 3000");
