let result = !(function(e){
    let a = 10;
    let b = 20;
    let sum = a + b;
    console.log(e)
    return sum - sum; // 0
})([]) // false

console.log(result)