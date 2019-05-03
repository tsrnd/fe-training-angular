import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { FavoriteService } from 'src/app/core/services/favorite.service';

const CAT_MEN = 1;
const CAT_WOMEN = 2;
const CAT_CHILD = 3;
const NAME_CAT_MEN = "men";
const NAME_CAT_WOMEN = "women";
const NAME_CAT_CHILD = "children";
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  catName;
  productId;
  catId;
  dataProduct = [];
  dataSimilar = [];
  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    public authService: AuthService,
    private favoriteService: FavoriteService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => { this.catName = params.get("cat") });
    this.route.paramMap.subscribe(params => { this.productId = params.get("id") });
    if (this.catName == NAME_CAT_MEN) {
      this.catId = CAT_MEN;
      this.apiService.get("categories/" + CAT_MEN + "/products/" + this.productId).subscribe(data => this.dataProduct = data);
      this.apiService.get("categories/" + CAT_MEN + "/products?page=1&limit=4").subscribe(datas => this.dataSimilar = datas);
    }
    if (this.catName == NAME_CAT_WOMEN) {
      this.catId = CAT_WOMEN;
      this.apiService.get("categories/" + CAT_WOMEN + "/products/" + this.productId).subscribe(data => this.dataProduct = data);
      this.apiService.get("categories/" + CAT_WOMEN + "/products?page=1&limit=4").subscribe(datas => this.dataSimilar = datas);
    }
    if (this.catName == NAME_CAT_CHILD) {
      this.catId = CAT_CHILD;
      this.apiService.get("categories/" + CAT_CHILD + "/products/" + this.productId).subscribe(data => this.dataProduct = data);
      this.apiService.get("categories/" + CAT_CHILD + "/products?page=1&limit=4").subscribe(datas => this.dataSimilar = datas);

    }
  }

}
