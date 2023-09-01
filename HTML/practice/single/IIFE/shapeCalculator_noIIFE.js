// Without IIFE

// Constants for calculations
var constants = {
    PI: Math.PI
};

// Rectangle calculations
function calculateRectangleArea(width, height) {
    return width * height;
}

function calculateRectanglePerimeter(width, height) {
    return 2 * (width + height);
}

// Circle calculations
var circle = {
    area: function(radius) {
        return constants.PI * Math.pow(radius, 2);
    },
    circumference: function(radius) {
        return 2 * constants.PI * radius;
    }
};

// Usage
var rectangleArea = calculateRectangleArea(5, 10);
var rectanglePerimeter = calculateRectanglePerimeter(5, 10);

var circleArea = circle.area(4);
var circleCircumference = circle.circumference(4);

console.log("Rectangle Area:", rectangleArea);
console.log("Rectangle Perimeter:", rectanglePerimeter);
console.log("Circle Area:", circleArea);
console.log("Circle Circumference:", circleCircumference);
