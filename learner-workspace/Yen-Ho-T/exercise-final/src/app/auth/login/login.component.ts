import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {LocalerService} from './../../core/service/localer.service';
import { AuthService } from './../../core/service/auth.service';
import { Router } from '@angular/router';

const USER_STORAGE_KEY = 'users';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  err: any;
  myemail: string;
  mypassword: string;
  constructor(
    private authService: AuthService,
    private router: Router,
    private localerService: LocalerService
  ) { }

  ngOnInit() {
  }
  onSubmit(ng: NgForm) {
    const listUserString = this.localerService.getLocalStorage(USER_STORAGE_KEY);
    const listUser = listUserString ? JSON.parse(listUserString) : null;
    let userLogin: any;
    if (listUser && (userLogin = listUser.find(user => {
      return user.email === ng.controls.email.value && user.password === ng.controls.password.value;
    }))) {
      this.err = null;
      this.authService.login().subscribe(ob => {
        this.authService.userLogin = userLogin;
        this.router.navigate([this.authService.redirectUrl || '/dashboard']);
      });
      return;
    }
    this.err = `Account doesn't exist. Enter a different account.`;
  }
}
