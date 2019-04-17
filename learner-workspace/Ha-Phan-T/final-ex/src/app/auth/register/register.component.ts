import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LocalerService } from 'src/app/core/services/localer.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

const USERS_KEY = "users";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formReactive: FormGroup;

  constructor(
    private localerService: LocalerService,
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.formReactive = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }
  listUsers = [];
  errmail;
  errpass;
  checkmail = false;
  checkpass = false;
  onSubmit() {
    let listUsersString = this.localerService.getLocalStorage(USERS_KEY);
    this.listUsers = listUsersString ? JSON.parse(listUsersString) : [];
    if (this.formReactive.valid) {
      let isExist = this.listUsers.find((v) => {
        return v.email === this.formReactive.value.email;
      });
      if (isExist) {
        this.checkmail = true;
        this.errmail = "Email exist";
      }
      if (this.formReactive.value.password != this.formReactive.value.confirmPassword) {
        this.checkpass = true;
        this.errpass = "Password not match";
      } else {
        this.listUsers.push(this.formReactive.value)
        this.localerService.saveLocalStorage(USERS_KEY, this.listUsers);
        this.authService.isLoggedIn = true;
        this.router.navigate(['/account/dashboard'])
      }
    }
  }
}
