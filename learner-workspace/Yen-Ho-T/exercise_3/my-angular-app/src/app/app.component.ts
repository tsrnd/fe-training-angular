import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myTab = 1;
  title = 'ANGULAR TRAINING';
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
  onChangeTab(tab) {
    this.myTab = tab;
  }
  deleteItemFromModal(position) {
    this.listItem.splice(position, 1);
  }
}
