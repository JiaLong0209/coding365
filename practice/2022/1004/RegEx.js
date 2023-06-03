const regex = new RegExp(".*[A-Z]+.*[0-9]+.*|.*[0-9]+.*[A-Z]+.*", 'gm')
const str = `
smt0330BD
st03dg0a
mT0330adfD`;
let m;
// console.log(regex.exec(str))
while ((m = regex.exec(str)) !== null) {
    console.log(m.index, regex.lastIndex);
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
        regex.lastIndex++;
    }
    
    // The result can be accessed through the `m`-variable.
    m.forEach((match, groupIndex) => {
        console.log(`Found match, group ${groupIndex}: ${match}`);
    });
}
// console.log(str);
// str.replace(regex,"re");
// console.log(str);