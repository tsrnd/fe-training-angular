import { Component, OnInit } from '@angular/core';
import { LocalerService } from '../../core/service/localer.service';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl, NgForm } from '@angular/forms';

const STORAGE_KEY = 'users';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formReactive: FormGroup;
  profileUser: any;
  arrayProfile = [];
  error: any;
  checkForm: boolean;
  constructor(
    private fb: FormBuilder,
    private service: LocalerService
  ) { }
  ngOnInit() {
    this.formReactive = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }
  onSubmit() {
    console.log(this.formReactive.value);
    this.profileUser = this.service.getLocal(STORAGE_KEY);
    this.arrayProfile = this.profileUser ? JSON.parse(this.profileUser) : [];
    if (this.arrayProfile.some(email => {
      return email.email === this.formReactive.controls.email.value;
    })) {
          this.checkForm = false;
          this.error = 'email is already exist';
          return;
    }
    if (this.formReactive.controls.password.value !== this.formReactive.controls.confirmPassword.value) {
      this.checkForm = false;
      this.error = 'password is not same';
    } else {
    this.arrayProfile.push(this.formReactive.value);
    this.service.saveLocal(STORAGE_KEY, JSON.stringify(this.arrayProfile));
    this.error = null;
    this.checkForm = true;
    }
  }
}
