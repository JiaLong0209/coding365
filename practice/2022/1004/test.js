// var let const;

// let abc = 5;
// let b = 10;
// b = 20;
let i;
// console.log(abc*b)
// for(i = 0; i < 5; i=i+1){
//     if(i == 3){
//         console.log(i);
//     }else if(i == 1){
//         console.log(i);
//     }
//     else{
//        console.log(-1); 
//     }
// }

let n = 25;
let isPrime = true;
for(i = 2; i < n; i=i+1){
    if(n % i == 0){
        console.log(i)
        isPrime = false;
        break;
    }
}
console.log(isPrime);

// console.log(10 % 5)
// return true;
