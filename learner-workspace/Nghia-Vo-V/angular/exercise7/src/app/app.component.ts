import { Component } from '@angular/core';
import {  } from '@angular/common';
import { LocalerService } from './localer.service';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exercise7';
  color: string;

  keyLocal: any;
  // valueLocal: any;
  // getValue: string;
  // registerForm: FormGroup;
  local: any;
  localArray = [];
  // emailError?: boolean;

  constructor(
    private service: LocalerService, 
    // private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    // this.registerForm = this.formBuilder.group({
    //   firstName: ['', Validators.required],
    //   lastName: ['', Validators.required],
    //   email: ['', [Validators.required, Validators.email]],
    //   password: ['', Validators.required],
    //   passwordConfirm: ['', Validators.required]
    // });
  }

  // datas = [
  //   {
  //     "id": 1,
  //     "title": "Title1",
  //     "content": "Looking to quickly add Bootstrap to your project? Use BootstrapCDN, provided for free by the folks at StackPath. Using a package manager or need to download the source files? Head to the downloads page."
  //   },
  //   {
  //     "id": 2,
  //     "title": "Title2",
  //     "content": "Copy-paste the stylesheet <link> into your <head> before all other stylesheets to load our CSS."
  //   },
  //   {
  //     "id": 3,
  //     "title": "Title3",
  //     "content": "Curious which components explicitly require jQuery, our JS, and Popper.js? Click the show components link below. If you’re at all unsure about the general page structure, keep reading for an example page template."
  //   }
  // ];

  

  // saveLocal() {
  //   if (this.keyLocal && this.valueLocal) {
  //     this.service.saveLocalStorage(this.keyLocal, this.valueLocal);
  //     console.log(this.keyLocal);
  //     console.log(this.valueLocal);
  //   }
  // }
  // getLocal() {
  //   if (this.keyLocal) {
  //     this.getValue = this.service.getLocalStorage(this.keyLocal);
  //     console.log(this.keyLocal);
  //   }
  // }
  // saveSession() {
  //   if (this.keyLocal && this.valueLocal) {
  //     this.service.saveSessionStorage(this.keyLocal, this.valueLocal);
  //     console.log(this.keyLocal);
  //     console.log(this.valueLocal);
  //   }
  // }
  // getSession() {
  //   if (this.keyLocal) {
  //     this.getValue = this.service.getSessionStorage(this.keyLocal);
  //     console.log(this.keyLocal);
  //   }
  // }

  //localArray = [];
  //emailError?: boolean;
    
  // onSubmit(): void {
  //   console.log(this.registerForm.value);
    
  //   this.localArray.push(this.registerForm.value);
  //   if (this.localArray.some(local => local.email === this.registerForm.value.email)) {
  //     this.emailError = true;
  //     this.localArray.pop();
  //   } else {
  //     this.service.saveLocalStorage('local', this.localArray);
  //   }
  // }

  // get f() { return this.registerForm.controls; }
  // onSubmit() {
  //   this.submitted = true;

  //   // stop here if form is invalid
  //   if (this.registerForm.invalid) {
  //       return;
  //   }

  //   this.localArray.push(this.registerForm.value);
  //   if (this.localArray.some(users => users.email === this.registerForm.value.email)) {
  //     this.emailError = true;
  //     this.localArray.pop();
  //   } else {
  //     this.service.saveLocalStorage('users', this.localArray);
  //   }

  //   alert('CREATE SUCCESSFULLY!!')
  // }


  // Exercise 10
  message: string;
  onSubmit(login) {
    this.local = this.service.getLocalStorage(this.keyLocal);
    this.localArray = JSON.parse(this.local);
    if (this.localArray.find(user => {
          return user.email === login.controls.email.value && user.password === login.controls.password.value;
        })) {
              this.message = "Login successfully";
              return;
        }
    this.message = "Account doesn't exist. Enter a different account.";
  }
}
