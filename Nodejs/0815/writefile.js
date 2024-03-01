var fs = require("fs");

var data = `let i = 123;
let j = 10;
function add(a,b){
    return a+b
}
console.log(add(i,j));
`

fs.writeFile("output.js",data,(err)=>{
    err?console.log(err):console.log("Write OK.")

})