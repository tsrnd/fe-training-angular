import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  indexPage = 0;

  constructor() { }

  ngOnInit() {
  }

  changePage(page: string): void {
    if (page === 'home') {
      this.indexPage = 0;
    } else if (page === 'lifeCycleHook') {
      this.indexPage = 1;
    } else if (page === 'directive') {
      this.indexPage = 2;
    } else if (page === 'pipe') {
      this.indexPage = 3;
    } else if (page === 'service') {
      this.indexPage = 4;
    } else if (page === 'register') {
      this.indexPage = 5;
    } else if (page === 'login') {
      this.indexPage = 6;
    }
  }
}
