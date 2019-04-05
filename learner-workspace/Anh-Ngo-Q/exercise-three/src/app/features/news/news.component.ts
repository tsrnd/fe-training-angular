import { Component, OnInit } from '@angular/core';
import { LocalerService } from 'src/app/core/services/localer.service';

import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.sass']
})
export class NewsComponent implements OnInit {

  news;

  getNewsAssetsSub: Subscription;

  constructor(
    private localer: LocalerService,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.getNewsAssetsSub = this.api.getAssets('assets/news.json').subscribe((datas) => {
      this.news = datas;
    });
  }
}
