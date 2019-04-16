import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LocalerService, KEY } from './../../core/services/localer.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isAuthenticate = false;

  constructor(
    private localService: LocalerService,
    private authService: AuthService,
    private router: Router,
    private commonService: CommonService) { }


  firstUser: any;
  listAccount: any;
  password: string;
  email: string;
  showError = false;

  ngOnInit() {
    // get data account localStorage
    this.listAccount = this.localService.getLocalStorage(KEY.listUser);
  }

  onSubmit(f: NgForm) {
    // reset alert
    this.hideAlert();
    // check data in localStorage
    if (this.listAccount && this.checkAccout(f)) {
      this.authService.isLoggedIn = true;
      this.commonService.currentAccount(this.email);
      return this.router.navigate(['/dashboard']);
    }
    this.showError = true;
  }

  // check value in localStorage
  checkAccout(f: NgForm) {
    if (this.listAccount.find(acc => {
      return acc.email === f.value.email && acc.password === f.value.password;
    })) {
      return true;
    }
    return false;
  }


  hideAlert() {
    this.showError = false;
  }

}
