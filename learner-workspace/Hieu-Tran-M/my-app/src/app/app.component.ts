import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  indexTab = 0;
  indexPage = 1;

  changePage(page: string): void {
    if (page === 'home') {
      this.indexPage = 0;
    } else {
      this.indexPage = 1;
    }
  }

  getContent(type: string): void {
    if (type === 'home') {
      this.indexTab = 0;
    } else if (type === 'profile') {
      this.indexTab = 1;
    } else {
      this.indexTab = 2;
    }
  }
}
