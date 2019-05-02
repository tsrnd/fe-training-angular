import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, NgForm, FormArray } from '@angular/forms';
import { LocalerService } from '../../core/service/localer.service';
import { AuthService } from '../../core/service/auth.service';
import { CookieService } from '../../core/service/cookie.service';

const STORAGE_KEY = 'users';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  formEditProfile: FormGroup;
  profileUser: any;
  arrayProfile = [];
  emailCookie: any;
  dataProfile = [];
  constructor(
    private fb: FormBuilder,
    private service: LocalerService,
    private authService: AuthService,
    private cookie: CookieService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.authService.isLoggedIn === true) {
      this.profileUser = this.service.getLocal(STORAGE_KEY);
      this.arrayProfile = JSON.parse(this.profileUser);
      this.emailCookie = this.cookie.getCookie('login');
      this.arrayProfile .forEach(user => {
        if (user.email === this.emailCookie) {
          this.dataProfile.push(user);
        }
      });
    }

    this.formEditProfile = this.fb.group({
      firstName: [this.dataProfile[0].firstName, Validators.required],
      lastName: [this.dataProfile[0].lastName, Validators.required],
      email: [this.cookie.getCookie('login')],
      password: [this.dataProfile[0].password, Validators.required],
      confirmPassword: [this.dataProfile[0].confirmPassword, Validators.required]
    });

  }
  onSubmitEdit() {
    this.profileUser = this.service.getLocal(STORAGE_KEY);
    this.arrayProfile = this.profileUser ? JSON.parse(this.profileUser) : [];
    this.arrayProfile.filter(user => {
      if (user.email === this.emailCookie) {
        this.arrayProfile.splice(this.arrayProfile.indexOf(user), 1);
      }
    });
    console.log(this.arrayProfile);
    this.arrayProfile.push(this.formEditProfile.value);
    console.log(this.arrayProfile);
    this.service.saveLocal(STORAGE_KEY, JSON.stringify(this.arrayProfile));
    this.router.navigate(['/account/profile']);
  }

}
