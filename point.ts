
//this makes it a module
export class Point {

    constructor(private _x?: number, private _y?: number){

    }    
    //In class function is referred to as a method rather than a function. 
    draw(){
        console.log('x: ' + this._x + ', Y: ' + this._y);
    }
}

//Files = modules. 
