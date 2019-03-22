import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'exercise-three';

  index: number;

  listTab = [
    'home',
    'info',
    'contact'
  ]

  ngOnInit(): void {
    if (!this.index) {
      this.index = 0;
    }
  }

  chooseTab(e) {
    this.index = this.listTab.indexOf(e.target.id);
    console.log(this.index);
  }
}
