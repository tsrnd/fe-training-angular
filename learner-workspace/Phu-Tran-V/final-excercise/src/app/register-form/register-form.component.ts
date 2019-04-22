import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
// import { PasswordValidation } from './password-validation';
import { ModalComponent } from '../../../../excercise3-4/src/app/modal/modal.component';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  formSignUp: FormGroup;
  constructor(private fb: FormBuilder) {}

  onSubmit() {
    console.log(this.formSignUp.value);
    localStorage.setItem('test', JSON.stringify(this.formSignUp.value))
  }
  //validate password confirm
  matchPassword(formControl: FormControl) {
    let password = formControl.get('password').value; // to get value in input tag
    let confirmPassword = formControl.get('confirmPassword').value; // to get value in input tag
     if(password != confirmPassword) {
         console.log('false');
         formControl.get('confirmPassword').setErrors( {matchPassword: true} )
     } else {
         console.log('true');
         return null
     }
 }
  ngOnInit() {
    this.formSignUp = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: [''],
    }, {
      validators: [
        this.matchPassword,
      ]
    });
  }

}
