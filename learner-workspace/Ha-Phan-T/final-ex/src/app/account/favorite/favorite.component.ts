import { Component, OnInit } from '@angular/core';
import { LocalerService } from 'src/app/core/services/localer.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

const USERS_COOKIE = "user_login";
const USERS_FAVORITE = 'user_favorite';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  listFavor;
  emailCookie;
  dataFavors = [];
  listFavorString;
  err;
  index;
  hidden = false;
  constructor(
    private localerService: LocalerService,
    private cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit() {
    this.listFavorString = this.localerService.getLocalStorage(USERS_FAVORITE);
    this.listFavor = this.listFavorString ? JSON.parse(this.listFavorString) : [];
    this.emailCookie = this.cookieService.get(USERS_COOKIE);
    this.listFavor.forEach(data => {
      if (data.email == this.emailCookie) {
        this.dataFavors.push(data);
      }
    });
    if (this.dataFavors.length == 0) {
      this.err = "You do not like any product";
    }
    console.log(this.dataFavors);
  }

  deleteFavor(id) {
    this.listFavor.forEach((data, index) => {
      if (data.email == this.emailCookie && data.id_product == id) {
        this.index = index;
        if (this.index !== -1) {
          this.listFavor.splice(this.index, 1);
          this.localerService.saveLocalStorage(USERS_FAVORITE, this.listFavor);
        }
      }
    });
    this.dataFavors.forEach((data, index) => {
      if (data.id_product == id) {
        this.index = index;
        if (this.index !== -1) {
          this.dataFavors.splice(this.index, 1);
        }
      }
    });
  }
}
