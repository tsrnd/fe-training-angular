import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {


  constructor(public authService: AuthService, public router: Router) {
  }

  ngOnInit() { }

  login() {
    this.authService.login().subscribe(() => {
      if (this.authService.isLoggedIn) {
        // set isLoggedIn=true
      }
    });
  }

  logout() {
    // set isLoggedIn=false
    this.authService.logout();
  }
}
