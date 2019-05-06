import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { AuthService } from '../../core/service/auth.service';
import { LocalerService } from '../../core/service/localer.service';
import { CookieService } from '../../core/service/cookie.service';
import { ShareService } from '../../core/service/share.service';

const STORAGE_LIKE = 'data';
const STORAGE_KEY = 'users';
@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {
  id;
  arrayLogin = [];
  isLoginIn: boolean;
  dataDogs = [];
  error: any;
  constructor(
    private apiService: ApiService,
    private authService: AuthService,
    private shareService: ShareService,
  ) {}

  ngOnInit() {
    this.isLoginIn = this.authService.isLoggedIn;
    this.shareService.likeFun(this.id);
    this.apiService.getAssets('assets/files/data.json').subscribe(
      obj => obj.forEach(child => {
        if (child.categoryId === 1) {
          this.dataDogs.push(child);
          return this.dataDogs;
        }
      }),
      err => this.error = err
  );
  }
}
