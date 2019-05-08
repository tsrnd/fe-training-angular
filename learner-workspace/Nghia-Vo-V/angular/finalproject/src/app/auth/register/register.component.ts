import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/shared/validators/mustmatch';
import { LocalerService } from 'src/app/core/services/localer.service';
import { AuthService } from 'src/app/core/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private local: LocalerService,
    private auth: AuthService
  ) {

  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordconfirm: ['', [Validators.required]]
    }, {
        validator: MustMatch('password', 'passwordconfirm')
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;

    let data = this.local.getLocalStorage('register');
    let arr = (data) ? data : [];

    arr.push(this.registerForm.value);
    this.local.saveLocalStorage('register', arr);
    this.router.navigate(['/dashboard']);
    this.local.saveLocalStorage('userLogin', this.registerForm.value);
    this.auth.setCookie('isLogin', 'true', 30);
  }
}
