import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService, END_POINT } from './../../core/services/api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit, OnDestroy {
  news$: any;

  private subscribe;
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.subscribe = this.api.get(END_POINT.listNews).subscribe();
    this.news$ = this.api.getAssets(END_POINT.newsJson);
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }

}
