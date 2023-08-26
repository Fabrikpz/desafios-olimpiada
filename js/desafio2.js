function esEscalonado(number) {
    const digitos = String(number).split('').map(Number); //para convertir numero en array
    for (let i = 1; i < digitos.length; i++) {
        if (digitos[i] <= digitos[i - 1]) { //si digito siguiente es menor al digito anterior es menor no es escalonado
            return false;
        }
    }
    return true;
}

function contarEscalonados(N) {
    let cont = 0;
    let escalonados = [];
    for (let i = 10; i <= N; i++) {
        if (esEscalonado(i)) {
            cont++;
            escalonados.push(i);
        }
    }
    
    console.log("Cantidad de nros escalonados: " + cont);
    return "Nros escalonados: " + escalonados;
} 

console.log(contarEscalonados(19999));