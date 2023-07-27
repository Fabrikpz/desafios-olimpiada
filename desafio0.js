let auxkey = 23;
let numero = 3;
let keyToArr = String(auxkey).split('').map(Number);
let keyLength = keyToArr.length;
let frase = "abababccdzxy"; //resultado = cec ddd eff baa
const abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const test = (word, key, numero) => {
    let fraseRes = [];
    let auxNumber = 0; let cont = 0;
    let palabra = word.toLowerCase().split("");

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