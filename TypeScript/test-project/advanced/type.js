(function () {
    var getName = function (n) {
        if (typeof n === 'string') {
            return n;
        }
        else {
            return n();
        }
    };
    // function getName(n: NameOrResolver): Name {
    // 	if(typeof n === 'string'){
    // 		return n;
    // 	}else {
    // 		return n();
    // 	}
    // }
    console.log(getName('yabe'));
    console.log(getName(function () { return 'yabe_function'; }));
})();
