//const exec = require("child_process").exec;
const { exec, spawn } = require("child_process");
const { error } = require("console");
const { stdout } = require("process");

//mac exec("ls -la", (err, stdout, sterr) => {
// exec("node modulos/consola.js", (err, stdout, sterr) => {
//   if (err) {
//     console.error(err);
//     return false;
//   }

//   console.log(stdout);
// });

let proceso = spawn("dir");

console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on("data", function (data) {
  console.log("Esta muerto?");
  console.log(process.killed);
  console.log(data.toString());
});

proceso.on("exit", function () {
  console.log("el proceso ha terminado");
  console.log(proceso.killed);
});
