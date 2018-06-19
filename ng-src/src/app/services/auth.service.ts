import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  constructor(private http: Http) { }

  getUser() {
    return this.http.get('api/user', { withCredentials: true }).map(res => res.json());
  }

  login() {
    return window.location.href = 'api/auth/twitch';
  }

  logout() {
    return this.http.get('api/logout', { withCredentials: true }).map(res => res.json());
  }
}
