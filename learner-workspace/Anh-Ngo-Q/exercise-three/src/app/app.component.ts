import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  index = 0;

  listTab = [
    'home',
    'info',
    'contact'
  ];
}
