import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project-angular';
  index: number;
  listTab = [
    'Home',
    'Profile',
    'Contact'
  ];

  ngOnInit(): void {
    if (!this.index) {
      this.index = 0;
    }
  }

  moveTab(event) {
    this.index = this.listTab.indexOf(event.target.id);
  }
}

