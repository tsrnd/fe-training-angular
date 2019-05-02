import { Component, OnInit } from '@angular/core';
import { LocalerService } from '../../core/service/localer.service';
import { AuthService } from '../../core/service/auth.service';
import { CookieService } from '../../core/service/cookie.service';

const STORAGE_KEY = 'users';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileUser: any;
  arrayProfile = [];
  emailCookie: any;
  dataProfile = [];
  constructor(
    private service: LocalerService,
    private authService: AuthService,
    private cookie: CookieService
  ) { }

  ngOnInit() {
    if (this.authService.isLoggedIn === true) {
      this.profileUser = this.service.getLocal(STORAGE_KEY);
      this.arrayProfile = JSON.parse(this.profileUser);
      this.emailCookie = this.cookie.getCookie('login');
      this.arrayProfile .forEach(user => {
        if (user.email === this.emailCookie) {
          this.dataProfile.push(user);
        }
      });
    }
  }

}
