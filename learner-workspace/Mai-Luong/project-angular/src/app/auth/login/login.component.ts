import { Component, OnInit } from '@angular/core';
import { LocalerService } from '../../core/service/localer.service';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl, NgForm } from '@angular/forms';

const STORAGE_KEY = 'users';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error: any;
  checkForm: boolean;
  formReactive: FormGroup;
  profileUser: any;
  arrayProfile = [];
  constructor(
    private service: LocalerService
  ) { }

  ngOnInit() {
  }
  onSubmit(login) {
    // console.log(login.controls.email.value);
    this.profileUser = this.service.getLocal(STORAGE_KEY);
    this.arrayProfile = JSON.parse(this.profileUser);
    if (this.arrayProfile.some(user => {
          return user.email === login.controls.email.value && user.password === login.controls.password.value;
        })) {
              this.checkForm = true;
              this.error = null;
              return;
        }
    this.checkForm = false;
    this.error = 'User is not exist';

  }
}
