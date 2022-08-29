    //Asynchronous

let fs = require("fs");
fs.readFile("./hello.js",function(err,data){
    return err? console.error(err):console.log(data.toString());
});
console.log("Program finish!");

