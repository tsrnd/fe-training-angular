import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { LocalerService } from '../feature/service/localer.service';

const REGISTER = 'register';
@Component({
  selector: 'app-ex10',
  templateUrl: './ex10.component.html',
  styleUrls: ['./ex10.component.scss']
})
export class Ex10Component implements OnInit {

  formReactive: FormGroup;
  msgErr: string;

  constructor(
    private fb: FormBuilder,
    private localService: LocalerService
  ) { }

  ngOnInit() {
    this.formReactive = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }
  onSubmit() {
    console.log(this.formReactive.value);
    // this.formReactive.value(data => console.log(data));
  }
  saveLocalStorage() {
    let data = this.localService.getLocalStorage(REGISTER);
    let arr = (data) ? data : [];
    if (arr.length !== 0 && arr.find((users) => {
      return users.email === this.formReactive.get('email').value;
    })) {
      this.msgErr = 'This email already exits.';
      return null;
    }
    arr.push(this.formReactive.value);
    this.localService.saveLocalStorage(REGISTER, arr);
  }

}
