import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { LocalerService } from '../app/core/service/localer.service';
import { ApiService, ENDPOINT } from './api.service';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl, NgForm } from '@angular/forms';

const STORAGE_KEY = 'users';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// tslint:disable-next-line:directive-class-suffix
export class AppComponent implements OnInit {
  title = 'project-angular';
  logo = 'HELLO ANGULAR';
  // dataPipe = [
  //   {
  //     id: 1,
  //     title: 'Cards are built with as little',
  //     tslint:disable-next-line:max-line-length
  //     content: 'Cards are built with as little markup and styles as possible, but still manage to deliver a ton of control and customization. Built with flexbox, they offer easy alignment and mix well with other Bootstrap components. They have no margin by default, so use spacing utilities as needed. Below is an example of a basic card with mixed content and a fixed width. Cards have no fixed width to start, so they’ll naturally fill the full width of its parent element. This is easily customized with our various sizing options.'
  //   },
  //   {
  //     id: 1,
  //     title: 'Cards are built with as little',
  //     tslint:disable-next-line:max-line-length
  //     content: 'Cards are built with as little markup and styles as possible, but still manage to deliver a ton of control and customization. Built with flexbox, they offer easy alignment and mix well with other Bootstrap components. They have no margin by default, so use spacing utilities as needed. Below is an example of a basic card with mixed content and a fixed width. Cards have no fixed width to start, so they’ll naturally fill the full width of its parent element. This is easily customized with our various sizing options.'
  //   },
  //   {
  //     id: 1,
  //     title: 'Cards are built with as little',
  //     tslint:disable-next-line:max-line-length
  //     content: 'Cards are built with as little markup and styles as possible, but still manage to deliver a ton of control and customization. Built with flexbox, they offer easy alignment and mix well with other Bootstrap components. They have no margin by default, so use spacing utilities as needed. Below is an example of a basic card with mixed content and a fixed width. Cards have no fixed width to start, so they’ll naturally fill the full width of its parent element. This is easily customized with our various sizing options.'
  //   },
  // ];
  keyLocal: any;
  valueLocal: any;
  getValue: string;
  dataPipes: any;
  error: any;
  checkForm: boolean;

  // constructor(private service: LocalerService, private apiService: ApiService) {
  //   this.apiService.getAssets('../assets/files/new.json').subscribe(obj => this.dataPipes = obj, error => this.error = error);
  // }

  // saveLocal() {
  //   if (this.keyLocal && this.valueLocal) {
  //     this.service.saveLocal(this.keyLocal, this.valueLocal);
  //     console.log(this.keyLocal);
  //     console.log(this.valueLocal);
  //   }
  // }
  // getLocal() {
  //   if (this.keyLocal) {
  //     this.getValue = this.service.getLocal(this.keyLocal);
  //     console.log(this.keyLocal);
  //   }
  // }
  // saveSession() {
  //   if (this.keyLocal && this.valueLocal) {
  //     this.service.saveSession(this.keyLocal, this.valueLocal);
  //     console.log(this.keyLocal);
  //     console.log(this.valueLocal);
  //   }
  // }
  // getSession() {
  //   if (this.keyLocal) {
  //     this.getValue = this.service.getSession(this.keyLocal);
  //     console.log(this.keyLocal);
  //   }
  // }
  // formReactive: FormGroup;
  // profileUser: any;
  // arrayProfile = [];
  constructor(
    private fb: FormBuilder,
    private service: LocalerService
  ) { }
  ngOnInit() {
    // this.formReactive = this.fb.group({
    //   firstName: ['', Validators.required],
    //   lastName: ['', Validators.required],
    //   email: ['', [Validators.required, Validators.email]],
    //   password: ['', Validators.required],
    //   confirmPassword: ['', Validators.required]
    // });
  }
  // onSubmit() {
  //   console.log(this.formReactive.value);
  //   this.profileUser = this.service.getLocal(STORAGE_KEY);
  //   this.arrayProfile = this.profileUser ? JSON.parse(this.profileUser) : [];
  //   if (this.arrayProfile.some(email => {
  //     return email.email === this.formReactive.controls.email.value;
  //   })) {
  //         this.checkForm = false;
  //         this.error = 'email is already exist';
  //         return;
  //   }
  //   if (this.formReactive.controls.password.value !== this.formReactive.controls.confirmPassword.value) {
  //     this.checkForm = false;
  //     this.error = 'password is not same';
  //   } else {
  //   this.arrayProfile.push(this.formReactive.value);
  //   this.service.saveLocal(STORAGE_KEY, JSON.stringify(this.arrayProfile));
  //   this.error = null;
  //   this.checkForm = true;
  //   }
  // }

  // onSubmit(login) {
  //   // console.log(login.controls.email.value);
  //   this.profileUser = this.service.getLocal(STORAGE_KEY);
  //   this.arrayProfile = JSON.parse(this.profileUser);
  //   if (this.arrayProfile.some(user => {
  //         return user.email === login.controls.email.value && user.password === login.controls.password.value;
  //       })) {
  //             this.checkForm = true;
  //             this.error = null;
  //             return;
  //       }
  //   this.checkForm = false;
  //   this.error = 'User is not exist';

  // }
}
