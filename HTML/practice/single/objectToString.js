let a = 1;
a = a.toString() // a = '1'
console.log(typeof(a))
c = '1'

console.log(typeof(c))
console.log(a, c)

console.log(a==='1')
console.log(c==='1')

console.log(a==='1' && c==='1')

let b = '34'
b = toString()
console.log(b)
console.log(typeof (b))


/* 
        Object.prototype.toString()
toString() メソッドは、オブジェクトを表す文字列を返します。
デモンストレーション：

    let a = {a:1,b:2,c:'3'}
    a.toString()            // '[object Object]'
    window.toString()       // '[object Window]'
    Math.toString()         // '[object Math]'
    toString()              // '[object Undefined]'
    
すべてのオブジェクトは toString() メソッドがあります。
toString() は "[object type]" という文字列を返します（type はそのオブジェクトの型です）。
また、Javascript 1.8.5 から、 toString() を null にたいして呼び出した場合には "[object Null]" を、
undefined に対して呼び出した場合には "[object Undefined]" を返すようになります。
これは ECMAScript 5th Edition とその後のエラッタによって定義されました。

*/