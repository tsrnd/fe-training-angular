import { Component, OnInit } from '@angular/core';
import { LocalerService } from '../../core/service/localer.service';
import { AuthService } from '../../core/service/auth.service';
import { CookieService } from '../../core/service/cookie.service';

const STORAGE_KEY = 'users';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  profileUser: any;
  arrayProfile = [];
  emailCookie: any;
  dataLogin = [];
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
      // console.log(this.arrayProfile);
      this.arrayProfile .forEach(user => {
        if (user.email === this.emailCookie) {
          this.dataLogin.push(user);
        }
      });
      // return this.dataLogin;
    }
    // console.log('cdscsdc', +this.dataLogin[0]?.firstName);
  }
}
