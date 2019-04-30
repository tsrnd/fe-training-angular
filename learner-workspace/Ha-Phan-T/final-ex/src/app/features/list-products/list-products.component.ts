import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { FavoriteService } from 'src/app/core/services/favorite.service';

const CAT_MEN = 1;
const CAT_WOMEN = 2;
const CAT_CHILD = 3;
const URL_CAT_MEN = "/men";
const URL_CAT_WOMEN = "/women";
const URL_CAT_CHILD = "/children";
@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {
  url: any;
  dataProducts = [];
  dataCat = [];
  constructor(
    private router: Router,
    private apiService: ApiService,
    private authService: AuthService,
    private favoriteService: FavoriteService

  ) { }

  ngOnInit() {
    this.url = this.router.url;
    if (this.url == URL_CAT_MEN) {
      this.apiService.get("categories/" + CAT_MEN).subscribe(datas => this.dataCat = datas);
      this.apiService.get("categories/" + CAT_MEN + "/products?page=1&limit=8").subscribe(datas => this.dataProducts = datas);
    }
    if (this.url == URL_CAT_WOMEN) {
      this.apiService.get("categories/" + CAT_WOMEN).subscribe(datas => this.dataCat = datas);
      this.apiService.get("categories/" + CAT_WOMEN + "/products?page=1&limit=8").subscribe(datas => this.dataProducts = datas);
    }
    if (this.url == URL_CAT_CHILD) {
      this.apiService.get("categories/" + CAT_CHILD).subscribe(datas => this.dataCat = datas);
      this.apiService.get("categories/" + CAT_CHILD + "/products?page=1&limit=8").subscribe(datas => this.dataProducts = datas);
    }
  }


}
