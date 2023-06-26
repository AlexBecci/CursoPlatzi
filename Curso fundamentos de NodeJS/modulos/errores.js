function otraFuncion() {
  return seRompe();
}

function seRompe() {
  return 3 + Z;
}

function seRompeAsync(callBack) {
  setTimeout(function () {
    try {
      return 3 + z;
    } catch (error) {
        console.error('Error en mi funcion ASYNC')
        callBack(error)
    }
  });
}
try {
  //otraFuncion();
  seRompeAsync(function(err){
    console.log(err.message)
  });
} catch (err) {
  console.error("Vaya, algo se ha roto...");
  console.error(err.message);
  console.log("Error capturado");
}

console.log("Esto esta al final");
