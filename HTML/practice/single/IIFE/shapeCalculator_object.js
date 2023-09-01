// Define an object named "shapeCalculator"
var shapeCalculator = {
    constants: {
        PI: Math.PI
    },
    rectangle: {
        area: function(width, height) {
            return width * height;
        },
        perimeter: function(width, height) {
            return 2 * (width + height);
        }
    },
    circle: {
        area: (radius) => shapeCalculator.constants.PI * radius * radius,
        // function(radius) {
        //     return shapeCalculator.constants.PI * Math.pow(radius, 2);
        // },
        circumference: function(radius) {
            return 2 * shapeCalculator.constants.PI * radius;
        }
    }
};

// Usage
var rectangleArea = shapeCalculator.rectangle.area(5, 10);
var rectanglePerimeter = shapeCalculator.rectangle.perimeter(5, 10);

var circleArea = shapeCalculator.circle.area(4);
var circleCircumference = shapeCalculator.circle.circumference(4);

console.log("Rectangle Area:", rectangleArea);
console.log("Rectangle Perimeter:", rectanglePerimeter);
console.log("Circle Area:", circleArea);
console.log("Circle Circumference:", circleCircumference);
