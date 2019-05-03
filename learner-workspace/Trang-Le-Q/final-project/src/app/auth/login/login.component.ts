import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { LocalerService } from 'src/app/core/service/localer.service';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/service/api.service';
import { AuthService } from 'src/app/core/service/auth.service';

const REGISTER = 'register';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  title = 'Login';
  formReactive: FormGroup;
  msgErr: string;

  constructor(
    private local: LocalerService,
    private formBuild: FormBuilder,
    private authSerive: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.formReactive = this.formBuild.group({
      email: ['', Validators.email],
      password: ['', Validators.required],
    });
  }
  onSubmit() {
    let data = this.local.getLocalStorage(REGISTER);
    let userLogin;
    if (data && data.find((user) => {
      if (user.email === this.formReactive.get('email').value && user.password === this.formReactive.get('password').value) {
        userLogin = user;
        return true;
      }
    })) {
      this.local.saveLocalStorage('userLogin', userLogin);
      this.authSerive.setCookie('isLogin', 'true', 30);
      this.router.navigate(['/dashboard']);
    } else {
      this.msgErr = "Account doesn't exist. Enter a correct account.";
    }
  }

}
