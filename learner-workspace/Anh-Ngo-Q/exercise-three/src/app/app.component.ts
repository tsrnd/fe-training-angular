import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'exercise-three';

  index: number;

  listTab = [
    'home',
    'info',
    'contact'
  ];

  ngOnInit(): void {
    if (!this.index) {
      this.index = 0;
    }
  }
}
