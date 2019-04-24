import { Injectable } from '@angular/core';
import { LocalerService, KEY } from './localer.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  favoriteOtherUser: any;
  favoriteCurrentUser: any;
  currentUser: any;
  favoriteList: any;

  constructor(
    private localService: LocalerService,
    private authService: AuthService
  ) { }

  addFavorite(id) {
    let value: any;

    this.getCurrentUserFavorite();
    // favoriteLocal===[]
    if (this.favoriteList.length === 0) {
      value = Object.assign({ userId: this.currentUser.id }, { listIdProduct: [id] });
      confirm('Add favorite Success!');
      return this.saveLocalNewFavorite(this.favoriteList, value);
    } else {  // favoriteLocal===[{favorite1},{favoriteCurrent===null}]
      if (this.favoriteCurrentUser.length === 0) {
        value = Object.assign({ userId: this.currentUser.id }, { listIdProduct: [id] });
        confirm('Add favorite Success!');
        return this.saveLocalNewFavorite(this.favoriteOtherUser, value);
      } else { // favoriteLocal===[{favoriteOtherUser},{favoriteCurrent}]
        if (this.favoriteCurrentUser.listIdProduct.find(ele => ele === id)) {
          // this product is exits
          return this.favoriteCurrentUser;
        }
        this.favoriteCurrentUser.listIdProduct.push(id);
        confirm('Add favorite Success!');
        return this.saveLocalNewFavorite(this.favoriteOtherUser, this.favoriteCurrentUser);
      }
    }
  }

  removeFavorite(data, id) {
    let favoriteCurrentUserNew: any;
    // tslint:disable-next-line: prefer-const
    let value = [];
    if (id) {
      // data = except delItem
      data = data.filter(item => {
        return item.id !== id;
      });
    }

    data.map(item => value.push(item.id));
    this.getCurrentUserFavorite();

    favoriteCurrentUserNew = Object.assign({ userId: this.currentUser.id }, { listIdProduct: value });
    this.localService.removeLocalStorage(KEY.favorite);
    this.saveLocalNewFavorite(this.favoriteOtherUser, favoriteCurrentUserNew);

    return data;
  }

  showButtonFavorite(id) {
    this.getCurrentUserFavorite();
    if (this.favoriteCurrentUser.listIdProduct) {
      if (this.favoriteCurrentUser.listIdProduct.length !== 0) {
        return this.favoriteCurrentUser.listIdProduct.find(item => item === id);
      }
    }
    return false;
  }

  getCurrentUserFavorite(): void {
    this.currentUser = this.checkCurrentUser();

    this.favoriteList = this.localService.getLocalStorage(KEY.favorite); // get all favorites of all users
    this.favoriteList = this.favoriteList ? this.favoriteList : [];

    if (this.favoriteList.length !== 0) {
      this.favoriteOtherUser = this.favoriteList.filter(item => item.userId !== this.currentUser.id);
      this.favoriteCurrentUser = this.favoriteList.find(ob => ob.userId === this.currentUser.id);
      this.favoriteCurrentUser = this.favoriteCurrentUser ? this.favoriteCurrentUser : [];
    }
  }

  saveLocalNewFavorite(valueSaveLocal, favoriteCurrentUser) {
    valueSaveLocal.push(favoriteCurrentUser);
    return this.localService.saveLocalStorage(KEY.favorite, valueSaveLocal);
  }

  checkCurrentUser() {
    const id = +this.authService.getCurrentUser();
    // tslint:disable-next-line: prefer-const
    let listUsers = this.localService.getLocalStorage(KEY.listUser) || [];

    this.currentUser = listUsers.find(acc => {
      return acc.id === id;
    });
    return this.currentUser;
  }
}
