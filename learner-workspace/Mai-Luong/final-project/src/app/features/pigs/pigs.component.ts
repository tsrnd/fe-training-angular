import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { AuthService } from '../../core/service/auth.service';
import { LocalerService } from '../../core/service/localer.service';
import { CookieService } from '../../core/service/cookie.service';
import { ShareService } from '../../core/service/share.service';

@Component({
  selector: 'app-pigs',
  templateUrl: './pigs.component.html',
  styleUrls: ['./pigs.component.scss']
})
export class PigsComponent implements OnInit {
  id;
  arrayLogin = [];
  isLoginIn: boolean;
  dataPigs = [];
  error: any;
  constructor(
    private apiService: ApiService,
    private authService: AuthService,
    private shareService: ShareService
  ) {}

  ngOnInit() {
    this.isLoginIn = this.authService.isLoggedIn;
    this.shareService.likeFun(this.id);
    this.apiService.getAssets('assets/files/data.json').subscribe(
      obj => obj.forEach(child => {
        if (child.categoryId === 3) {
          this.dataPigs.push(child);
          return this.dataPigs;
        }
      }),
      err => this.error = err
    );
  }
}
