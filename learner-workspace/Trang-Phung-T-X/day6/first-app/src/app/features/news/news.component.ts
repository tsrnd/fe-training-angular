import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  // pass item from app-root to news-component
  // @Input() item;

  data: any;
  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.getAssets('news.json').subscribe(res => {
      this.data = res;
    });
  }

}
