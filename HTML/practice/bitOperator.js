// x = 11, 1011,
function test(x){
	let rev = 0;
  	while(x > 0){
    	rev <<= 1;
    	if((x & 1) == true){
        	rev ^= 1;
        }
      	x>>= 1;
    }
  	return rev;  //expect 13, 1101
}

console.log(test(11));