buf = Buffer.alloc(256);
buf2 = Buffer.alloc(256);
buf3 = Buffer.alloc(256);

len = buf.write("Hellow World", 0);
console.log("write bytes : " + len);
console.log(buf);

len = buf2.write("Hellow World",4);
console.log("write bytes : " + len);
console.log(buf2);

len = buf3.write("Hello World",2,3);
console.log("write bytes : "+ len);
console.log(buf3);