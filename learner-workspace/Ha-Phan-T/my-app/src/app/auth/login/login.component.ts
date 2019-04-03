import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LocalerService } from './../../share/services/localer.service';

const USERS_KEY = 'users';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private localerService: LocalerService,
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
      if (!email) {
        this.check = false;
        this.notice = "Login fail";
        return;
      }
      if (!pass) {
        this.check = false;
        this.notice = "Login fail";
        return;
      }
      this.check = true;
      this.notice = "Login success";

    }
    console.log(this.check);
  }
}
