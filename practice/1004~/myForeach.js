function myForEach(arr, callBack){
    for(i in arr){
        callBack(arr[i]);
    }
}

let a = [1,2,3,4]

myForEach(a,(x)=>{console.log(x)});