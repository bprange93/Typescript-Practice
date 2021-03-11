// You don't want to do it like this because there are too many perameters. 
// let drawPoint = (x, y, a, b, c, d, e) => {
//     // ...
// }

//this is how to incoporate interfaces in Typescript, always use uppercase when using interfaces. 
interface Point {
    x: number,
    y: number
}

let drawPoint = (point: Point) => {
    // ...
}

//Inline annotation works for simple cases.
// let drawPoint = (point: { x: number, y: number}) => {
//      // ...
// }

drawPoint({
    x: 1,
    y: 2
})