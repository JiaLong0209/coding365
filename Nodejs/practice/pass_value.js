
function change(number){
    number = 123
}

function change_obj(obj){
    obj["a"] = 123
}

function swap(a, b){
    temp = a
    a = b 
    b = temp
}


let a = 100
let b = 201

console.log(a,b)
swap(a,b)
console.log(a,b)

let obj = {"a": 100}
console.log(a)
change(a)
console.log(a)

console.log("obj:")

console.log(obj)
change_obj(obj)
console.log(obj)

