function cadenas(a){
    let divisores = [];

    for(i = a; i >= 0; i--){
        if(a % i === 0){
            divisores.push(i);
        }
    }
    //return divisores;

    let sum = [];
    divisores.map(divisor => a % divisor ? sum.push[divisor] : "")
}

console.log(cadenas(60));