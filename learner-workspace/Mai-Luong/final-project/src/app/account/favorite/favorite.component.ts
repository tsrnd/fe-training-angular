import { Component, OnInit } from '@angular/core';
import { LocalerService } from '../../core/service/localer.service';
import { AuthService } from '../../core/service/auth.service';
import { CookieService } from '../../core/service/cookie.service';
import { ApiService } from '../../api.service';
import { stringify } from '@angular/core/src/render3/util';
import { parse } from 'querystring';
import { Router } from '@angular/router';

const STORAGE_LIKE = 'data';
@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  favorite;
  arrayDataFavorite;
  arrayDataFavoriteNew;
  emailCookie;
  dataFavorite = [];
  dataFavoriteUser = [];
  constructor(
    private authService: AuthService,
    private localerService: LocalerService,
    private cookie: CookieService,
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.authService.isLoggedIn === true) {
      this.favorite = this.localerService.getLocal(STORAGE_LIKE);
      this.arrayDataFavorite = JSON.parse(this.favorite);
      this.emailCookie = this.cookie.getCookie('login');
      this.arrayDataFavorite.forEach(user => {
        if (user.email === this.emailCookie) {
          this.dataFavorite.push(user.product_id);
          this.apiService.getAssets('assets/files/data.json').subscribe(
            obj => obj.some(data => {
              if (user.product_id === data.id) {
                this.dataFavoriteUser.push(data);
                return this.dataFavoriteUser;
              }
            }),
          );
        }
      });
    }
  }
  delLikeFun(id) {
    this.favorite = this.localerService.getLocal(STORAGE_LIKE);
    this.arrayDataFavorite = JSON.parse(this.favorite);
    this.emailCookie = this.cookie.getCookie('login');
    this.arrayDataFavorite.filter(user => {
      if (user.email === this.emailCookie && user.product_id === id) {
        this.arrayDataFavorite.splice(this.arrayDataFavorite.indexOf(user), 1);
      }
    });
    this.localerService.saveLocal(STORAGE_LIKE, JSON.stringify(this.arrayDataFavorite));
    this.dataFavoriteUser.filter(data => {
      if (data.id === id) {
        console.log(id);
        this.dataFavoriteUser.splice(this.dataFavoriteUser.indexOf(data), 1);
      }
    });
  }
}
