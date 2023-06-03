

function BinPow(a, n){
    let r = 1n;
    while(n > 0){
        if(n % BigInt(2) == 1) r *= a;
        a *= a;
        n /= 2n;
    }
    return r;
}

function Pow(a, n){
    let r = 1n;
    for(let i = 0; i < n; i++){
        r *= a;
    }
    return r;
}

function Pow_Re(a, n){
    return n==0n ? 1n : a*Pow_Re(a,n-1n);
}

let a = 2n;
let n = 1000000n;

var start = new Date();
console.log(BinPow(BigInt(a),BigInt(n)));
var end = new Date();
var diff1 = (end-start)/1000;


var start = new Date();
console.log(Pow(a,n));
var end = new Date();
var diff2 = (end-start)/1000;


// var start = new Date();
// console.log(Pow_Re(a,n));
// var end = new Date();
// var diff3 = (end-start)/1000;
console.log(`BinPow time : ${diff1}s`);
console.log(`Pow time : ${diff2}s`);
// console.log(`Pow_Re time : ${diff3}s`);

