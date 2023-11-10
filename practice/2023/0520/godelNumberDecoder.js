const { decode } = require("qs/lib/utils");

let godelCode = {
    1: '~',
    2: 'v',
    // 2: '⋁',
    3: '⊃',
    4: '∃',
    5: '=',
    6: '0',
    7: 's',
    8: '(',
    9: ')',
    10: ',',
    11: '+',
    12: '*',
    13: 'x',
    17: 'y',
    19: 'z',
}

let godelCodeFlip = objectFilp(godelCode);

let primeArr = [];
let range = 30;

function objectFilp(obj){
    return Object.entries(obj).reduce((cur, entry) => {
        let [key, value] = entry;
        cur[value]  = ~~key;
        return cur;
    }, {});
}

function isPrime(n){
    let arr = Array.from({length: n}, (_, i) => !(n % i) ).slice(2);
    return arr.every(i => i == false)
}

function getPrimesRange(n){
    primeArr = Array.from({length: n+1}, (_, i) => [i, isPrime(i)]).slice(2).filter(i => i[1]).map(i => i[0]);
    return primeArr;
}

function getNthPrime(index){
    while(! primeArr[index-1]){
        getPrimesRange(range);
        range *= 10;
    }
    return primeArr[index-1];
}

function toGodelNumber(p){
    num = 1n;
    for(let i in p){
        i = ~~i;
        num *= BigInt(getNthPrime(i+1)) ** BigInt(godelCodeFlip[p[i]]);
        console.log(getNthPrime(i+1), godelCodeFlip[p[i]], num.toString())    
    }

    return num;
}

function toGodelCode(num){
    num = BigInt(num);
    getNthPrime(20);
    let p = '';
    let nthPrime = 1;
    let curPrime = getNthPrime(1);
    let curPrimePower = {1: 0};
    while(num > 1){
        while(!(num % BigInt(curPrime))){
            curPrimePower[nthPrime] += 1;
            num /= BigInt(curPrime);

        }   
        curPrime = getNthPrime(nthPrime+=1);
        curPrimePower[nthPrime] = 0;

    }

    for (let i in curPrimePower){
        if(! curPrimePower[i]) continue;
        p += godelCode[curPrimePower[i]];
    }

    console.log(curPrimePower)
    
    return p;
}

// let p = '0*x=0';
// let n = toGodelNumber(p);
// let code = toGodelCode(n);

let temp = 134014370487315742199056189063162190005814697956250000000n;
let code = toGodelCode(temp);

console.log(code); // s0+s0=ss0