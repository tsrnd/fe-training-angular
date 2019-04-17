import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from './../../core/services/api.service'
import { AuthService } from 'src/app/core/services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { LocalerService } from 'src/app/core/services/localer.service';

const CAT_MEN = 1;
const CAT_WOMEN = 2;
const CAT_CHILD = 3;
const USERS_COOKIE = 'user_login';
const USERS_FAVORITE = 'user_favorite';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  dataWomen = [];
  dataMen = [];
  dataChild = [];
  dataCatMen = [];
  dataCatWomen = [];
  dataCatChildren = [];
  dataFavorite;
  listFavorite;
  showFavorite = false;
  // prodId;
  @ViewChild('slideshow') slideshow: any;
  constructor(
    private apiSevice: ApiService,
    private authService: AuthService,
    private cookieService: CookieService,
    private localerService: LocalerService
  ) { }

  ngOnInit() {
    this.apiSevice.get("categories/" + CAT_MEN).subscribe(data => this.dataCatMen = data);
    this.apiSevice.get("categories/" + CAT_MEN + "/products?page=1&limit=4").subscribe(datas => this.dataMen = datas);

    this.apiSevice.get("categories/" + CAT_WOMEN).subscribe(data => this.dataCatWomen = data);
    this.apiSevice.get("categories/" + CAT_WOMEN + "/products?page=1&limit=4").subscribe(datas => this.dataWomen = datas);

    this.apiSevice.get("categories/" + CAT_CHILD).subscribe(data => this.dataCatChildren = data);
    this.apiSevice.get("categories/" + CAT_CHILD + "/products?page=1&limit=4").subscribe(datas => this.dataChild = datas);
    // let listFavoriteString = this.localerService.getLocalStorage(USERS_FAVORITE);
    // this.listFavorite = listFavoriteString ? JSON.parse(listFavoriteString) : [];
    // this.listFavorite.forEach(data => {
    //   if (data.email === this.cookieService.get(USERS_COOKIE)) {
    //     if (data.id == this.prodId) {
    //       this.showFavorite = true;
    //     } else {
    //       this.showFavorite = false;
    //     }
    //   }
    // });
  }
  favorite(id) {
    let listFavoriteString = this.localerService.getLocalStorage(USERS_FAVORITE);
    this.listFavorite = listFavoriteString ? JSON.parse(listFavoriteString) : [];
    this.listFavorite.forEach(data => {
      if (data.email === this.cookieService.get(USERS_COOKIE)) {
        if (data.id == id) {
          this.showFavorite = true;
        } else {
          this.showFavorite = false;
        }
      }
    });
    // this.dataFavorite = { email: this.cookieService.get(USERS_COOKIE), id: id };
    // this.listFavorite.push(this.dataFavorite)
    // this.localerService.saveLocalStorage(USERS_FAVORITE, this.listFavorite);
    // this.showFavorite = true;
  }
}
