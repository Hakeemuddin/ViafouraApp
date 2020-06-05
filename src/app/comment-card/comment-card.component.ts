import { Component, OnInit, Input } from '@angular/core';
import { IUserComment } from '../core/interfaces/user-comment.interface';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.css'],
})
export class CommentCardComponent implements OnInit {
  isActive = false;
  @Input() comment: IUserComment;
  constructor() {}

  ngOnInit(): void {}

  /*
    makes active class to 'true' on mouse Enter.
  */
  mouseEnter() {
    this.isActive = true;
  }

  /*
    makes active class to 'false' on mouse Enter.
  */
  mouseLeave() {
    this.isActive = false;
  }

  /*
    event for replies.
  */
  onRepliesClick() {
    console.log('clicked on replies');
  }

  /*
    event for reply.
  */
  onReplyClick() {
    console.log('clicked on reply');
  }

  /*
    event for likes.
  */
  onLikesClick() {
    console.log('clicked on likes');
  }

  /*
    event for dislikes.
  */
  onDislikesClick() {
    console.log('clicked on dislikes');
  }
}
