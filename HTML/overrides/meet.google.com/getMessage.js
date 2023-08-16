function containsNumber(str) {
    return str.match(/\d/);
}

function isName(str) {
    return containsNumber(str) ? false : str.length <= 3 || (str.match('簽到') && str.length <= 6) ? true : false
}

function format(str){
    return str.match('簽到') ? str.slice(0,3) : str
}

let sort = false
let input = document.querySelector('#bfTqV')
let msg = Array.from(document.querySelectorAll('div.oIy2qc')).map((e) => e.innerText)
let uni = [...new Set(msg)].filter(i => isName(i.replace(/ /g,''))).map(i => format(i))
let str = '\n本堂課簽到的學員: \n\n'
uni = sort ? uni.sort() : uni

console.log(uni)

for (let i in uni) {
    str += `${~~i + 1}. ${uni[i]}\n`
}
str += `\n(總共${uni.length}位)`

console.log(str)
input.value = str
