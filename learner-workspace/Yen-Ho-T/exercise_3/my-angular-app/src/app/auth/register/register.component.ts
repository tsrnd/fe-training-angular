import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import {LocalerService} from './../../core/service/localer.service';
import { AuthService } from 'src/app/core/service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

const USER_STORAGE_KEY = 'users';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  formReactive: FormGroup;
  err: any;
  constructor(
    private fb: FormBuilder,
    private ls: LocalerService,
    private as: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.formReactive = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', [Validators.required]]
    });
  }

  onSubmit() {
    let listUserString = this.ls.getLocalStorage(USER_STORAGE_KEY);
    let listUser = listUserString? JSON.parse(listUserString): [];
    if (listUser.lenght != 0 && listUser.find(user => {
      return user.email == this.formReactive.controls.email.value
    })) {
      this.err = 'Email is already exist!';
      return
    }
    this.err = null;
    listUser.push(this.formReactive.value);
    this.ls.saveLocalStorage(USER_STORAGE_KEY, JSON.stringify(listUser));
    this.as.isLoggedIn = true;
    this.router.navigate([this.as.redirectUrl || '/'])
  }
}
