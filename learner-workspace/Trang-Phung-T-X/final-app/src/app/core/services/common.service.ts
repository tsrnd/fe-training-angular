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
    const valueLocal = this.localService.getLocalStorage(KEY.favorite);
    // check data in localStorage be has value or null
    const value = valueLocal ? valueLocal : [];
    // check product belong to favorite product
    // tslint:disable-next-line: only-arrow-functions
    if (valueLocal && valueLocal.find(function(element) {
      return element === id;
    })) {
      return value;
    }
    // push id to arr id in local
    value.push(id);
    // save local
    this.localService.saveLocalStorage(KEY.favorite, value);
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
