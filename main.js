"allowJs";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var like_component_1 = require("./like.component");
var component = new like_component_1.LikeButton(10, true);
component.onClick();
console.log("likeCount: " + component.likeCount + ", isSelected: " + component.isSelected);
