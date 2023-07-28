let auxkey = 23;
let numero = 2;
let keyToArr = String(auxkey).split('').map(Number);
let keyLength = keyToArr.length;
let frase = "YO HE LOGRADO ENCENDER UNA CERILLA"; //resultado = ar jh nr iu cg qh of gp fh tx od eh tl nñ c
const abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const test = (word, key, numero) => {
    let fraseRes = [];
    let auxNumber = 0; 
    let cont = 0;
    let palabraSinEspacios = word.replace(/\s/g, '');
    let palabra = palabraSinEspacios.toLowerCase().split("");

    palabra.map((letra) => {
        let indice = parseInt((abc.indexOf(letra) + key[auxNumber]) % 27); 
        fraseRes.push(abc[indice]);
        auxNumber++;
        cont++;
        if (auxNumber >= keyLength) {
            auxNumber = 0;
        }
        if (cont == numero) {
            auxNumber = 0;
            cont = 0;
        }
    });
    return fraseRes.join("");
};
console.log(test(frase, keyToArr, numero)); 