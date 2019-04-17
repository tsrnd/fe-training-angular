import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  dataCat = [];
  loginCookie;
  constructor(
    private authService: AuthService,
    private router: Router,
    private apiService: ApiService,
    private cookieService: CookieService
  ) {
    this.authService.isLoggedIn = this.cookieService.check('user_login');
  }

  ngOnInit() {
    this.apiService.get("/categories").subscribe(data => this.dataCat = data);
  }
  logout() {
    this.authService.logout();
    this.cookieService.delete('user_login');
    this.router.navigate(['/']);
  }
}
