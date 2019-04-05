import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from './../../core/service/api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  err: any;
  @Input() listNews: any;
  constructor(
    private apiService: ApiService
  ) {
    apiService.getAssets('news.json').then( ob => {
      this.listNews = ob;
    }).catch( (err) => {
      this.err = err;        
    });
  }

  ngOnInit() {
  }

}
