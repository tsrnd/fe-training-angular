import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, Validators, FormBuilder } from '@angular/forms';
import { LocalerService } from 'src/app/core/services/localer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private localer: LocalerService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.required],
      passwordConfirm: ['']
    }, {
        validators: [
          this.validatePasswordMatched,
          this.validateEmailExist(this.localer)
        ]
      });
  }

  /**
   * Custom function validate password confirm
   * @param group : param group
   */
  validatePasswordMatched(group: AbstractControl) {
    if (group.get('password').value !== group.get('passwordConfirm').value) {
      group.get('passwordConfirm').setErrors({ NoPasswordMatch: true });
    }
  }

  /**
   * Custom validator email check exists
   * @param localer : param localer
   */
  validateEmailExist(localer) {
    return (group: AbstractControl) => {
      const emailValue = group.get('email').value;
      const listLocalData = localer.getLocalStorage('users');
      const isExist = listLocalData ? listLocalData.find((v) => {
        return v.email === emailValue;
      }) : null;
      if (isExist) {
        group.get('email').setErrors({ EmailExist: true });
      }
    };
  }

  /**
   * save user into localstorage
   */
  registerUser() {
    if (this.registerForm.valid) {
      const listUser = this.localer.getLocalStorage('users');
      let saveList = listUser;
      if (listUser) {
        listUser.push(this.registerForm.value);
      } else {
        saveList = [this.registerForm.value];
      }
      this.localer.saveLocalStorage('users', saveList);
      this.registerForm.reset();
    } else {
      this.registerForm.controls.firstName.markAsTouched();
      this.registerForm.controls.lastName.markAsTouched();
      this.registerForm.controls.email.markAsTouched();
      this.registerForm.controls.password.markAsTouched();
      this.registerForm.controls.passwordConfirm.markAsTouched();
    }
  }
}
