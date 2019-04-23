import { Injectable } from '@angular/core';
import { LocalerService, KEY } from './localer.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private localService: LocalerService,
    private authService: AuthService
  ) { }

  currentUser: any;

  addFavorite(id) {
    let value: any;
    let favoriteOtherUser: any;
    let favoriteCurrentUser: any;
    let favoriteList: any;
    let favoriteLocal: any;

    this.currentUser = this.checkCurrentUser();

    favoriteLocal = this.localService.getLocalStorage(KEY.favorite); // get all favorites of all users
    favoriteList = favoriteLocal ? favoriteLocal : [];

    // favoriteLocal===[]
    if (favoriteList.length === 0) {
      value = Object.assign({ userId: this.currentUser.id }, { listIdProduct: [id] });
      return this.saveLocalNewFavorite(favoriteList, value);
    }

    favoriteOtherUser = favoriteList.filter(item => item.userId !== this.currentUser.id);
    favoriteCurrentUser = favoriteList.find(ob => ob.userId === this.currentUser.id);
    favoriteCurrentUser = favoriteCurrentUser ? favoriteCurrentUser : [];

    // favoriteLocal===[{favorite1},{favoriteCurrent===null}]
    if (favoriteCurrentUser.length === 0) {
      value = Object.assign({ userId: this.currentUser.id }, { listIdProduct: [id] });
      return this.saveLocalNewFavorite(favoriteOtherUser, value);
    }

    // favoriteLocal===[{favoriteOtherUser},{favoriteCurrent}]
    if (favoriteCurrentUser.listIdProduct.find(ele => ele === id)) {
      // this product is exits
      this.showError();
      return favoriteCurrentUser;
    }
    favoriteCurrentUser.listIdProduct.push(id);
    return this.saveLocalNewFavorite(favoriteOtherUser, favoriteCurrentUser);
  }

  removeFavorite(data, id) {
    let favoriteOtherUser: any;
    let favoriteCurrentUser: any;
    let favoriteLocal: any;
    let favoriteList: any;
    let favoriteCurrentUserNew: any;
    // tslint:disable-next-line: prefer-const
    let value = [];
    if (id) {
      // data = except delItem
      data = data.filter(item => {
        return item.id !== id;
      });
    }

    // update local
    data.map(item => value.push(item.id));
    // get all favorites of all users
    favoriteLocal = this.localService.getLocalStorage(KEY.favorite);
    favoriteList = favoriteLocal ? favoriteLocal : [];
    favoriteOtherUser = favoriteList.filter(item => item.userId !== this.currentUser.id);
    favoriteCurrentUser = favoriteList.find(ob => ob.userId === this.currentUser.id);

    favoriteCurrentUserNew = Object.assign({ userId: this.currentUser.id }, { listIdProduct: value });
    favoriteOtherUser.push(favoriteCurrentUserNew);

    this.localService.removeLocalStorage(KEY.favorite);
    this.localService.saveLocalStorage(KEY.favorite, favoriteOtherUser);

    return data;
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

  showSuccess() {
    alert('Success!');
  }

  showError() {
    alert('This product was added your favorite!');
  }

  saveLocalNewFavorite(valueSaveLocal, favoriteCurrentUser) {
    valueSaveLocal.push(favoriteCurrentUser);
    this.showSuccess();
    return this.localService.saveLocalStorage(KEY.favorite, valueSaveLocal);
  }
}
