import { Component, OnInit } from '@angular/core';
import { LocalerService } from '../../core/service/localer.service';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl, NgForm } from '@angular/forms';
import { CookieService } from '../../core/service/cookie.service';
import { Router } from '@angular/router';
import { AuthService } from '../../core/service/auth.service';

const STORAGE_KEY = 'users';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error: any;
  checkForm: boolean;
  formReactive: FormGroup;
  profileUser: any;
  arrayProfile = [];
  isAuthenticate = false;

  constructor(
    private service: LocalerService,
    private auth: CookieService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }
  onSubmit(login) {
    // console.log(login.controls.email.value);
    this.profileUser = this.service.getLocal(STORAGE_KEY);
    this.arrayProfile = JSON.parse(this.profileUser);
    // tslint:disable-next-line:no-conditional-assignment
    if (this.isAuthenticate = this.arrayProfile.some(user => {
          return user.email === login.controls.email.value && user.password === login.controls.password.value;
        })) {
              if (this.isAuthenticate) {
                this.auth.setCookie('login', 1, 69);
                this.router.navigate(['/account']);
              }
              this.authService.isLoggedIn = true;
              this.error = null;
              return;
        }
    this.checkForm = false;
    this.error = 'User is not exist';
  }
}
