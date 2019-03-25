import { Component } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
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
  tab(event) {
    console.log(event);
  }
}
