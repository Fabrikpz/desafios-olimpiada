const a = 60;
let divisores = [];
function obtenerDivisores(a) {
    for (let i = a; i > 0; i--) {
        if (a % i === 0) {
            divisores.push(i);
        }
    }
}

obtenerDivisores(a); //60, 30, 20, 15, 12, 10, 6, 5, 4, 3, 2, 1

function cadenas(a) {
    let suma = [];

    for (let i = 0; i < divisores.length; i++) {
        if (a % divisores[i] === 0) {
            suma.push(divisores[i]);
            a = divisores[i];
        }
    }

    return suma.reduce((n1, n2) => n1 + n2);
}

console.log(cadenas(a)); //resultado: 60+30+15+5+1 (111)