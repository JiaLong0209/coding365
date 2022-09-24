
function Flatten(arr,num){
    let result = [];

    function flatten(arr){
        for(let i = 0; i < arr.length; i++){
            arr[i].length == undefined ? result.push(arr[i]) : flatten(arr[i]);
        }
    }


    function flatten_forEach(arr){
        arr.forEach(i=>{
            i.length == undefined ? result.push(i) : flatten_forEach(i);
        })
    }

    switch(num){
        case 0:
            flatten(arr);
            break;
        case 1:
            flatten_forEach(arr);
            break;
    }

    flatten(arr);

    return result;
}



// let result = [];
let a = Flatten([1, [[], 2, [0, [1]], [3]], [1, 3, [3], [4, [1]], [2]]],0);  // returns [1, 2, 0, 1, 3, 1, 3, 3, 4, 1, 2]
let b = Flatten([1, [[], 2, [0, [1]], [3]], [1, 3, [3], [4, [1]], [2]]],1);  // returns [1, 2, 0, 1, 3, 1, 3, 3, 4, 1, 2]
console.log("\nFlatten = \n"+a);

console.log("\nFlatten_forEach = \n"+b);