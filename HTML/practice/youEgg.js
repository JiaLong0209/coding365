function egg(str){
    let result = '';
    for(let i of str){
        result += `你${i}蛋了\n`;
    }

    console.log(result);
}

let str = "この悪いエッグ壞壞"


egg(str);