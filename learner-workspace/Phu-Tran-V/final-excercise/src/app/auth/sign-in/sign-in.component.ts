import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LocalerService } from 'src/app/core/service/localer.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';

const REGISTER = 'register';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  formSignIn: FormGroup;
  msgErr: string;
    
  constructor(
    private fb: FormBuilder,
    private local: LocalerService,
    private authSerive: AuthService,
    private router: Router,
  ) {}

  onSubmit() {
    let data = this.local.getLocalStorage(REGISTER);
    let userLogin;
    if (data && data.find((user) => {
      if (user.email === this.formSignIn.get('email').value && user.password === this.formSignIn.get('password').value) {
        userLogin = user;
        return true;
      }
    })) {
      this.local.saveLocalStorage('userLogin', userLogin);
      console.log("userlogin", userLogin)
      this.authSerive.setCookie('isLogin', 'true', 30);
      this.router.navigate(['account/dashboard']);
    } else {
      this.msgErr = "Account doesn't exist. Enter a correct account.";
    }
  }

  ngOnInit() {
    this.formSignIn = this.fb.group({
      email: [''],
      password: [''],
    })
  }

}
