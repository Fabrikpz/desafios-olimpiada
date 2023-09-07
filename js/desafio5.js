let matriz = [
    [".", ".", "<", ">", ".", ".", "A", "A"],
    ["<", ">", "<", ">", "<", ">", "V", "V"],
    [".", ".", ".", ".", ".", "A", ".", "."],
    [".", ".", ".", ".", ".", "V", ".", "."],
    [".", "<", ">", ".", ".", ".", ".", "."]
]; // 5 x 8

function gravitas(g) {
    for (y = g.length - 4; y >= 0; y--) {
        for (x = 0; x < g[y].length; x++) {
            if((g[y][x] == "<" || g[y][x] == ">") && g[y+1][x] == "." && g[y+1][x+1] == "."){
                g[y+1][x] = g[y][x];
                g[y][x] = ".";
                g[y+1][x+1] = g[y][x+1];
                g[y][x+1] = ".";
                let auxY = y;
                while(g[auxY][x] == "." && g[auxY][x+1] == "."){
                    auxY+=1;
                    g[auxY+1][x] = g[auxY][x];
                    g[auxY][x] = ".";
                    g[auxY+1][x+1] = g[auxY][x+1];
                    g[auxY][x+1] = ".";
                    if(g[auxY+1][x] != "." || g[auxY+1][x+1] != "."){
                        break;
                    }
                }
            }

            if((g[y][x] == "V" || g[y][x] == "A" )&& g[y+1][x] == "."){
                g[y+1][x] = g[y][x];
                g[y][x] = g[y-1][x];
                g[y-1][x] = ".";
                let auxY2 = y;
                while(g[auxY2][x] == "."){
                    auxY2+=1;
                    g[auxY2+1][x] = g[auxY2][x];
                    g[auxY2][x] = g[auxY2-1][x];
                    g[auxY2-1][x] = ".";
                    if(g[auxY2+1][x] != "."){
                        break;
                    }
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
/* let auxY = y;
            if (g[y][x] == "<" || g[y][x] == ">" || g[y][x] == "V" || g[y][x] == "A") {
                while (g[auxY + 1][x] == ".") {
                    g[auxY + 1][x] = g[auxY][x];
                    g[auxY][x] = ".";
                    if (g[auxY][x + 1] == ">") {
                        g[auxY][x] = g[auxY - 1][x];
                        g[auxY - 1][x] = ".";
                        auxY += 1;
                        break;
                    }
                }
                if (g[auxY + 1][x] == "V" || g[auxY + 1][x] == "<" || g[auxY + 1][x] == ">") {
                    g[auxY][x] = g[auxY - 1][x];
                    g[auxY - 1][x] = ".";
                    auxY += 1;
                }
                if (g[auxY][x - 1] == "<" || g[auxY][x - 1] == ">") {
                    break;
                }
                if (auxY >= g.length - 1) {
                    auxY = y;
                    break;
                }
            }*/