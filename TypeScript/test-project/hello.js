(function () {
    var say = function (param) { return "Say: ".concat(param); };
    var message = "Hello, world!";
    var a = message;
    console.log(say(a));
    console.log(typeof a);
    a = 550;
    console.log(say(a));
    console.log(typeof a);
    a = !50;
    console.log(say(a));
    console.log(typeof a);
    var b;
    console.log(typeof b);
})();