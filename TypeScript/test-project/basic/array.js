function sum(a, b, c) {
    if (a === void 0) { a = 0; }
    if (b === void 0) { b = 0; }
    if (c === void 0) { c = 0; }
    var args = arguments;
    console.log(arguments);
    console.log(args);
    return a + b + c;
}
(function () {
    var arr = [1, 1, 3, 4, 5];
    var s_arr = ['a', 'b', 'c'];
    var list = ['a', 'b', 'c', 1, 2, 3];
    console.log(arr);
    console.log(s_arr);
    console.log(list);
    console.log(sum(10, 20, 30));
})();
