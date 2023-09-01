const N = 60;
const divisores = [];

function obtenerDivisores(num) {
    for (let i = num; i > 0; i--) {
        if (num % i === 0) {
            divisores.push(i);
        }
    }
    console.log(divisores)
}

obtenerDivisores(N);

function gaston(num){
    let suma = [];

    for (let i = 0; i < divisores.length; i++) {
        if (num % divisores[i] === 0) {
            suma.push(divisores[i]);
            num = divisores[i];
        }
    }

    //12 + 6 + 3 + 1 = 22.
    return "Resultado máximo: "+ suma.reduce((n1, n2) => n1 + n2);
}

function agustin(num) {
    let suma = [num];
    
    for(let i = num; i >= 1; i--){
        if(suma[suma.length - 1] == 2){
            suma.push(1);
            break;
        }
        if(esPrimo(i)){
            if(num % i == 0){
                suma.push(num/i);
                num = num/i;
            }
        }
    }
    //12 + 4 + 2 + 1 = 19.
    return "\n" + "Resultado mínimo: " + suma.reduce((n1, n2) => n1 + n2); 
}

function esPrimo(num){
    if(num == 1 || num == 2 || num == 3 || num == 5 || num == 7){
        return true; 
    }
    for(i = 2; i <= num/2; i++){
        if(num % i == 0){
            return false;
        }
    }
    return true;
}
console.log(gaston(N), agustin(N));