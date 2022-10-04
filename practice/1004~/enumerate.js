function *enumerate(arr){
    for(i in arr){
        yield [i, arr[i]];
    }
}


// let arr = ['a','b','c','d','e','f','g'];
// for(let [i,c] of enumerate(arr)){
//     console.log(i, c)
// }
// console.log(enumerate(arr));


function* naturalNumber(){
    let n = 0;
    while(1){
        n++;
        yield n;
    }
}
let a = naturalNumber();
let str = "";
for(let i = 0;i < 12; i++){
    str += a.next().value;
}

console.log(str);