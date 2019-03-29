import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  indexTab = 0;
  indexPage = 3;
  limit = 100;
  title = 'Card title';
  description = [
    {
      cardId: 1,
      des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      cardId: 2,
      // tslint:disable-next-line:max-line-length
      des: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'
    },
    {
      cardId: 3,
      des: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    }
  ];

  changePage(page: string): void {
    if (page === 'home') {
      this.indexPage = 0;
    } else if (page === 'lifeCycleHook') {
      this.indexPage = 1;
    } else if (page === 'directive') {
      this.indexPage = 2;
    } else if (page === 'pipe') {
      this.indexPage = 3;
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
