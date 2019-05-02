import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CanActivate, CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CookieService } from '../core/service/cookie.service';
import { AuthService } from '../core/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AccountGuard implements CanActivate, CanActivateChild  {
  constructor(
    private cookie: CookieService,
    private router: Router,
    private authService: AuthService
  ) {}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!!this.cookie.getCookie('login') &&  this.authService.isLoggedIn) {
      return true;
    }
    this.router.navigate(['/login']);
  }
  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!!this.cookie.getCookie('login') &&  this.authService.isLoggedIn) {
      return true;
    }
    this.router.navigate(['/login']);
  }
}
