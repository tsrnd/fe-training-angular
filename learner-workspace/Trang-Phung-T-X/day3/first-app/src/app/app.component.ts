import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ANGULAR TRAINING';
  currentTab = 0;
  onChangeTab(index: number) {
    this.currentTab = index;
  }
}
