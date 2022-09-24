

function intersection(a,b){
    let arr = [];
    for(let i = 0; i < a.length; i++){
        for(let j = 0; j < b.length; j++){
            if(a[i] == b[j] && !arr.includes(a[i])){
                arr.push(a[i]);
            }
        }
    }
    return arr;
}

function intersectionSet(a,b){
    let set = new Set();
    for(let i = 0; i < a.length; i++){
        for(let j = 0; j < b.length; j++){
            a[i] == b[j] ? set.add(a[i]) : null;
        }
    }
    let arr = [];
    set.forEach(i=>{arr.push(i)})
    return arr;
}



let a = [10,3,4,5,6]
let b = [12,3,6,6,6]

let c = [6,6,6,6,6]

let arr = intersectionSet(a,b);
let arr2 = intersection(a,b);
console.log(arr);
console.log(arr2);