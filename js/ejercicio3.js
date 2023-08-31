let nums = [33, 65, 2, 49, 10, 51, 15];
nums.sort((a, b) => {
    return a - b;
});

// [2, 10, 15, 33, 49, 51, 65]
function binarySearch(arr, num, posMedia) {
    posMedia = Math.floor(arr.length / 2);

    if (arr[posMedia] == num) {
        return true;
    }

    if(arr.length == 1){
        return false;
    }

    if(num < arr[posMedia]){
        let auxArr = arr.slice(0, posMedia);
        posMedia -= Math.round(posMedia/2);
        return binarySearch(auxArr, num, posMedia);
    }

    if(num > arr[posMedia]){
        let auxArr = arr.slice(posMedia+1, arr.length);
        posMedia += Math.round(posMedia/2);
        return binarySearch(auxArr, num, posMedia);
    }
}

// [2, 10, 15, 33, 49, 51, 65]
console.log(binarySearch(nums, 65, 0));