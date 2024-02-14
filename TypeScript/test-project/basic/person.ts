interface Person { 
	readonly id: number; // reaondly 
	name: string;
	age?: number;  // ? optional 
	[propName: number]: string; // any property
}

(()=>{
	let c: Person = { id: 1, name: 'jialong', 1: 'one', 3: 'three' }
	let d: Person = { id: 2, name: 'yabe', age: 8 }

	let p: Person[] = [c, d]
	let p_t: Array<Person> = [d,c] // Array Generic 

	console.log(p)
	console.log(p_t)
})()
