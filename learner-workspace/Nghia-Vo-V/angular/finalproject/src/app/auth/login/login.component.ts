import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalerService } from 'src/app/core/services/localer.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  msgErr: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private local: LocalerService,
    private authSerive: AuthService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;

    let data = this.local.getLocalStorage('register');
    let userLogin;
    if (data && data.find((user) => {
      if (user.email === this.loginForm.get('email').value && user.password === this.loginForm.get('password').value) {
        userLogin = user;
        return true;
      }
    })) {
      this.local.saveLocalStorage('userLogin', userLogin);
      this.authSerive.setCookie('isLogin', 'true', 30);
      this.router.navigate(['/dashboard']);
    } else {
      this.msgErr = "Incorrect Email or Password!";
    }
  }
}
