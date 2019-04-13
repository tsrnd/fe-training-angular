import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LocalerService } from './../../core/services/localer.service';
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
    private router: Router ) { }

  key = 'userRegister';
  firstUser: any;
  listAccount: any;
  password: string;
  email: string;
  showError = false;
  showSuccess = false;

  ngOnInit() {
    // get data account localStorage
    this.listAccount = this.localService.getLocalStorage(this.key);
  }

  onSubmit(f: NgForm) {
    // reset alert
    this.hideAlert();
    // check data in localStorage
    if (this.listAccount && this.checkAccout(f)) {
      // this.authService.isLoggedIn = true;
      this.router.navigate(['/']);
      return this.showSuccess = true;
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
    this.showSuccess = false;
  }

}
