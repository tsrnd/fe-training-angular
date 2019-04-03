import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LocalerService } from './../../services/localer.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private localService: LocalerService) { }

  key = 'userRegister';
  firstUser: any;
  listAccount: any;
  password: string;
  email: string;
  showError = false;
  showSuccess = false;
  ngOnInit() {
    this.firstUser = this.localService.getLocalStorage(this.key)[0];
    this.email = this.firstUser.email;
    this.password = this.firstUser.password;
    this.listAccount = this.localService.getLocalStorage(this.key);
  }

  onSubmit(f: NgForm) {
    this.hideAlert();
    if (this.listAccount && this.checkEmail(f) && this.checkPassword(f)) {
      return this.showSuccess = true;
    }
    this.showError = true;

  }
  checkEmail(f: NgForm) {
    if (this.listAccount.find(acc => {
      return acc.email === f.value.email;
    })) {
      return true;
    }
    return false;
  }
  checkPassword(f: NgForm) {
    if (this.listAccount.find(acc => {
      return acc.password === f.value.password;
    })) {
      return true;
    }
    return false;
  }
  hideAlert() {
    this.showError = false;
    this.showSuccess = false;
  }

}
