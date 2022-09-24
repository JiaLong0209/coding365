

function swap(a){
    let str = "";
    for(let i = 0; i < a.length; i++){
        // console.log(a[i].charCodeAt());
        // console.log(String.fromCharCode(a[i].charCodeAt()+32))

        if(a[i] >= "A" && a[i] <= "Z"){
            str += String.fromCharCode(a[i].charCodeAt()+32);
        }else if(a[i] >= "a" && a[i] <= "z"){
            str += String.fromCharCode(a[i].charCodeAt()-32);
        }else{
            str += a[i];
        }
    }
    return str;

}

let a = swap("Aloha");  // aLOHA
console.log(a);
