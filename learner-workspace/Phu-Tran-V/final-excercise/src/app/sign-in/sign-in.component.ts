import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  formSignIn: FormGroup;
  constructor(private fb: FormBuilder) {}

  onSubmit() {
    console.log(this.formSignIn.value);
    console.log("asdasdasds")
  }

  ngOnInit() {
    console.log('test');
    this.formSignIn = this.fb.group({
      email: [''],
      password: [''],
    })
  }

}
