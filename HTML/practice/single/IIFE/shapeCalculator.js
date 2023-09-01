var shapeCalculator = (function() {
    // Private variables or functions within the module
    var constants = {
        PI: Math.PI
    };

    function calculateRectangleArea(width, height) {
        return width * height;
    }

    function calculateRectanglePerimeter(width, height) {
        return 2 * (width + height);
    }

    return {
        // Public interface for rectangle calculations
        rectangle: {
            area: calculateRectangleArea,
            perimeter: calculateRectanglePerimeter
        },

        // Public interface for circle calculations
        circle: {
            area: function(radius) {
                return constants.PI * Math.pow(radius, 2);
            },
            circumference: function(radius) {
                return 2 * constants.PI * radius;
            }
        }
    };
})();

// Usage
var rectangleArea = shapeCalculator.rectangle.area(5, 10);
var rectanglePerimeter = shapeCalculator.rectangle.perimeter(5, 10);

var circleArea = shapeCalculator.circle.area(4);
var circleCircumference = shapeCalculator.circle.circumference(4);

console.log("Rectangle Area:", rectangleArea);
console.log("Rectangle Perimeter:", rectanglePerimeter);
console.log("Circle Area:", circleArea);
console.log("Circle Circumference:", circleCircumference);