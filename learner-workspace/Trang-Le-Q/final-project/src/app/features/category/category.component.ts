import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalerService } from 'src/app/core/service/localer.service';
import { ApiService } from 'src/app/core/service/api.service';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  tittle = 'Category';
  items: any[];
  category: string;
  catId: number;
  show: boolean;

  constructor(
    private active: ActivatedRoute,
    private local: LocalerService,
    private api: ApiService,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.show = this.auth.checkLogin();
    this.active.data.subscribe(data => this.items = data.data);
    this.catId = this.items[0].categoryId;
    switch (+this.items[0].categoryId) {
      case 1:
        this.category = 'woman';
        break;
      case 2:
        this.category = 'man';
        break;
      case 3:
        this.category = 'kids';
        break;
    }
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
    this.api.get('/category/' + this.catId + '/product/' + id).subscribe(data => {
      arr.push(data);
      this.local.saveLocalStorage('favorite', arr);
      alert('You have liked this product, thanks!');
    });
  }

}
