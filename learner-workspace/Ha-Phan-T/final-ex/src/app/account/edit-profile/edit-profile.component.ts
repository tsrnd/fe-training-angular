import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LocalerService } from 'src/app/core/services/localer.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

const USERS_KEY = 'users';
const USERS_COOKIE = 'user_login';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  formEditProfile: FormGroup;
  listUsers = [];
  errpass;
  checkpass = false;
  listUsersString;
  emailCookie;
  dataUserLogin;
  err;
  constructor(
    private localerService: LocalerService,
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private cookieService: CookieService
  ) { }

  ngOnInit() {
    this.formEditProfile = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: [{ value: '', disabled: true }, [Validators.email, Validators.required]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
    this.emailCookie = this.cookieService.get(USERS_COOKIE);
    this.listUsersString = this.localerService.getLocalStorage(USERS_KEY);
    this.listUsers = this.listUsersString ? JSON.parse(this.listUsersString) : [];
    this.listUsers.forEach(data => {
      if (data.email == this.emailCookie) {
        this.dataUserLogin = data
      }
    });
  }

  edit() {
    this.listUsersString = this.localerService.getLocalStorage(USERS_KEY);
    this.listUsers = this.listUsersString ? JSON.parse(this.listUsersString) : [];
    console.log(this.formEditProfile.dirty);
    if (this.formEditProfile.dirty) {
      if (this.formEditProfile.value.password != this.formEditProfile.value.confirmPassword) {
        this.checkpass = true;
        this.errpass = "Password not match";
      } else {
        this.listUsers.forEach(data => {
          if (data.email == this.emailCookie) {
            if (this.formEditProfile.get('firstName').value) {
              data.firstName = this.formEditProfile.get('firstName').value;
            }
            if (this.formEditProfile.get('lastName').value) {
              data.lastName = this.formEditProfile.get('lastName').value;
            }
            if (this.formEditProfile.get('password').value) {
              data.password = this.formEditProfile.get('password').value;
            }
            if (this.formEditProfile.get('confirmPassword').value) {
              data.confirmPassword = this.formEditProfile.get('confirmPassword').value;
            }
          }
        });
        // this.listUsers.push(this.formEditProfile.value)
        this.localerService.saveLocalStorage(USERS_KEY, this.listUsers);
        this.authService.isLoggedIn = true;
        this.router.navigate(['/account/profile'])
      }
    } else {
      this.err = "Fill all info";
    }
  }
}
