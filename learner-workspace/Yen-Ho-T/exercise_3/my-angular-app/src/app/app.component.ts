import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myTab = 1;
  title = 'ANGULAR TRAINING';
  onChangeTab(tab) {
    this.myTab = tab;
  }
}
