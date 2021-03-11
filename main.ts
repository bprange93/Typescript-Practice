
//Changed to class to apply Cohesion Principle here. X and Y fields, draw is a Function
class Point {
    x: number;
    y: number;
    //In class function is referred to as a method rather than a function. 
    draw(){
        //...
    }

    getDistance(another: Point){
        //...
    }
}

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