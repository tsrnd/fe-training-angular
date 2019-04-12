import { Injectable } from '@angular/core';
import { LocalerService } from './localer.service';
import { KEY } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private localService: LocalerService
  ) { }

  addFavorite(id) {
    const valueLocal = this.localService.getLocalStorage(KEY.favorite);
    // check data in localStorage be has value or null
    const value = valueLocal ? valueLocal : [];
    // check email is exist in local
    // tslint:disable-next-line: only-arrow-functions
    if (valueLocal && valueLocal.find(function (element) {
      return element === id;
    })) {
      return value;
    }
    // push id to arr id in local
    value.push(id);
    // save local
    this.localService.saveLocalStorage(KEY.favorite, value);
  }
}
