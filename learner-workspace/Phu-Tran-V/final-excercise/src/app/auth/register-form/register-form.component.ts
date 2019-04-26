import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { LocalerService } from 'src/app/core/service/localer.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';

const REGISTER = 'register';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  formSignUp: FormGroup;
  msgErr: string;
  constructor(
    private fb: FormBuilder,
    private local: LocalerService,
    private formBuild: FormBuilder,
    private router: Router,
    private auth: AuthService
  ) {}

  onSubmit() {
    // this.userData = this.formSignUp.value
    console.log(this.formSignUp.value);
    // this.userData.push((this.formSignUp.value));
    // localStorage.setItem('user', JSON.stringify(this.userData));
    // this.userData = this.userData
    // if (this.formSignUp.value) {
    //   this.userData = this.formSignUp.value; // Setting up user data in userData var
    //   localStorage.setItem('user', JSON.stringify(this.userData));
    //   JSON.parse(localStorage.getItem('user'));
    // } else {
    //   localStorage.setItem('user', null);
    //   JSON.parse(localStorage.getItem('user'));
    // }

    let data = this.local.getLocalStorage(REGISTER);
    let arr = (data) ? data : [];
    if (arr.length !== 0 && arr.find((users) => {
      return users.email === this.formSignUp.get('email').value;
    })) {
      this.msgErr = 'This email already exits.';
      return null;
    } else {
      arr.push(this.formSignUp.value);
      this.local.saveLocalStorage(REGISTER, arr);
      this.router.navigate(['/auth/login']);
      this.local.saveLocalStorage('userLogin', this.formSignUp.value);
      this.auth.setCookie('isLogin', 'true', 30);
    }
  
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

 emailExistValidator(local): ValidatorFn {
  return (control: AbstractControl) => {
    const users = this.local.getLocalStorage('users');
    if (users) {
      const isExistEmail = (users as Array<any>).some(v => {
        return (v.email === control.value) ? true : false;
      });
      return isExistEmail ? { emailExist: true } : null;
    }
  };
}
  ngOnInit() {
    this.formSignUp = this.fb.group({
      first_name: [''],
      last_name:[''],
      email: ['', [Validators.required, Validators.email, this.emailExistValidator(this.local)]],
      password: ['', Validators.required],
      confirmPassword: [''],
    }, {
      validators: [
        this.matchPassword,
      ]
    });
  }

}
