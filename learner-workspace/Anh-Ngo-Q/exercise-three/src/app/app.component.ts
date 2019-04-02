import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ModalComponent } from './modal/modal.component';
import { LocalerService } from './localer.service';
import { ApiService } from './api.service';
import { Observable, Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  getNewsAssetsSub: Subscription;
  getDataAssetsSub: Subscription;

  constructor(
    private localer: LocalerService,
    private api: ApiService,
    private fb: FormBuilder
  ) { }

  @ViewChild(ModalComponent) comfirmModal: ModalComponent;

  deleteItemID;

  index = 0;

  listTab = [
    'home',
    'info',
    'contact'
  ];

  listColor = [
    'white',
    'blue',
    'green',
    'red'
  ];

  color = this.listColor[0];

  datas;

  listObject = [
    {
      name: 'test1'
    },
    {
      name: 'test2'
    },
    {
      name: 'test3'
    },
  ];

  selectedValue;
  getStorageValue;

  forObject = false;

  news;

  // inital form
  registerForm: FormGroup;

  removeItem(confirmDelete) {
    if (confirmDelete) {
      this.datas = this.datas.filter(data => {
        return data.id !== this.deleteItemID;
      });
      this.deleteItemID = undefined;
    }
  }

  passDeleteItemToModal(itemID) {
    this.deleteItemID = itemID;
    this.comfirmModal.item = this.datas[this.deleteItemID];
  }

  saveInput(isLocal) {
    isLocal ? this.localer.saveLocalStorage(this.selectedValue) : this.localer.saveSessionStorage(this.selectedValue);
    if (!this.forObject) {
      this.selectedValue = null;
    }
  }

  detectChange() {
    this.selectedValue = this.forObject ? this.listObject[0] : null;
  }

  ngOnInit(): void {
    // get news
    this.getNewsAssetsSub = this.api.getAssets('assets/news.json').subscribe((datas) => {
      this.news = datas;
    });

    // get data
    // this.getDataAssetsSub = this.api.getAssets('assets/lifecycles.json').subscribe((datas) => {
    //   this.datas = datas;
    // });

    // intial register form group
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.required],
      passwordConfirm: ['']
    }, {
        validators: [
          this.validatePasswordMatched,
          this.validateEmailExist(this.localer)
        ]
      });
  }

  ngOnDestroy(): void {
    this.getNewsAssetsSub.unsubscribe();
    // this.getDataAssetsSub.unsubscribe();
  }

  /**
   * Custom function validate password confirm
   * @param group : param group
   */
  validatePasswordMatched(group: AbstractControl) {
    if (group.get('password').value !== group.get('passwordConfirm').value) {
      group.get('passwordConfirm').setErrors({ NoPasswordMatch: true });
    }
  }

  validateEmailExist(localer) {
    return (group: AbstractControl) => {
      const emailValue = group.get('email').value;
      const listLocalData = localer.getLocalStorage();
      const isExist = listLocalData.find((v) => {
        return v.email === emailValue;
      });
      if (isExist) {
        group.get('email').setErrors({ EmailExist: true });
      }
    };
  }

  registerUser() {
    if (this.registerForm.valid) {
      this.localer.saveLocalStorage(this.registerForm.value);
      this.registerForm.reset();
    } else {
      this.registerForm.controls.firstName.markAsTouched();
      this.registerForm.controls.lastName.markAsTouched();
      this.registerForm.controls.email.markAsTouched();
      this.registerForm.controls.password.markAsTouched();
      this.registerForm.controls.passwordConfirm.markAsTouched();
    }
  }
}
