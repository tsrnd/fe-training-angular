import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-sign-in',
  template: `
    <form (ngSubmit)="onSubmit(formSignIn);" #formSignIn="ngForm">
      <input placeholder = "Email" ngModel #txtEmail="ngModel" name="email" email required>
      <p *ngIf="txtEmail.touched && txtEmail.errors?.required">email required</p>
      <p *ngIf="txtEmail.touched && txtEmail.errors?.email">email not vlid</p>
      <br><br>
      <input type="password" placeholder ="Password" ngModel #txtPassword="ngModel" name="password" minlength="6" pattern="[a-z]*">
      <br><br>
      <div ngModelGroup="ahihi">
      <label><input type="checkbox" [ngModel]="false" name="phu"> phu</label>
      <label><input type="checkbox" [ngModel]="false" name="phu1"> phu</label>
      <label><input type="checkbox" [ngModel]="false" name="phu2"> phu</label>
      <label><input type="checkbox" [ngModel]="false" name="phu3"> phu</label>
      </div>
      <br><br>
      <button>Submit</button>
    </form>
    <p>{{ txtEmail.errors | json }}</p>
    <p>{{ formSignIn.value | json }}</p>
    <p>{{ txtPassword.errors | json }}</p>
  `,
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  // email = '';
  // password = '';
  onSubmit(formSignIn) {
    console.log(formSignIn.value);
    console.log(formSignIn);
    // throw new Error('invalid');
    // return formSignIn
  }
  constructor() { }
  ngOnInit() {
  }

}
