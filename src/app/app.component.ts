import { Component } from '@angular/core';
import { IUserComment } from './core/interfaces/user-comment.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'viafouraApp';
  comment: IUserComment = {
    name: 'Brad',
    designation: 'AUTHOR',
    commentTimeStamp: '2 MINUTES AGO',
    profileImageUrl: '../assets/profile-pic-new.png',
    replies: 21,
    likes: 123,
    dislikes: 0,
    commentText:
      'So What the German automaker is likely to focus on today is bigger picture. This will be the first we see the Taycan free from any prototype bodywork.',
  };

  constructor() {}
}
