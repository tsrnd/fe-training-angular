import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LocalerService } from './../../core/services/localer.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

const USERS_KEY = 'users';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private localerService: LocalerService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  check;
  notice;
  listUsers = [];
  onSubmitLogin(formLogin) {
    let listUsersString = this.localerService.getLocalStorage(USERS_KEY);
    this.listUsers = listUsersString ? JSON.parse(listUsersString) : [];
    if (formLogin.valid) {
      let email = this.listUsers.find((v) => {
        return v.email === formLogin.value.email;
      });
      let pass = this.listUsers.find((v) => {
        return v.password === formLogin.value.password;
      });
      if (!email || !pass) {
        this.check = false;
        this.notice = "Login fail";
        this.authService.isLoggedIn = false;
        return;
      }
      this.check = true;
      // this.notice = "Login success";
      this.authService.isLoggedIn = true;
      this.router.navigate(['/account/profile'])
    }
  }
}
