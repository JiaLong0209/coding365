function getLength(a: string | number): number{
	if((<string>a).length){
		return (<string>a).length;
	}else { 
		return a.toString().length;
	}
}

console.log(getLength(1234))
console.log(getLength('jialong'))
