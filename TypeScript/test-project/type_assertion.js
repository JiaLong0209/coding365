function getLength(a) {
    if (a.length) {
        return a.length;
    }
    else {
        return a.toString().length;
    }
}
console.log(getLength(1234));
console.log(getLength('jialong'));
