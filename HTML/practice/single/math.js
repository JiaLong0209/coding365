function CubeSum(arr){
    return arr.reduce((acc, cur) => acc + cur ** 3, 0);
}

function Sum(arr){
    return arr.reduce((acc,cur) => acc + cur, 0);
}

function SquareSum(arr){
    return arr.reduce((acc,cur) => acc + cur**2,0);
}

function CreateArr(n) {
    let arr = [];
    for(let i = 1; i <= n; i++){
        arr.push(i);
    }
    return arr;
}

let arr = CreateArr(30);
let a =  arr.map( i => CreateArr(i));
console.log(a.reduce( (acc, cur) => acc + Sum(cur),0));