let index1 = 0;
let index2 = 1;
let cont = 0;
function ordenar(arr, index1, index2, cont){
    if(cont == arr.length-2){
        return arr;
    }

    if(arr[index1] > arr[index2]){
        aux = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = aux;
        ordenar(arr, index1+1, index2-1, cont+1);
    } else {
        ordenar(arr, index1, index2+1, cont);
    }
}

console.log(ordenar([3,2,-1,5], index1, index2, cont));
