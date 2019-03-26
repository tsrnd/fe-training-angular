import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'phutranv';
  content = 'work';
  isShow = true;
  parentindex = 0;
  listTab = [
    'home',
    'profile',
    'contact'
  ];
}
