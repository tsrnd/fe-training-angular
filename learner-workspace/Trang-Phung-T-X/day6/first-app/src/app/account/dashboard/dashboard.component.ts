import { Component, OnInit } from '@angular/core';
import { LocalerService } from 'src/app/core/services/localer.service';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data: any;
  KEY = 'newFavorate';
  listId: any;
  constructor(private localService: LocalerService,
              private apiService: ApiService) { }

  ngOnInit() {
    this.listId = this.localService.getLocalStorage(this.KEY);

    this.apiService.getAssets('news.json').subscribe(res => {
      this.data = res.filter(item => this.listId.includes(item.id));
      console.log(this.data);
    });
  }

}
