//Changed to class to apply Cohesion Principle here. X and Y fields, draw is a Function
var Point = /** @class */ (function () {
    function Point() {
    }
    //In class function is referred to as a method rather than a function. 
    Point.prototype.draw = function () {
        console.log('x: ' + this.x + ', Y: ' + this.y);
    };
    Point.prototype.getDistance = function (another) {
        //...
    };
    return Point;
}());
var point = new Point();
point.x = 1;
point.y = 2;
point.draw();
//These were taken out for better coding practices, makes the code cleaner and easier to read. They were no longer needed since methods
//were put in the class Point. 
// let drawPoint = (point: Point) => {
//     // ...
// }
// let getDistance = (pointA: Point, pointB: Point) => {
//     //...
// }
//Inline annotation works for simple cases.
// let drawPoint = (point: { x: number, y: number}) => {
//      // ...
// }
//No longer needed as well since draw() was put into the class and uses the fields in that class. 
// drawPoint({
//     x: 1,
//     y: 2
// })
