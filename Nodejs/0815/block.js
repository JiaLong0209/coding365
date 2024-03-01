    //Synchronous

let fs = require('fs');

let data = fs.readFileSync("block.js",function(err,data){
    return err ? err.stack : data.toString();
});
console.log(data);

console.log("Done!");