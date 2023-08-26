const a = 6;

const divisores = [];

function obtenerDivisores(num) {
    for (let i = num; i > 0; i--) {
        if (num % i === 0) {
            divisores.push(i);
        }
    }
}

obtenerDivisores(a);

function cadenas(a) {
    const suma = [];
    const suma2 = [];
    let resMax = 0;
    let resMin = 0;
    let a2 = a;

    for (let i = 0; i < divisores.length; i++) {
        if (a % divisores[i] === 0) {
            suma.push(divisores[i]);
            a = divisores[i];
        }
    }

    let i = divisores.length - 1;
    while (i >= 0) {
        const num = divisores[i];
        if (a2 % num === 0) {
            suma2.push(num);
            if (num !== 1) {
                a2 = divisores[i - 1];
                if (a2 % num === 0) {
                    suma2.push(num);
                }
            }
        }
        i--;
    }

    for (let num of suma) {
        resMax += num;
    }

    for (let num of suma2) {
        resMin += num;
    }

    results[0] = resMax;
    results[1] = resMin;
}

cadenas(a);

console.log("Resultado máximo:", resMax);
console.log("Resultado mínimo:", resMin);