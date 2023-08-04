let string = "hola";
let i = 0;
let stringLength = 0;

function contarLetras(string, i){
    if(string[i] === undefined){
        return stringLength;
    } else {
        stringLength+=1;
        return contarLetras(string, i+=1);
    }
}

console.log(contarLetras(string, i));