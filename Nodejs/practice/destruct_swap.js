function swap(a, b) {
    return [b, a];
}

let a = 100;
let b = 200;

console.log(a, b); 

[a, b] = swap(a, b);

console.log(a, b); 


