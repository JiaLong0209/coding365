var geometryModule = (function() {
    return {
        calculate: {
            rectangle: (() => (width, height) => width * height)(),
            

            circle: (function() {
                return function(radius) {
                    return Math.PI * Math.pow(radius, 2);
                };
            })(),

            triangle: (function() {
                return function(base, height) {
                    return (base * height) / 2;
                };
            })()
        },

        info:{
            rectangle: (function() {
                return function(width, height) {
                    return width * height;
                };
            })(),

            circle: (function() {
                return function(radius) {
                    return Math.PI * Math.pow(radius, 2);
                };
            })(),

            triangle: (function() {
                return function(base, height) {
                    return (base * height) / 2;
                };
            })()
        },
    };
})();

// Usage:
var rectangleArea = geometryModule.calculate.rectangle(5, 10);
console.log("Rectangle Area:", rectangleArea);

var circleArea = geometryModule.calculate.circle(4);
console.log("Circle Area:", circleArea);

var triangleArea = geometryModule.calculate.triangle(6, 8);
console.log("Triangle Area:", triangleArea);