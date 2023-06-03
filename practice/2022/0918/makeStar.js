
function makeStars(n){
    let str= "", star="";
    for(let i = 0; i < n; i++){
        star+= "*";
        i==n-1 ? str+= star : str+= star+"\\n";
    }
    console.log(str)
}
makeStars(1); // *
makeStars(2); // *\n**\n
makeStars(5);