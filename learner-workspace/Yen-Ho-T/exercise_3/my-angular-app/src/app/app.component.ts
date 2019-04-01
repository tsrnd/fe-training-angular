import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import {LocalerService} from './core/service/localer.service';
import {ApiService, ENDPOINT} from './core/service/api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myTab = 1;
  title = 'ANGULAR TRAINING';
  myValue: string;
  @ViewChild('key') myKey: ElementRef;
  listNews = [];
  err: any;
  listItem = [
    {
      name: 'ngOnChange()',
      content: ` &nbsp &nbsp Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui. ngOnChange()`,
    },
    {
      name: 'ngOnInit()',
      content: ` &nbsp &nbsp Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui. ngOnInit()`,
    },
    {
      name: 'ngDoCheck()',
      content: ` &nbsp &nbsp Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui. ngOnInit()`,
    },
    {
      name: 'ngAfterContentInit()',
      content: ` &nbsp &nbsp Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui. ngAfterContentInit()`,
    },
    {
      name: 'ngAfterContentChecked()',
      content: ` &nbsp &nbsp Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui. ngAfterContentChecked()`,
    },
    {
      name: 'ngAfterViewInit()',
      content: ` &nbsp &nbsp Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui. ngAfterViewInit()`,
    },
    {
      name: 'ngAfterViewChecked()',
      content: ` &nbsp &nbsp Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui. ngAfterViewChecked()`,
    },
    {
      name: 'ngDestroyed()',
      content: ` &nbsp &nbsp Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui. ngDestroyed()`,
    }
  ];
  defaultValue = [
    {
      name: 'default'
    }
  ];
  constructor(
    private localerService: LocalerService,
    private apiService: ApiService
  ) {
    apiService.getAssets('news.json').then( ob => {
        this.listNews = ob;
    }).catch( (err) => {
      this.err = err;        
    });
  }
  onChangeTab(tab) {
    this.myTab = tab;
  }
  deleteItemFromModal(position) {
    this.listItem.splice(position, 1);
  }
  saveLocal() {
    if (this.myKey.nativeElement.value) {
      const value = this.myValue ? this.myValue : this.defaultValue;
      this.localerService.saveLocalStorage(this.myKey.nativeElement.value, value);
    }
  }
  getLocal() {
    if (this.myKey.nativeElement.value) {
      this.myValue = this.localerService.getLocalStorage(this.myKey.nativeElement.value);
    }
  }
  saveSession() {
    if (this.myKey.nativeElement.value) {
      const value = this.myValue ? this.myValue : this.defaultValue;
      this.localerService.saveSessionStorage(this.myKey.nativeElement.value, value);
    }
  }
  getSession() {
    if (this.myKey.nativeElement.value) {
      this.myValue = this.localerService.getSessionStorage(this.myKey.nativeElement.value);
    }
  }
}
