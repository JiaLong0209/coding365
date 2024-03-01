const buf1 = Buffer.alloc(10);
console.log(buf1)

const buf2 = Buffer.alloc(10, 1);
console.log(buf2)

const buf4 = Buffer.from([257,2,3]);
console.log(buf4);

const buf5 = Buffer.from('abcdefghjklmnopqrstuvwxyz');
    

console.log(buf5);
