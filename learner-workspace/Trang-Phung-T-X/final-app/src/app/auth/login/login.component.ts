import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LocalerService, KEY } from './../../core/services/localer.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

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
    private router: Router) { }


  listAccount: any;
  password: string;
  email: string;
  showError = false;

  ngOnInit() {
    let firstUser: any; // set default user (first user)
    firstUser = this.localService.getLocalStorage(KEY.listUser)[0];
    this.email = firstUser.email;
    this.password = firstUser.password;

    // get data account localStorage
    this.listAccount = this.localService.getLocalStorage(KEY.listUser);
  }

  onSubmit(f: NgForm) {
    this.hideAlert(); // reset alert
    if (this.listAccount && this.checkAccount(f)) { // check data in localStorage(email & pass)
      const account = this.listAccount.find(acc => acc.email === this.email);
      this.authService.setCurrentUser(account.id); // save cookie
      return this.router.navigate(['/dashboard']);
    }
    this.showError = true;
  }

  checkAccount(f: NgForm) {
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
