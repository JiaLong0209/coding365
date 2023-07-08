

function Power_Recursion_Ternary(a, b){
    return b==1 ? a : a * Power_Recursion_Ternary(a, b-1);
}




function Power_recursion(a,b){ 
    if(b == 1){
        return a;
    }else{
        return a * Power_recursion(a,b-1);
    }
}



function Power_for(a,b){
    let sum = 1;
    for(let i = 0; i < b; i++){
        sum *= a
    }
    return sum;
}


function Power_while(a,b){
    sum = 1;
    while(b-- != 0){
        sum *= a;
    }
    return sum;
}


function Power_bit(a,b){   // this function only can solve the number 2
    return 1 << b
}


function Power(a,b){
    return a ** b;
}




// a = 2;
// b = 2;

// console.log(Power_Recursion_Ternary(a,b));
// console.log(Power_recursion(a,b));
// console.log(Power_for(a,b));
// console.log(Power_while(a,b));
// console.log(Power_bit(a,b));
// console.log(Power(a,b));


let a = 5;
let b = 10;

let arr = [a<b, a>b, a++, a+b, Power_Recursion_Ternary(b,a),function hello(){console.log("Hello")}]

// console.log(arr)

arr[5];


console.log( !1 ^ !![] & ![] )
