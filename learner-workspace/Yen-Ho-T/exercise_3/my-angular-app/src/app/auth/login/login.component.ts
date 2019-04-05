import { Component, OnInit } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import {LocalerService} from './../../core/service/localer.service';
import { AuthService } from 'src/app/core/service/auth.service';
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
    private as: AuthService,
    private router: Router,
    private ls: LocalerService
  ) { }

  ngOnInit() {
  }
  checkEmail(value: string) {
    Validators.email
  }
  onSubmit(ng: NgForm) {
    let listUserString = this.ls.getLocalStorage(USER_STORAGE_KEY);
    let listUser = listUserString? JSON.parse(listUserString): null;
    if (listUser && listUser.find(user => {
      return user.email == ng.controls.email.value && user.password == ng.controls.password.value
    })) {
      this.err = null;
      this.as.isLoggedIn = true;
      this.router.navigate([this.as.redirectUrl || '/'])      
      return
    }
    this.err = `Account doesn't exist. Enter a different account.`;
  }
}
