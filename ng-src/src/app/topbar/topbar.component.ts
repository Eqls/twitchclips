import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

//Model imports
import { User } from '../models/user';

@Component({
  selector: 'topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  user: User;

  constructor(private authService: AuthService,
              private router: Router) { }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout().subscribe(data => {
      if(data.success) {
        this.router.navigate(['/']);
        this.user = null;
      } else this.router.navigate(['/error']);
    });
  }

  ngOnInit() {
    this.authService.getUser().subscribe(data => {
      this.user = data.user;
    }, err => {
      return false;
    });
  }

}
