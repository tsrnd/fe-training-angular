import { Component, OnInit } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import {LocalerService} from './../../core/service/localer.service';

const USER_STORAGE_KEY = 'users';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  err: any;
  isSuccess: any;
  myemail: string;
  mypassword: string;
  constructor(
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
      this.isSuccess = true;
      return
    }
    this.err = `Account doesn't exist. Enter a different account.`;
    this.isSuccess = false;
  }
}
