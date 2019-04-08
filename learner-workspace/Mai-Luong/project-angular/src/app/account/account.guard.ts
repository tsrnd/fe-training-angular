import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from '../core/service/cookie.service';

@Injectable({
  providedIn: 'root'
})
export class AccountGuard implements  CanActivate, CanActivateChild {
  constructor(
    private cookie: CookieService,
    private router: Router
  ) {}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!!this.cookie.getCookie('login')) {
      return true;
    }
    this.router.navigate(['/login']);
  }
  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!!this.cookie.getCookie('login')) {
      return true;
    }
    this.router.navigate(['/login']);
  }
}
