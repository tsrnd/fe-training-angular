import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { LocalerService } from 'src/app/core/services/localer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private localer: LocalerService,
    private router: Router
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, this.emailExistValidator(this.localer)]],
      password: ['', Validators.required],
      passwordConfirm: ['', Validators.required]
    }, {
      validators: [
        this.passwordMatchValidator
      ]
    });
  }

  /**
   * Handle register form value
   */
  registerSubmit() {
    const registerFormValue = this.registerForm.value;
    this.auth.register(registerFormValue);
    this.registerForm.reset();
    this.localer.setLocalStorage('user', registerFormValue);
    this.localer.setCookie('login', 1, 100);
    this.router.navigateByUrl('/account/dashboard');
  }

  /**
   * Custom password matched validator
   * @param controls : form control instance
   */
  passwordMatchValidator(controls: AbstractControl) {
    const password = controls.get('password').value;
    const passwordConfirmControl = controls.get('passwordConfirm');
    return (passwordConfirmControl.value && passwordConfirmControl.value !== password)
      ? passwordConfirmControl.setErrors({ matchPassword: true }) : null;
  }

  /**
   * Custom validator email
   * @param localer : local storage instance
   */
  emailExistValidator(localer): ValidatorFn {
    return (control: AbstractControl) => {
      const users = this.localer.getLocalStorage('users');
      if (users) {
        const isExistEmail = (users as Array<any>).some(v => {
          return (v.email === control.value) ? true : false;
        });
        return isExistEmail ? { emailExist: true } : null;
      }
    };
  }
}
