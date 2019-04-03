import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LocalerService } from '../feature/service/localer.service';
import { userInfo } from 'os';

const REGISTER = 'register';
@Component({
  selector: 'app-ex11',
  templateUrl: './ex11.component.html',
  styleUrls: ['./ex11.component.scss']
})
export class Ex11Component implements OnInit {

  msgErr: string;
  msgSuccess: string;
  constructor(
    private localService: LocalerService
  ) { }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form.value);
    let data = this.localService.getLocalStorage(REGISTER);
    if (data.find((user) => {
      return user.email === form.value.email && user.password === form.value.password;
    })) {
      this.msgErr = null;
      this.msgSuccess = 'Login successfully!';
    } else {
      this.msgSuccess = null;
      this.msgErr = "Account doesn't exist. Enter a different account.";
    }
  }
}
