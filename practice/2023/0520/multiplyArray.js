let chinese = ['零','一','二','三','四','五','六','七','八','九','十']
function Convert(num){
    if(num % 3) return num;
    let length = num.toString().length;
	let result = num.toString().split('').reduce((acc,cur,index) => acc + 
        (length == 2 && cur == 0 || cur == 1 ? 
            index == 1 && cur == 0 
                ? "十" : num.toString()[0] == "1" 
            ? "十" : "十一" 
        : length == 2 && index == 1 && num.toString()[0] != "1"  
            ?`十${chinese[cur]}` : chinese[cur]
        ),"");
    return result;
}
function callArr(arr){
	let multiArr = [];
	for(let i of arr)  multiArr.push(i.reduce((acc,cur)=> acc*cur, 1))
    let result = multiArr.map((x,i)=>`第${Convert(i+1)}個陣列相乘是${x}`)
    return result.join('，');
}

const doubleArr = [
	[1,2,3],
	[3,5,6],
	[2,2,2,2],
	[1,2,3],
	[3,5,6],
	[2,2,2,2],
	[1,2,3],
	[3,5,6],
	[2,2,2,2],
	[1,2,3],
	[3,5,6],
	[2,2,2,2],
	[1,2,3],
	[3,5,6],
	[2,2,2,2],
	[1,2,3],
	[3,5,6],
	[2,2,2,2],
	[1,2,3],
	[3,5,6],
	[2,2,2,2],
	[1,2,3],
	[3,5,6],
	[2,2,2,2],
	[1,2,3],
	[3,5,6],
	[2,2,2,2],
	[1,2,3],
	[3,5,6],
	[2,2,2,2],
	[1,2,3],
	[3,5,6],
	[2,2,2,2],
	[1,2,3],
	[3,5,6],
	[2,2,2,2],
	[1,2,3],
	[3,5,6],
	[2,2,2,2],
	[1,2,3],
	[3,5,6],
	[2,2,2,2],
	[1,2,3],
];

console.log(callArr(doubleArr));

// output 第1個陣列相乘是6，第2個陣列相乘是90，第三個陣列6相乘是16



