let maxSum = (arr, k) => Math.max(...arr.map((n, index) => arr.slice(index, k + index)).map(n => n.reduce((cur, acc) => cur + acc)))

let k = 3
let arr = [3, 2, 4, 5, 1, 2, 50, 3, 6, 1, 100]
console.log(maxSum(arr, k)) // 107