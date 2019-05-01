import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  url: any;
  dataProducts = [];
  dataCat = [];
  type = [
    {
      id: 1,
      name: "women",
      url: "/women"
    },
    {
      id: 2,
      name: "men",
      url: "/men"
    },
    {
      id: 3,
      name: "kids",
      url: "/kids"
    },
  ]
  constructor(
    private router: Router,
    private apiService: ApiService,
  ) {

  }

  ngOnInit() {
    this.url = this.router.url;
    if (this.url == this.type[0].url) {
      this.apiService.get("categories/" + this.type[0].url).subscribe(datas => this.dataCat = datas);
      this.apiService.get("categories/" + this.type[0].url + "/products").subscribe(datas => this.dataProducts = datas);
    }
    if (this.url == this.type[1].url) {
      this.apiService.get("categories/" + this.type[1].url).subscribe(datas => this.dataCat = datas);
      this.apiService.get("categories/" + this.type[1].url + "/products").subscribe(datas => this.dataProducts = datas);
    }
    if (this.url == this.type[2].url) {
      this.apiService.get("categories/" + this.type[2].url).subscribe(datas => this.dataCat = datas);
      this.apiService.get("categories/" + this.type[2].url + "/products").subscribe(datas => this.dataProducts = datas);
    }
  }
  
}
