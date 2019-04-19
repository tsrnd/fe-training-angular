import { Injectable } from '@angular/core';
import { LocalerService, KEY } from './localer.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private localService: LocalerService
  ) { }

  currentUser: any;

  addFavorite(id) {
    let value: any;
    let favoriteOtherUser: any;
    let favoriteCurrentUser: any;
    let favoriteList: any;
    let favoriteLocal: any;

    // get currentUser
    this.currentUser = this.localService.getLocalStorage(KEY.currentUser);
    // get all favorites of all users
    favoriteLocal = this.localService.getLocalStorage(KEY.favorite);

    favoriteList = favoriteLocal ? favoriteLocal : [];

    // favoriteLocal===[]
    if (favoriteList.length === 0) {
      value = Object.assign({ userId: this.currentUser.id }, { listIdProduct: [id] });
      favoriteList.push(value);
      return this.localService.saveLocalStorage(KEY.favorite, favoriteList);
    }

    favoriteOtherUser = favoriteList.filter(item => item.userId !== this.currentUser.id);
    favoriteCurrentUser = favoriteList.find(ob => ob.userId === this.currentUser.id);
    // check data in localStorage be has value or null
    favoriteCurrentUser = favoriteCurrentUser ? favoriteCurrentUser : [];

    // favoriteLocal===[{favorite1},{favoriteCurrent===null}]
    if (favoriteCurrentUser.length === 0) {
      value = Object.assign({ userId: this.currentUser.id }, { listIdProduct: [id] });
      favoriteOtherUser.push(value);
      // save local
      return this.localService.saveLocalStorage(KEY.favorite, favoriteOtherUser);
    }

    // favoriteLocal===[{favorite1},{favoriteCurrent}]
    if (favoriteCurrentUser.listIdProduct.find(ele => ele === id)) {
      return favoriteCurrentUser;
    }
    favoriteCurrentUser.listIdProduct.push(id);
    favoriteOtherUser.push(favoriteCurrentUser);
    return this.localService.saveLocalStorage(KEY.favorite, favoriteOtherUser);
  }

  currentAccount(email) {
    // find user login
    this.currentUser = this.localService.getLocalStorage(KEY.listUser).find(acc => {
      return acc.email === email;
    });
    // save local current user
    this.localService.saveLocalStorage(KEY.currentUser, this.currentUser);
  }
}
