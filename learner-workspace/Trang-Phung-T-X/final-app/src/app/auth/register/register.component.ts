import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { LocalerService, KEY } from './../../core/services/localer.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { CommonService } from 'src/app/core/services/common.service';

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
    private authService: AuthService,
    private commonService: CommonService) { }

  show = false;
  showSuccess = false;

  ngOnInit() {
    // build form
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
    // reset alert
    this.hideAlert();
    // get data in localStorage
    const valueLocal = this.localService.getLocalStorage(KEY.listUser);
    // check data in localStorage be has value or null
    const value = valueLocal ? valueLocal : [];
    // check email is exist in local
    if (valueLocal && valueLocal.find(ob => {
      return ob.email === this.formReactive.controls.email.value;
    })) {
      return this.show = true;
    }
    // add id for user
    let id = valueLocal ? valueLocal.length : 0;
    // tslint:disable-next-line: object-literal-shorthand
    let newUser = Object.assign(this.formReactive.value, { id: id });
    // push item to arr items in local
    value.push(newUser);
    // save local
    this.localService.saveLocalStorage(KEY.listUser, value);
    this.showSuccess = true;
    // update currentUser
    this.commonService.currentAccount(this.formReactive.controls.email.value);
    this.router.navigate(['/dashboard']);
  }

  validatePasswordConfirm(group: FormGroup) {
    const pass = group.controls.password.value;
    const confirmPass = group.controls.confirmPassword.value;
    // compare pass with confirmpass, show mess 'notSame' if diff
    return pass === confirmPass ? null : { notSame: true };
  }

  hideAlert() {
    this.show = false;
    this.showSuccess = false;
  }
}
