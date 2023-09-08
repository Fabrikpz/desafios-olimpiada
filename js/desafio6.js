/*let tablero = [
    [".", ".", "♛", ".", ".", ".", ".", "."],
    ["♛", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "♛", "♛", "♛", ".", "."],
    [".", ".", ".", ".", ".", "♛", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "♛"],
    [".", ".", ".", ".", "♛", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", "♛", "."],
    [".", "♛", ".", ".", ".", ".", ".", "."]
];
*/


let tablero = [
    [".", ".", "♛", ".", ".", ".", ".", "."],
    [".", ".", "♛", ".", ".", "♛", ".", "."],
    [".", ".", ".", "♛", ".", "", ".", "."],
    ["♛", ".", "♛", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "♛"],
    [".", ".", ".", ".", "♛", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", "♛", "."],
    [".", "♛", ".", ".", ".", ".", ".", "."]
];

let conflictos = 0;

function conflictoReinas(tablero) {
    const filas = tablero.length - 1;
    const columnas = tablero[0].length - 1;
    let conflictosCont = 0;
    for (let x = 0; x < columnas; x++) {
        for (let y = 0; y <= filas; y++) {
            if (tablero[x][y] === "♛") {
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
    let currentY1 = currentY+1;
    for (let x = ++currentX; x <= filas; x++) {
        if (tablero[currentY1][x] === "♛") {
            conflictos++;
            break;
        }
    }
    //horizontal pa la izquierda
    for (let x = --currentX; x >= 0; x--) {
        if (tablero[currentY1][x] === "♛") {
            conflictos++;
            break;
        }
    }
    //vertical pa arriba
    for (let y = --currentY; y >= 0; y--) {
        if (tablero[y][currentX] === "♛") {
            conflictos++;
            break;
        }
    }
    //vertical pa abajo
    for (let y = ++currentY; y <= columnas; y++) {
        if (tablero[y][currentX] === "♛") {
            conflictos++;
            break;
        }
    }
    //diagonal pa arriba izquierda
    for (let x = ++currentX, y = --currentY; x >= 0 && y >= 0; x--, y--) {
        if (tablero[y][x] === "♛") {
            conflictos++;
            break;
        }
    }

    //diagonal pa arriba derecha
    for (let x = ++currentX, y = --currentY; x <= columnas && y >= 0; x++, y--) {
        if (tablero[y][x] === "♛") {
            conflictos++;
            break;
        }
    }

    //diagonal pa abajo izquierda
    for (let x = --currentX, y = ++currentY; x >= 0 && y <= filas; x--, y++) {
        if (tablero[y][x] === "♛") {
            conflictos++;
            break;
        }
    }

    //diagonal pa abajo derecha
    for (let x = ++currentX, y = ++currentY; x <= columnas && y <= filas; x++, y++) {
        if (tablero[y][x] === "♛") {
            conflictos++;
            break;
        }
    }

    if (conflictos > 0) {
        return true;
    }
}

console.log(conflictoReinas(tablero));