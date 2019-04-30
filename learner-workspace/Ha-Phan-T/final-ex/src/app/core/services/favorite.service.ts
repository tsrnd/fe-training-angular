import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LocalerService } from './localer.service';

const USERS_COOKIE = 'user_login';
const USERS_FAVORITE = 'user_favorite';
@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  dataFavorite;
  listFavorite;
  checkId;
  constructor(
    private cookieService: CookieService,
    private localerService: LocalerService
  ) { }

  favorite(dataProduct) {
    console.log(dataProduct);
    let listFavoriteString = this.localerService.getLocalStorage(USERS_FAVORITE);
    this.listFavorite = listFavoriteString ? JSON.parse(listFavoriteString) : [];
    if (this.listFavorite.length == 0) {
      this.dataFavorite = { email: this.cookieService.get(USERS_COOKIE), id_product: dataProduct.id, id_cat: dataProduct.categoryId, name_product: dataProduct.name, image_product: dataProduct.image, price_product: dataProduct.price };
      this.listFavorite.push(this.dataFavorite)
      this.localerService.saveLocalStorage(USERS_FAVORITE, this.listFavorite);
    } else {
      this.checkId = this.listFavorite.some(data => data.id_product == dataProduct.id && data.email == this.cookieService.get(USERS_COOKIE));
      if (!this.checkId) {
        this.dataFavorite = { email: this.cookieService.get(USERS_COOKIE), id_product: dataProduct.id, id_cat: dataProduct.categoryId, name_product: dataProduct.name, image_product: dataProduct.image, price_product: dataProduct.price };
        this.listFavorite.push(this.dataFavorite)
        this.localerService.saveLocalStorage(USERS_FAVORITE, this.listFavorite);
      } else {
        window.alert("You liked this product!");
      }
    }

  }
}
