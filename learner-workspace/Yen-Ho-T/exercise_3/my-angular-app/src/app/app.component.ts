import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import {LocalerService} from './core/service/localer.service';
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
  listNews = [
    {
      title: 'Excepteur',
      content: `&nbsp &nbsp Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui Duis aute irure dolor in reprehenderit in voluptate
         velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui`,
      imageLink: 'assets/images/images.jpeg'
    },
    {
      title: 'Duis aute irure dolor',
      content: `&nbsp &nbsp Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui`,
      imageLink: 'assets/images/images.jpeg'
    },
    {
      title: 'Excepteur sint occaecat cupidatat non ',
      content: `&nbsp &nbsp Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui`,
      imageLink: 'assets/images/images.jpeg'
    }
  ];
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
  constructor(private localerService: LocalerService) {

  }
  onChangeTab(tab) {
    this.myTab = tab;
  }
  deleteItemFromModal(position) {
    this.listItem.splice(position, 1);
  }
  saveLocal() {
    if (this.myKey.nativeElement.value && this.myValue) {
      this.localerService.saveLocalStorage(this.myKey.nativeElement.value, this.myValue);
    }
  }
  getLocal() {
    if (this.myKey.nativeElement.value) {
      this.myValue = this.localerService.getLocalStorage(this.myKey.nativeElement.value);
    }
  }
  saveSession() {
    if (this.myKey.nativeElement.value && this.myValue) {
      this.localerService.saveSessionStorage(this.myKey.nativeElement.value, this.myValue);
    }
  }
  getSession() {
    if (this.myKey.nativeElement.value) {
      this.myValue = this.localerService.getSessionStorage(this.myKey.nativeElement.value);
    }
  }
}
