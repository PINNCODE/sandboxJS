console.log('Par, impar, primos');

function esPrimo(num) {
    for (let index = 2; index < num; index++) {
        if (num % index === 0) {
            //console.log('No es primo');
            return false;
        }
    }

    return num !== 1;
}

function esPrimo(num) {
    for (let index = 2; index < num; index++) {
        if (num % index === 0) {
            //console.log('No es primo');
            return false;
        }
    }

    return num !== 1;
}

function esPar(num) {
    if (num % 2 === 0) {
        return true;
    }
    return false;
}

function esImPar(num) {
    if (num % 2 !== 0) {
        return true;
    }
    return false;
}

console.log(esPrimo(7));
console.log(esPar(3));
console.log(esImPar(3));

// for (let index = 0; index <= 100; index++) {
//     if (esPrimo(index)) {
//         console.log(index, 'es primo');
//     }
// }