import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { LocalerService, KEY } from './../../core/services/localer.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // form reactive
  formReactive: FormGroup;

  constructor(
    private fb: FormBuilder,
    private localService: LocalerService,
    private router: Router,
    private authService: AuthService) { }

  showError = false;
  showSuccess = false;

  ngOnInit() {
    this.formReactive = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ])),
      password: ['', Validators.required],
      confirmPassword: ['']
    }, { validators: this.validatePasswordConfirm }
    );
  }

  onSubmit() {
    this.hideAlert(); // reset alert
    const valueLocal = this.localService.getLocalStorage(KEY.listUser); // get data in localStorage
    const value = valueLocal ? valueLocal : [];

    if (valueLocal && valueLocal.find(ob => { // check email is exist in local
      return ob.email === this.formReactive.controls.email.value;
    })) {
      return this.showError = true;
    }
    const id = valueLocal ? valueLocal.length : 0;
    // tslint:disable-next-line: object-literal-shorthand
    const newUser = Object.assign(this.formReactive.value, { id: id }); // add id
    value.push(newUser); // add new user to list local
    this.localService.saveLocalStorage(KEY.listUser, value); // save local
    this.showSuccess = true;

    this.authService.setCurrentUser(id); // save cookie
    this.router.navigate(['/dashboard']);
  }

  validatePasswordConfirm(group: FormGroup) {
    const pass = group.controls.password.value;
    const confirmPass = group.controls.confirmPassword.value;
    return pass === confirmPass ? null : { notSame: true };
  }

  hideAlert() {
    this.showError = false;
    this.showSuccess = false;
  }
}
