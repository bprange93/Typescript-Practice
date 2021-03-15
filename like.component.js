"allowJs";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeButton = void 0;
var LikeButton = /** @class */ (function () {
    function LikeButton(_likeCount, _isSelected) {
        this._likeCount = _likeCount;
        this._isSelected = _isSelected;
    }
    LikeButton.prototype.onClick = function () {
        this._likeCount += (this._isSelected) ? -1 : +1;
        this._isSelected = !this._isSelected;
    };
    Object.defineProperty(LikeButton.prototype, "likeCount", {
        get: function () {
            return this._likeCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LikeButton.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        enumerable: false,
        configurable: true
    });
    return LikeButton;
}());
exports.LikeButton = LikeButton;
