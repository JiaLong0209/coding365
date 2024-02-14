(()=>{
	let say = (param: any ) => `Say: ${param}`
	let message: string = "Hello, world!";
	let a: string | number | boolean = message

	console.log(say(a))
	console.log(typeof a)

	a = 550
	console.log(say(a))
	console.log(typeof a)

	a = !50
	console.log(say(a))
	console.log(typeof a)

	let b: void 

	console.log(typeof b)
})()
