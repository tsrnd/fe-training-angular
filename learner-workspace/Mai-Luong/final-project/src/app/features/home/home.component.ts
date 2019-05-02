import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { AuthService } from '../../core/service/auth.service';
import { LocalerService } from '../../core/service/localer.service';
import { CookieService } from '../../core/service/cookie.service';
import { ShareService } from '../../core/service/share.service';
import { inspectNativeElement } from '@angular/platform-browser/src/dom/debug/ng_probe';

const STORAGE_LIKE = 'data';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  id;
  isLoginIn: boolean;
  dataDogHome = [];
  dataCatHome = [];
  dataPigHome = [];
  error;

  favorite;
  arrayDataFavorite;
  dataFavorite = [];
  dataFavoriteUser;
  emailCookie: any;
  isActive;
  constructor(
    private apiService: ApiService,
    private authService: AuthService,
    private shareService: ShareService,
  ) { }

  ngOnInit() {
    this.isLoginIn = this.authService.isLoggedIn;
    this.shareService.likeFun(this.id);
    // this.dataFavoriteUser = this.shareService.showLiked(this.id);
    this.apiService.getAssets('assets/files/data.json').subscribe(
      obj => obj.forEach(child => {
        if (child.categoryId === 1) {
          this.dataDogHome.push(child);
          return this.dataDogHome;
        }
      }),
      err => this.error = err
    );
    this.apiService.getAssets('assets/files/data.json').subscribe(
      obj => obj.forEach(child => {
        if (child.categoryId === 2) {
          this.dataCatHome.push(child);
          return this.dataCatHome;
        }
      }),
      err => this.error = err
    );
    this.apiService.getAssets('assets/files/data.json').subscribe(
      obj => obj.forEach(child => {
        if (child.categoryId === 3) {
          this.dataPigHome.push(child);
          return this.dataPigHome;
        }
      }),
      err => this.error = err
    );
  }

  // // check liked color
  // if(this.authService.isLoggedIn === true) {
  //   this.favorite = this.localerService.getLocal(STORAGE_LIKE);
  //   this.arrayDataFavorite = JSON.parse(this.favorite);
  //   this.emailCookie = this.cookie.getCookie('login');
  //   this.arrayDataFavorite.filter(user => {
  //     if (user.email === this.emailCookie) {
  //       this.dataFavorite.push(user.product_id);
  //       console.log(this.dataFavorite);
  //       this.isActive = user.product_id;
  //       this.apiService.getAssets('assets/files/data.json').subscribe(
  //         obj => obj.some(data => {
  //           if (user.product_id === data.id) {
  //             this.dataFavoriteUser.push(data);
  //             console.log(this.dataFavoriteUser);
  //             return this.dataFavoriteUser;
  //           }
  //         }),
  //       );
  //     }
  //   });
}
