import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
// import { LocalerService } from './localer.service';
import { Observable, Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators, AbstractControl, NgForm, EmailValidator } from '@angular/forms';
import { LocalerService } from './core/services/localer.service';
import { ApiService } from './core/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor() { }

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


  // saveInput(isLocal) {
  //   isLocal ? this.localer.saveLocalStorage('current-value', this.selectedValue) : this.localer.saveSessionStorage('current-value', this.selectedValue);
  //   if (!this.forObject) {
  //     this.selectedValue = null;
  //   }
  // }

  detectChange() {
    this.selectedValue = this.forObject ? this.listObject[0] : null;
  }

  ngOnInit(): void { }

  ngOnDestroy(): void { }
}
