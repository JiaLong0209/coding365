interface Person { 
	readonly id: number; // reaondly 
	name: string;
	age?: number;  // ? optional 
	[propName: number]: string; // any property
}

let c: Person = {
	id: 1,
	name: 'jialong',
	1: 'one', 
	3: 'three',
}
console.log(c)

console.log(typeof c)

