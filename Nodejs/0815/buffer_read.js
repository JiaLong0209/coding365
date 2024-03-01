buf = Buffer.alloc(26);

for(let i = 0; i < 26 ; i++){
    buf[i] = i + 97;
}

console.log(buf.toString("ascii"));
console.log(buf.toString("hex"));
console.log(buf.toString("utf-8"));
console.log(buf);
