import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

//models
import { Comment } from '../models/comment';

import 'rxjs/add/operator/map';

@Injectable()
export class CommentsService {

  constructor(private http: Http) { }

  //Gets comments by defined clip slug
  getComments(slug) {
    return this.http.get('api/comments/'+slug, { withCredentials: true }).map(res => res.json());
  }

  //POST submits comment
  create(comment: Comment) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post('api/comments/', { comment }, { headers: headers, withCredentials: true }).map(res => res.json());
  }

  //POST vote comment
  vote(comment: Comment, action) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post('api/comments/vote/'+action, { comment }, { headers: headers, withCredentials: true }).map(res => res.json());
  }

  //POST removes comment from the DB
  remove(comment: Comment) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post('api/comments/remove', { comment }, { headers: headers, withCredentials: true }).map(res => res.json());
  }

  //PUT updates existing comment
  update(comment: Comment) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.put('api/comments/', { comment }, { headers: headers, withCredentials: true }).map(res => res.json());
  }

}
