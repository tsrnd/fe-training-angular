import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { LocalerService } from 'src/app/core/service/localer.service';

const REGISTER = 'register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formReactive: FormGroup;
  msgErr: string;
  msgSuccess: string;

  constructor(
    private local: LocalerService,
    private formBuild: FormBuilder
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
      this.msgSuccess = null;
      return null;
    } else {
      arr.push(this.formReactive.value);
      this.local.saveLocalStorage(REGISTER, arr);
      this.msgSuccess = 'Sign up success!';
      this.msgErr = null;
    }
  }

}
