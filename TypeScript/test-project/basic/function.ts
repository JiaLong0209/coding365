interface SearchFunc {
	(source: string, subString: string): boolean;
}
(() => {

	let mySum = function(x: number, y: number): number {
		return x + y;
	};

	let mySum_2: (x: number, y: number) => number = function(x: number, y: number): number {
		return x + y;
	};

	let mySearch: SearchFunc;
	mySearch = function(source: string, subString: string) {
		return source.search(subString) !== -1;
	}

	function buildName(firstName: string = 'jialong', lastName?: string) {
		if (lastName) {
			return firstName + ' ' + lastName;
		} else {
			return firstName;
		}
	}


	let tomcat = buildName('Tom', 'Cat');
	let tom = buildName('Tom');

	function push(array: any[], ...items: any[]) {
		items.forEach(function(item) {
			array.push(item);
		});
	}

	let a: Array<any> = [];
	push(a, 1, 2, 3);

	function reverse(x: number): number;
	function reverse(x: string): string;
	function reverse(x: number | string): any {
		if (typeof x === 'number') {
			return Number(x.toString().split('').reverse().join(''));
		} else if (typeof x === 'string') {
			return x.split('').reverse().join('');
		}
	}

	console.log(reverse(1234))
	console.log(reverse('jialong'))

})()







