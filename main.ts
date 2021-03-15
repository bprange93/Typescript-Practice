"allowJs";
import {LikeButton } from './like.component'

let component = new LikeButton(10, true);

component.onClick();
console.log(`likeCount: ${component.likeCount}, isSelected: ${component.isSelected}`);

