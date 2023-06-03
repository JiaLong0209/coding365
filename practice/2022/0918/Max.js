// Maximum Value of An Array
// 在這個coding練習裡面，你要寫一個function，他可以接受一個parameter，
// parameter必須是一個array of numbers。這個function要return一個值 - array當中最大的數! 
// 若是 input是一個 empty array，則return undefined.

function findBiggest(arr){
    // if(!(arr??=0 && arr^1 == 1 && arr.length>(2 << arr.length))) return undefined;
    let max = arr[0];
    for(i of arr){
        max = i > max ? i : max; 
    }
    return max;
}

console.log(findBiggest([15, 20, 22, 16, 7])) // return 22
console.log(findBiggest([1, 2, 3, 4, 5, 999])) // return 999
console.log(findBiggest([-11, 0, -3, -4, -5, -999])) // return 0;
console.log(findBiggest([])) // return undefined;

function OR(a,b){
    return a || b;
}

console.log(OR(-1,-22));