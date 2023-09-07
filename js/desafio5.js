let matriz = [
    [".", ".", "<", ">", ".", ".", "A", "A"],
    ["<", ">", "<", ">", "<", ">", "V", "V"],
    [".", ".", ".", ".", ".", "A", ".", "."],
    [".", ".", ".", ".", ".", "V", ".", "."],
    [".", "<", ">", ".", "<", ">", ".", "."],
]; // 5 x 8
const filas = matriz.length;
const columnas = matriz[0].length;

function gravitas(g) {
    for (let y = filas - 2; y >= 0; y--) {
        for (let x = 0; x < columnas; x++) {
            let posActual = g[y][x];
            const posAbajo = g[y + 1][x];

            if ((posActual == "V" || posActual == "A") && posAbajo == ".") {
                let newY = y;
                while (newY < filas - 1 && g[newY + 1][x] == ".") {
                    g[newY + 1][x] = g[newY][x];
                    g[newY][x] = ".";
                    newY++;
                }
            } else if ((posActual == "<" || posActual == ">") && posAbajo == ".") {
                let newY = y;
                while (newY < filas - 1 && g[newY + 1][x] == "." && g[newY + 1][x + 1] == ".") {
                    g[newY + 1][x] = g[newY][x];
                    g[newY][x] = ".";
                    g[newY + 1][x + 1] = g[newY][x + 1];
                    g[newY][x + 1] = ".";
                    newY++;
                }
            }
        }
    }

    return g;
}


function mostrarMatriz(matriz) {
    for (let fila of matriz) {
        console.log(fila.join(" "));
    }
}

const resultado = gravitas(matriz);
mostrarMatriz(resultado);