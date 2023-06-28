function asyncFunction(callback) {
    setTimeout(function () {
        try {
            let a = 3 + z;
            callback(null, a)
        } catch (err) {
            callback(err);
        }
    }, 1000)
}


asyncFunction(function (err, dato) {
    if (err) {
        console.error('Tenemos un error');
        console.error(err);
        return false;
        //throw err; ..NO va a funcionar!
    }
    console.log('Todo salio de maravilla papaaa, mi data es:', dato)
})


