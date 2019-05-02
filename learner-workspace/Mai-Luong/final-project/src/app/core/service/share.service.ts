import { Injectable, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { AuthService } from './auth.service';
import { LocalerService } from './localer.service';
import { CookieService } from './cookie.service';

const STORAGE_LIKE = 'data';
@Injectable({
  providedIn: 'root'
})
export class ShareService {
  infoLike: any;
  arrayInfoLike = [];
  dataLike: any;
  objDataLike;
  dataLogin: any;
  emailCookie: any;

  favorite;
  arrayDataFavorite;
  dataFavorite = [];
  dataFavoriteUser = [];

  constructor(
    private localerService: LocalerService,
    private cookie: CookieService,
  ) { }

  likeFun(id) {
    this.dataLike = this.localerService.getLocal(STORAGE_LIKE);
    this.objDataLike = this.dataLike ? JSON.parse(this.dataLike) : [];

    const isExist = this.objDataLike.some(obj => {
      return obj.product_id === id && obj.email === this.cookie.getCookie('login');
    });

    if (!isExist) {
      this.objDataLike.push({
        email: this.cookie.getCookie('login'),
        product_id: id,
      });
      this.infoLike = JSON.stringify(this.objDataLike);
      this.localerService.saveLocal(STORAGE_LIKE, this.infoLike);
    }
  }
}
