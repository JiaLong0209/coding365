
function array<T>(length: number, value: T): Array<T>{
    let arr: T[] = []
    for(let i = length; i; i--){
        arr.push(value);
    }
    return arr;
}


console.log(array(10, 'x'));
console.log(array(5, true));
console.log(array(5, true));






