

function stars2(num){
    console.log(num)
    for(let i = 0; i < num*2-1; i++){
        let str = "";
        for(let j = num - i -1; j < num; j++){
            if(i > num-1){
                for(let k = i; k < num*2-1; k++){
                    str += "*";
                }
            break;
            }else{
                str += "*";
            }
        }
        console.log(str);
    }
    console.log("\n");
}

function stars2_Arr(num){
    console.log(num)
    let str = "";
    let strArr = [];
    for(let i = 0; i < num; i++){
        str += "*";
        if(i != num){
            strArr.push(str)
        }
        console.log(str);

    }
    for(let i = strArr.length-1; i > -1; i--){
        console.log(strArr[i]);
    }
    console.log("\n")
}

// start2(2);
// *
// **
// *
let amount = 2000;

let start1 = new Date();
stars2(amount);
let end1 = new Date();

let start2 = new Date();
stars2_Arr(amount);
let end2 = new Date();

console.log(`stars1 execute time : ${(end1 - start1)/1000} s`);
console.log(`stars2 execute time : ${(end2 - start2)/1000} s`);
// *
// **
// ***
// **
// *
