"allowJs";
//Per the tutorial they used *.ts to bring all ts files. This doesn't work and was how I was getting all of my errors. 
import {LikeButton } from './like.component'

let component = new LikeButton(10, true);

component.onClick();
console.log(`likeCount: ${component.likeCount}, isSelected: ${component.isSelected}`);

