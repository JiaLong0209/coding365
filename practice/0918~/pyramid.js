
function pyramid(num){
    for(let i = 0; i < num; i++){
        let str = "";
        for(let j = i; j < num-1; j++){
            str += " "
        }   
        for(let k = num-i-1; k < num; k++){
            // k == num-i-1 ? str+= "*" : str+= "**";
            k == num-i-1 ?  (i != num-1 || num == 1? str+= "* " : str+= "**") : (k == num-1? str+="*" : (i == num-1 ? str+="**" : str+= "  "));
        }
        console.log(str);
    }

}
// pyramid(2)
//  *
// ***

// pyramid(3)
//   *
//  ***
// *****

pyramid(10)