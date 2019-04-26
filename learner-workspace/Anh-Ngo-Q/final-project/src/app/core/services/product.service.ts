import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';
import { LocalerService } from './localer.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: CoreModule
})
export class ProductService {

  constructor(
    private storage: LocalerService,
    private auth: AuthService
  ) { }

  /**
   * Toggle status product favorite
   * @param product : product object
   * @param isActive : status favorite
   */
  toggleFavorite(product, isActive: boolean) {
    let user;
    this.auth.getAuthUser().subscribe(v => user = v);
    const tmp = this.storage.getLocalStorage('favorites');
    const favoriteObj = tmp && tmp.user_id === user.id ? this.storage.getLocalStorage('favorites') : { user_id: user.id, favorites: [] };

    if (isActive) {
      favoriteObj.favorites.push(product);
    } else {
      favoriteObj.favorites = favoriteObj.favorites.filter(v => {
        return v.id !== product.id;
      });
    }

    this.storage.setLocalStorage('favorites', favoriteObj);
  }

  /**
   * Get product favorite status
   * @param productID : product id
   */
  getFavoriteStatus(productID: number) {
    const favoriteObj = this.storage.getLocalStorage('favorites');
    return favoriteObj && favoriteObj.favorites.some(v => {
      return v.id === productID;
    });
  }

  /**
   * Get favorite list
   */
  getFavoriteList() {
    const favoriteObj = this.storage.getLocalStorage('favorites');
    return favoriteObj ? favoriteObj.favorites : [];
  }
}
