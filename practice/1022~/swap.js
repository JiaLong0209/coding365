function swap(arr, i , j){
    let t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
    return arr;
}

function swap2(arr, i , j){
    arr[i] ^= arr[j];
    arr[j] ^= arr[i];
    arr[i] ^= arr[j];
    return arr;
}

let arr = [1,2,3,4,5];
console.log(swap(arr,0,4));
console.log(swap(arr,0,4));