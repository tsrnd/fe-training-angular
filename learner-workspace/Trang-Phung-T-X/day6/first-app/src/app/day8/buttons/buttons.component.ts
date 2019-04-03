import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LocalerService } from './../../services/localer.service';
@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
  enterValue: any;
  enterKey: string;

  constructor(private localerService: LocalerService) { }

  ngOnInit() {
  }

  setLocalStorage() {
    if (this.enterKey && this.enterValue) {
      this.localerService.saveLocalStorage(this.enterKey, this.enterValue);
      this.enterKey = '';
      this.enterValue = '';
    } else {
      alert('Enter key and value!!');
    }
  }
  getLocalStorage() {
    if (this.enterKey) {
      this.enterValue = this.localerService.getLocalStorage(this.enterKey);
    } else {
      let key = '(';
      for (let i = 0; i < localStorage.length; i++) {
        key += ' -- ' + (localStorage.key(i));
      }
      alert('Enter key!' + key + ')');
    }
  }
  setSessionStorage() {
    if (this.enterKey && this.enterValue) {
      this.localerService.saveSessionStorage(this.enterKey, this.enterValue);
      this.enterKey = '';
      this.enterValue = '';
    } else {
      alert('Enter key and value!!');
    }
  }
  getSessionStorage() {
    if (this.enterKey) {
      this.enterValue = this.localerService.getSessionStorage(this.enterKey);
    } else {
      let key = '(';
      for (let i = 0; i < sessionStorage.length; i++) {
        key += ' -- ' + (sessionStorage.key(i));
      }
      alert('Enter key!' + key + ')');
    }
  }

  removeLocalStorage() {
    if (this.enterKey) {
      this.localerService.removeLocalStorage(this.enterKey);
      this.enterKey = '';
    } else {
      alert('Enter key and value!!');
    }
  }

  clearLocalStorage() {
    this.localerService.clearLocalStorage();
  }
}
