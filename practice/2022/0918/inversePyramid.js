

function inversePyramid(num){
    for(let i = 0; i < num; i++){
        let str = "";
        for(let j = i; j < num; j++){
            let space = "";
            for(let k = num-i; k < num; k++){
                space += " ";
            }
            j == i ? str+= space: null;
            j == num -1 ? str += "*" : str += "**";
        }
        console.log(str);
    }
}


// inversePyramid(3);
// *****
//  ***
//   *
inversePyramid(10);
