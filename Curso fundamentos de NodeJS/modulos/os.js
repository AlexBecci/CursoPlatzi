const os = require("os");

console.log(os.arch()); //arquitectura mi caso 64 bits
console.log(os.platform()); //info de la plataforma del sistema
console.log(os.cpus().length); //info del cpu del sistema
console.log(os.constants); //info de errores y señales del sistema
console.log(os.freemem()); //info en bit de la memoria libre

const SIZE = 1024;

function kb(bytes) {
  return bytes / SIZE;
}
function mb(bytes) {
  return kb(bytes) / SIZE;
}
function gb(bytes) {
  return mb(bytes) / SIZE;
}
console.log(kb(os.freemem()));
console.log(mb(os.freemem()));
console.log(gb(os.freemem()));

console.log(gb(os.totalmem())); //memoria disponible

console.log(os.homedir());
console.log(os.tmpdir()); //directorios temporales
console.log(os.networkInterfaces()); //trae todas las interfaces de red que hay en la maquina

