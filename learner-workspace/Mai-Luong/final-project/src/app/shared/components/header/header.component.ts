import { Component, OnInit } from '@angular/core';
import { CookieService } from '../../../core/service/cookie.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userCookie = false;
  constructor(
    public authService: AuthService,
    private cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.cookieService.getCookie('login')) {
      this.authService.isLoggedIn = true;
    }
  }

  logout() {
    this.authService.logout();
    this.cookieService.setCookie('login', '', 0);
    this.router.navigate(['/login']);
  }
}
