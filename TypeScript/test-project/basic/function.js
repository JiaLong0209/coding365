(function () {
    var mySum = function (x, y) {
        return x + y;
    };
    var mySum_2 = function (x, y) {
        return x + y;
    };
    var mySearch;
    mySearch = function (source, subString) {
        return source.search(subString) !== -1;
    };
    function buildName(firstName, lastName) {
        if (firstName === void 0) { firstName = 'jialong'; }
        if (lastName) {
            return firstName + ' ' + lastName;
        }
        else {
            return firstName;
        }
    }
    var tomcat = buildName('Tom', 'Cat');
    var tom = buildName('Tom');
    function push(array) {
        var items = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            items[_i - 1] = arguments[_i];
        }
        items.forEach(function (item) {
            array.push(item);
        });
    }
    var a = [];
    push(a, 1, 2, 3);
    function reverse(x) {
        if (typeof x === 'number') {
            return Number(x.toString().split('').reverse().join(''));
        }
        else if (typeof x === 'string') {
            return x.split('').reverse().join('');
        }
    }
    console.log(reverse(1234));
    console.log(reverse('jialong'));
})();
