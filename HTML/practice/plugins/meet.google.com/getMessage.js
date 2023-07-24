function containsNumber(str) {
    return str.match(/\d/);
}

let sort = false
let input = document.querySelector('#bfTqV')
let msg = Array.from(document.querySelectorAll('div.oIy2qc')).map((e) => e.innerText)
let uni = [...new Set(msg)].filter(i => i.length <= 3 && !containsNumber(i))
let str = '\n本次課程簽到的學員: \n\n'
uni = sort ? uni.sort() : uni

console.log(msg)
console.log(uni)

for (let i in uni) {
    str += `${~~i+1}. ${uni[i]}\n`
}
str += `\n(總共${uni.length}位)`

console.log(str)

input.value = str