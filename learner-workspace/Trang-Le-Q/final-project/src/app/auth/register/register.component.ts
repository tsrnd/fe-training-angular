import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { LocalerService } from 'src/app/core/service/localer.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';

const REGISTER = 'register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  title = 'Logout';
  formReactive: FormGroup;
  msgErr: string;

  constructor(
    private local: LocalerService,
    private formBuild: FormBuilder,
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.formReactive = this.formBuild.group({
      name: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit() {
    // console.log(this.formReactive.value);
    let data = this.local.getLocalStorage(REGISTER);
    let arr = (data) ? data : [];
    if (arr.length !== 0 && arr.find((users) => {
      return users.email === this.formReactive.get('email').value;
    })) {
      this.msgErr = 'This email already exits.';
      return null;
    } else {
      arr.push(this.formReactive.value);
      this.local.saveLocalStorage(REGISTER, arr);
      this.router.navigate(['/dashboard']);
      this.local.saveLocalStorage('userLogin', this.formReactive.value);
      this.auth.setCookie('isLogin', 'true', 30);
    }
  }

}
