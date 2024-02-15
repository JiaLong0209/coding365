(() => {

	type Name = string;
	type NameResolver = () => string;
	type NameOrResolver = Name | NameResolver;
	type NameOrResolver2 = string | (() => string);

	let getName: (n: NameOrResolver) => Name =
		(n: NameOrResolver) => {
			if (typeof n === 'string') {
				return n;
			} else {
				return n();
			}
		}

	// function getName(n: NameOrResolver): Name {
	// 	if(typeof n === 'string'){
	// 		return n;
	// 	}else {
	// 		return n();
	// 	}
	// }


	console.log(getName('yabe'))
	console.log(getName(() => 'yabe_function'))
})()



