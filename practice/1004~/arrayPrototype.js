// Array.prototype.each = (callback)=>{
//     for(let i = 0; i < this.length; i++){
//         console.log("call")
//         callback(this[i]);
//     }
// }
Array.prototype.each = function (callback) {
	if (callback && typeof callback === 'function') {
		for (var i = 0; i < this.length; i++) {
			callback(this[i], i, this);
		}
	}
};
let a = [2,3,4,5];
a.each((x)=>{
    console.log(x);
})
