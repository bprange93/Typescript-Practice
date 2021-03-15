
//Changed to class to apply Cohesion Principle here. X and Y fields, draw is a Function
class Point {

    constructor(private _x?: number, private _y?: number){

    }    
    //In class function is referred to as a method rather than a function. 
    draw(){
        console.log('x: ' + this._x + ', Y: ' + this._y);
    }
    
    get x(){
        return this._x;
    }

    set x(value){
        if (value < 0)
        throw new Error('value cannot be less than 0');

        this._x = value;
    }

}
//object instance of a class.
let point = new Point(1, 2);
let x = point.x;
point.x = 10;
point.draw();
