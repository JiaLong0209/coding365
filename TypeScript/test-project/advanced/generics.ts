
function array<T>(length: number, value: T): Array<T>{
    let arr: T[] = []
    for(let i = length; i; i--){
        arr.push(value);
    }
    return arr;
}


console.log(array<string>(10, 'x'));
console.log(array<boolean>(5, true));

function copyFields<T extends U, U>(a: T, b: U): T{
    for(let key in b) a[key] = (<T>b)[key];
    return a;
}


let a = {a: 1, b: 2, c: 3, d:4}

console.log(copyFields(a, {a:10, b:100}))

//console.log(copyFields(a, {a:10, b:100, f:1000})) //Error
