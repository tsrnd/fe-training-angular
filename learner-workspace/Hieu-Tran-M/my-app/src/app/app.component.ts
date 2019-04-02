import { Component, OnInit, OnChanges } from '@angular/core';
import { LocalerService } from './core/services/localer.service';
import { ApiService } from './core/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  indexTab = 0;
  indexPage = 3;
  limit = 100;
  title = 'Card title';
  events$: any;
  cards: any;

  constructor(public localerService: LocalerService, private api: ApiService) {
  }

  ngOnInit() {
    this.api.getAssets('assets/news.json').subscribe(data => {
      this.cards = data;
      console.log(this.cards); });
    this.events$ = this.api.getAssets('assets/news.json');
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
