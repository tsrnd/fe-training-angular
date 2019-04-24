import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-news',
  templateUrl: './detail-news.component.html',
  styleUrls: ['./detail-news.component.css']
})
export class DetailNewsComponent implements OnInit {
  id: any;
  news: any;
  data: any;

  constructor(private apiService: ApiService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.apiService.getAssets('news.json').subscribe(res => {
      this.data = res;
      this.route.paramMap.subscribe(params => {
        this.data.forEach((item) => {
          if (item.id === params.id) {
            this.news = item;
          }
        });
      });
      console.log(this.data);
    });
  }
}
