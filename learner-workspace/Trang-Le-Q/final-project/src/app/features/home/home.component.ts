import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/service/api.service';
import { LocalerService } from 'src/app/core/service/localer.service';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tittle = 'Star World';
  woman: any[];
  man: any[];
  kids: any[];
  show: boolean;
  womanCat: string;
  manCat: string;
  kidsCat: string;

  constructor(
    private api: ApiService,
    private local: LocalerService,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.show = this.auth.checkLogin();
    this.api.get('/category/1/product?p=1&l=6').subscribe(data => {
      this.woman = data;
    });
    this.api.get('/category/2/product?p=1&l=6').subscribe(data => {
      this.man = data;
    });
    this.api.get('/category/3/product?p=1&l=6').subscribe(data => {
      this.kids = data;
    });

  }
  addFavorite(id, catID) {
    let favorite = this.local.getLocalStorage('favorite');
    let arr = (favorite) ? favorite : [];
    if (arr.length !== 0 && arr.find((product) => {
      return product.id === id;
    })) {
      alert('This product has been favorite yet!');
      return null;
    }
    this.api.get('/category/' + catID + '/product/' + id).subscribe(data => {
      arr.push(data);
      this.local.saveLocalStorage('favorite', arr);
      alert('You have liked this product, thanks!');
    });
  }
}
