interface NumberArray { 
	[propName: number]: number;
}

interface StringArray { 
	[propName: number]: string;
}

interface List { 
	[propName: number]: any;
}


function sum(a:any = 0, b:any = 0, c:any = 0): number {
	let args: {
		[index: number]: number;
		length: number;
		callee: Function;
	} = arguments;

	console.log(arguments)
	console.log(args)
	return a+b+c
}


(()=>{
	let arr: NumberArray = [1,1,3,4,5];
	let s_arr: StringArray = ['a', 'b', 'c']
	let list: List=  ['a', 'b', 'c', 1,2,3]

	console.log(arr)
	console.log(s_arr)
	console.log(list)

	console.log(sum(10,20,30))
})()



