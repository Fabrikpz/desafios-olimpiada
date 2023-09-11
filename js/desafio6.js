let tablero = [
    [".", ".", "♛", ".", ".", ".", ".", "."],
    ["♛", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "♛", "♛", "♛", ".", "."],
    [".", ".", ".", ".", ".", "♛", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "♛"],
    [".", ".", ".", ".", "♛", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", "♛", "."],
    [".", "♛", ".", ".", ".", ".", ".", "."]
]; //tablero con 8 conflictos
/*let tablero = [
    [".", ".", "♛", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "♛", ".", "."],
    [".", ".", ".", "♛", ".", ".", ".", "."],
    ["♛", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "♛"],
    [".", ".", ".", ".", "♛", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", "♛", "."],
    [".", "♛", ".", ".", ".", ".", ".", "."]
]; //tablero con 0 conflictos*/

let conflictos = 0;
let nroReina = 1;

function conflictoReinas(tablero) {
    const filas = tablero.length - 1;
    const columnas = tablero[0].length - 1;
    let conflictosCont = 0;
    for (let x = 0; x <= columnas; x++) {
        for (let y = 0; y <= filas; y++) {
            if (tablero[y][x] === "♛") {
                if (isConflict(y, x)) {
                    conflictosCont++;
                    conflictos = 0;
                }
            }
        }
    }

    return `Conflictos: ${conflictosCont}`;
}

function isConflict(currentY, currentX) {
    const filas = tablero.length - 1;
    const columnas = tablero[0].length - 1;

    //horizontal pa la derecha
    for (let x = 1+currentX; x <= filas; x++) {
        if (tablero[currentY][x] === "♛") {
            conflictos++;
            break;
        }
    }
    //horizontal pa la izquierda
    for (let x = currentX-1; x >= 0; x--) {
        if (tablero[currentY][x] === "♛") {
            conflictos++;
            break;
        }
    }
    //vertical pa arriba
    for (let y = currentY-1; y >= 0; y--) {
        if (tablero[y][currentX] === "♛") {
            conflictos++;
            break;
        }
    }
    //vertical pa abajo
    for (let y = currentY+1; y <= columnas; y++) {
        if (tablero[y][currentX] === "♛") {
            conflictos++;
            break;
        }
    }
    //diagonal pa arriba izquierda
    for (let x = currentX-1, y = currentY-1; x >= 0 && y >= 0; x--, y--) {
        if (tablero[y][x] === "♛") {
            conflictos++;
            break;
        }
    }
    //diagonal pa arriba derecha
    for (let x = currentX+1, y = currentY-1; x <= columnas && y >= 0; x++, y--) {
        if (tablero[y][x] === "♛") {
            conflictos++;
            break;
        }
    }
    //diagonal pa abajo izquierda
    for (let x = currentX-1, y = currentY+1; x >= 0 && y <= filas; x--, y++) {
        if (tablero[y][x] === "♛") {
            conflictos++;
            break;
        }
    }
    //diagonal pa abajo derecha
    for (let x = currentX+1, y = currentY+1; x <= columnas && y <= filas; x++, y++) {
        if (tablero[y][x] === "♛") {
            conflictos++;
            break;
        }
    }

    if (conflictos > 0) {
        console.log(`Conflictos de reina ${nroReina} = ${conflictos} `);
        nroReina++;
        return true;
    }
    console.log(`Conflictos de reina ${nroReina} = ${conflictos} `);
    nroReina++;
    return false;
}

console.log(conflictoReinas(tablero));