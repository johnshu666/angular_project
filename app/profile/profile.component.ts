import { CommentService } from './../comment.service';
import { ApiService } from './../api.service';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile;
  comments: Comment[];
  commentFormError: {};
  isSubmitting = false;
  isDeleting = false;
  commentControl = new FormControl();

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private commentService: CommentService,
  ) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.route.data.subscribe(data => console.log('test in profile', data));
  }

  // tslint:disable-next-line: typedef
  onTaggleFavorite(favorited: boolean) {
    this.profile.favorited = favorited;

    if (favorited) {
      this.profile.favoriteCount++;
    } else {
      this.profile.favoriteCount--;
    }
  }
  addComment() {
    this.isSubmitting = true;
    const commentBoday = this.commentControl.value;

    this.commentService
      .add('/comments', commentBoday)
      .subscribe(
          comment => {
            console.log("test", comment);
            // this.comments.unshift(comment);
            this.commentControl.reset('');
            this.isSubmitting = false;
        },
          error => {
            this.isSubmitting = false;
            this.commentFormError = error;
          }
      );

  }
}

