"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
//this makes it a module
var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    //In class function is referred to as a method rather than a function. 
    Point.prototype.draw = function () {
        console.log('x: ' + this._x + ', Y: ' + this._y);
    };
    return Point;
}());
exports.Point = Point;
//Files = modules. 
