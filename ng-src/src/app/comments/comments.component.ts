import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {MdSnackBar} from '@angular/material';
import { NgForm } from '@angular/forms';

//Service imports
import { CommentsService } from '../services/comments.service';
import { UsersService } from '../services/users.service';
import { AuthService } from '../services/auth.service';

//Model imports
import { Comment } from '../models/comment';
import { User } from '../models/user';

@Component({
  selector: 'comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input() clipSlug: String;
  comments: Comment[];
  date: Date = new Date();
  user: User;
  @ViewChild('commentForm') commentForm: NgForm;

  constructor(private commentsService: CommentsService,
    private usersService: UsersService,
    private authService: AuthService,
    public snackBar: MdSnackBar) { }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  ngOnInit() {
    this.loadUser();
    this.loadComments();
  }

  ngOnChanges() {
    this.loadComments();
  }

  loadUser() {
    this.authService.getUser().subscribe(data => {
      this.user = data.user as User;
    }, err => {
      return false;
    });
  }

  isEditing(comment) {
    for(let entry of this.comments) {
      if(comment._id != entry._id && entry.editing) entry.editing = false;
    }
    if (comment.editing) comment.editing = false;
    else comment.editing = true;
  }

  loadComments() {
    this.commentsService.getComments(this.clipSlug).subscribe(data => {
      this.comments = [];
      for (let entry of data.comments) {
        let comment = new Comment;
        comment = entry as Comment;
        comment.editing = false;
        comment.points = this.countPoints(comment);
        this.setUserVotes(comment);
        this.comments.push(comment);
        this.sortComments(true);
      }
      //this.comments = data.comments as Comment[];
    }, err => {
      return false;
    });
  }

  countPoints(comment) {
    let total = 0;
    if (comment.votes) {
      for (let entry of comment.votes) {
        total += Number.parseInt(entry.value);
      }
    }
    return total;
  }

  setUserVotes(comment) {
    if (this.user) { //check if logged
      for (let entry of comment.votes) {
        if (entry.uid == this.user._id) { //checks if user has votes
          comment.currentVote = entry.value;
        }
      }
    }
  }

  sortComments(byPoints: boolean) {
    if (byPoints) {
      this.comments.sort(function(a, b) {
        return b.points - a.points;
      });
    } else {
      this.comments.sort(function(a, b) {
        return new Date(b.when).getTime() - new Date(a.when).getTime();
      });
    }
  }

  remove(comment) {
    this.commentsService.remove(comment).subscribe(res => {
      if (res.success) {
        let index = this.comments.findIndex(obj => obj._id == comment._id);
        this.comments.splice(index, 1);
        this.openSnackBar("Comment was successfuly removed!", null);
      } else {
        this.openSnackBar("Error occured while removing the comment!", null);
      };
    });
  }

  vote(comment, action) {
    this.commentsService.vote(comment, action).subscribe(res => {
      if (res.success) {
        comment.points = this.countPoints(res.comment);
        if (comment.currentVote == action) {
          comment.currentVote = 0;
        } else {
          comment.currentVote = action;
        }
        this.openSnackBar("Success!", null);
      }
    });
  }

  update(comment) {
    this.commentsService.update(comment).subscribe(res => {
      if (res.success) {
        comment.editing = false;
        this.openSnackBar("Comment was successfuly updated!", null);
      } else {
        this.openSnackBar("Error occured while updating the comment!", null);
      };
    });
  }

  onSubmit(form) {
    let comment = new Comment;
    comment.message = form.message;
    comment.clipSlug = this.clipSlug;
    comment.when = new Date();
    comment.editing = false;
    this.commentsService.create(comment).subscribe(res => {
      if (res.success) {
        this.commentForm.resetForm();
        res.comment.user = this.user;
        res.comment.points = this.countPoints(res.comment);
        this.comments.push(res.comment);
        this.sortComments(true);
        this.openSnackBar("Comment was successfuly published!", null);
      } else {
        this.openSnackBar("Error occured while publishing the comment!", null);
      };
    });
  }

}
