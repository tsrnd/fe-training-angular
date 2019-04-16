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
  formReactive: FormGroup;
  msgErr: string;

  constructor(
    private local: LocalerService,
    private formBuild: FormBuilder,
    private authSerive: AuthService,
    // private api: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.formReactive = this.formBuild.group({
      email: ['', Validators.email],
      password: ['', Validators.required],
    });
  }
  onSubmit() {
    // console.log(this.formReactive.value);
    let data = this.local.getLocalStorage(REGISTER);
    if (data && data.find((user) => {
      return user.email === this.formReactive.get('email').value && user.password === this.formReactive.get('password').value;
    })) {
      this.local.saveLocalStorage('userLogin', data);
      this.authSerive.setCookie('isLogin', 'true', 30);
      this.router.navigate(['/dashboard']);
    } else {
      this.msgErr = "Account doesn't exist. Enter a correct account.";
    }
  }

}
