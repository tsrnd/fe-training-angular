import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from './cookie.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    private cookieService: CookieService
  ) { }

  logout(): void {
    this.cookieService.setCookie('login', 0, 0);
    this.router.navigate(['/']);
  }

  verifyLogin(url): boolean {
    if (!this.isLoggedIn()) {
        this.router.navigate(['/login']);
        return false;
    } else if (this.isLoggedIn()) {
        return true;
    }
}
  public isLoggedIn(): boolean {
      if (this.cookieService.getCookie('login')) {
        return true;
      }
      return false;
  }
}
