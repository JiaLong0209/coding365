
function factorPrime(num){
    let str = "";
    let factor = 2;
    while(num > 1){
        while(num % factor == 0){
            if(num / factor == 1){
                str += `${factor}`;
                num /= factor;
            }else{
                str += `${factor} x `;
                num /= factor;
            }
            console.log(num)
        }
        let nextfactor;
        for(let i = factor+1; i <= num; i++){
            let isPrime = true;
            for(let j = 2; j < i; j++){
                if(i % j == 0){
                    isPrime = false;
                    continue;
                }
            }
            if(isPrime){
                nextfactor = i;
                break;
            }
        }
        factor = nextfactor;
    }
    return str;
}
console.log(factorPrime(120)); // returns "2 x 2 x 2 x 3 x 5"