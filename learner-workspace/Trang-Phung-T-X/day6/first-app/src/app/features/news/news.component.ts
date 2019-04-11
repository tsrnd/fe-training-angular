import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { LocalerService } from 'src/app/core/services/localer.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  // pass item from app-root to news-component
  // @Input() item;
  KEY = 'newFavorate';
  value: any;
  data: any;

  constructor(private apiService: ApiService,
              private localService: LocalerService) {
  }

  ngOnInit() {
    this.apiService.getAssets('news.json').subscribe(res => {
      this.data = res;
    });
  }

  myfavorites(id) {
    const valueLocal = this.localService.getLocalStorage(this.KEY);
    // check data in localStorage be has value or null
    const value = valueLocal ? valueLocal : [];
    // check email is exist in local
    // tslint:disable-next-line: only-arrow-functions
    if (valueLocal && valueLocal.find(function(element) {
      return element === id;
    })) {
      return value;
    }
    console.log(value);
    // push id to arr id in local
    value.push(id);
    // save local
    this.localService.saveLocalStorage(this.KEY, value);
  }

}
