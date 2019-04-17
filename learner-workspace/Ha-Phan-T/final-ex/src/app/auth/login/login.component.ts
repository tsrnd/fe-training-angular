import { Component, OnInit } from '@angular/core';
import { LocalerService } from 'src/app/core/services/localer.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { CookieService } from 'ngx-cookie-service';

const USERS_KEY = "users";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  constructor(
    private localerService: LocalerService,
    private authService: AuthService,
    private router: Router,
    private cookieService: CookieService
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
        return v.email === this.email;
      });
      let pass = this.listUsers.find((v) => {
        return v.password === this.password;
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
      this.cookieService.set('user_login', this.email);
      console.log(this.cookieService.get('user_login'));
      this.router.navigate(['/account/dashboard'])
    }
  }
}
