
function jingongge(arr){
    // console.log(arr);
    let unfindIndex = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            
            if(arr[i][j] == -1){
                let sum = 0;
                let count = 0;
                // row
                for(let k = 0; k < arr.length; k++){
                    if(k == j) continue;
                    if(arr[i][k] == -1) count += 1;
                    sum += arr[i][k];
                }
                if(count > 0){
                    count = 0;
                    sum = 0;
                }else{
                    arr[i][j] = 15-sum;
                    continue;
                }

                //column
                for(let k = 0; k < arr.length; k++){
                    if(k == i) continue;
                    if(arr[k][j] == -1) count += 1;
                    sum += arr[k][j];
                }
                if(count > 0){
                    count = 0;
                    sum = 0;
                }else{
                    arr[i][j] = 15-sum;
                    continue;
                }

                unfindIndex.push([i,j]);

            }
        }
    }   
    
    for(let index of unfindIndex){
        let i = index[0];
        let j = index[1];
        let sum = 0;
        let count = 0;
        // row
        for(let k = 0; k < arr.length; k++){
            if(k == j) continue;
            if(arr[i][k] == -1) count += 1;
            sum += arr[i][k];
        }
        if(count > 0){
            count = 0;
            sum = 0;
        }else{
            arr[i][j] = 15-sum;
            continue;
        }

        //column
        for(let k = 0; k < arr.length; k++){
            if(k == i) continue;
            if(arr[k][j] == -1) count += 1;
            sum += arr[k][j];
        }
        if(count > 0){
            count = 0;
            sum = 0;
        }else{
            arr[i][j] = 15-sum;
            continue;
        }
    }



    return arr;
}

let arr = [[-1,3,8],[9,-1,1],[2,-1,-1]];
let arr2 = [[-1,-1,-1],[9,-1,1],[2,7,6]];
let arr3 = [[4,3,-1],[9,-1,1],[-1,7,-1]];
let arr4 = [[-1,-1,-1],[-1,5,1],[-1,7,6]];
// for(let i of arr){
//     console.log(` ${i} `);
// }

console.log(jingongge(arr));
console.log(jingongge(arr2));
console.log(jingongge(arr3));
console.log(jingongge(arr4));