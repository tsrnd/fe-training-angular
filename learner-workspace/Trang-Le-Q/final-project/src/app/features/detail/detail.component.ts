import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/service/api.service';
import { AuthService } from 'src/app/core/service/auth.service';
import { LocalerService } from 'src/app/core/service/localer.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  tittle = 'Details';
  categoryID: number;
  productID: number;
  item: object;
  also: any[];
  category: string;
  show: boolean;

  constructor(
    private activeRouter: ActivatedRoute,
    private api: ApiService,
    private auth: AuthService,
    private local: LocalerService
  ) { }

  ngOnInit() {
    let paramRoute: any[];
    this.show = this.auth.checkLogin();
    this.activeRouter.paramMap.subscribe(data => paramRoute = data.params);
    this.productID = +paramRoute.id;
    this.category = paramRoute.category;
    switch (paramRoute.category) {
      case 'woman':
        this.categoryID = 1;
        break;
      case 'man':
        this.categoryID = 2;
        break;
      case 'kids':
        this.categoryID = 3;
        break;
    }
    this.api.get('/category/' + this.categoryID + '/product/' + this.productID).subscribe(data => this.item = data);
    this.api.get('/category/' + this.categoryID + '/product?p=1&l=6').subscribe(data => this.also = data);

  }
  addFavorite(id) {
    let favorite = this.local.getLocalStorage('favorite');
    let arr = (favorite) ? favorite : [];
    if (arr.length !== 0 && arr.find((product) => {
      return product.id === id;
    })) {
      alert('This product has been favorite yet!');
      return null;
    }
    this.api.get('/category/' + this.categoryID + '/product/' + id).subscribe(data => {
      arr.push(data);
      this.local.saveLocalStorage('favorite', arr);
      alert('You have liked this product, thanks!');
    });
  }
}
