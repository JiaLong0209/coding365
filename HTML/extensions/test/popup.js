console.log("hello world!");

function print(i){
    console.log(i)
}

for (let i = 0; i < 3; i++){
    setTimeout(print, 1000 * i, i);
}
