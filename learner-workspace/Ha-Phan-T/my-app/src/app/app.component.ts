import { Component, Input, ElementRef, ViewChild, OnDestroy, OnInit } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { LocalerService } from './share/services/localer.service';
import { ApiService } from './share/services/api.service';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { first } from 'rxjs/operators';

const USERS_KEY = 'users';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {
  // title = 'my-app';
  // index: number;
  // listTab = [
  //   'home',
  //   'info',
  //   'contact'
  // ];

  @Input() titleMethod: string;
  @Input() idMethod: any;
  @ViewChild('key') myKey: ElementRef;
  @ViewChild('data') myData: ElementRef;
  getNewsAssetsSub: Subscription;
  listMethods;
  formReactive: FormGroup;
  constructor(
    private localerService: LocalerService,
    private apiService: ApiService,
    private fb: FormBuilder
  ) { }
  ngOnInit(): void {
    this.getNewsAssetsSub = this.apiService.getAssets('assets/datas/listmethods.json').subscribe((datas) => {
      this.listMethods = datas;
    });
    this.formReactive = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  ngOnDestroy(): void {
    this.getNewsAssetsSub.unsubscribe();
  }
  // deleteItemFromModal(position) {
  //   listMethod.splice(position - 1, 1);
  // }

  listUsers = [];
  errmail;
  errpass;
  checkmail = false;
  checkpass = false;
  onSubmit() {
    let listUsersString = this.localerService.getLocalStorage(USERS_KEY);
    this.listUsers = listUsersString ? JSON.parse(listUsersString) : [];
    console.log(this.formReactive.get('firstName').value)
    if (this.formReactive.valid) {
      let isExist = this.listUsers.find((v) => {
        return v.email === this.formReactive.value.email;
      });
      if (isExist) {
        this.checkmail = true;
        this.errmail = "Email exist";
      }
      if (this.formReactive.value.password != this.formReactive.value.confirmPassword) {
        this.checkpass = true;
        this.errpass = "Password not match";
      } else {
        this.listUsers.push(this.formReactive.value)
        this.localerService.saveLocalStorage(USERS_KEY, this.listUsers);
      }
    }
  }
  saveLocal() {
    if (this.myKey.nativeElement.value && this.myData.nativeElement.value) {
      this.localerService.saveLocalStorage(this.myKey.nativeElement.value, this.myData.nativeElement.value);
    }
  }
  getLocal() {
    if (this.myKey.nativeElement.value) {
      this.myData.nativeElement.value = this.localerService.getLocalStorage(this.myKey.nativeElement.value);
    }
  }
  saveSession() {
    if (this.myKey.nativeElement.value && this.myData.nativeElement.value) {
      this.localerService.saveSessionStorage(this.myKey.nativeElement.value, this.myData.nativeElement.value);
    }
  }
  getSession() {
    if (this.myKey.nativeElement.value) {
      this.myData.nativeElement.value = this.localerService.getSessionStorage(this.myKey.nativeElement.value);
    }
  }
}
