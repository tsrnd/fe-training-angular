import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
// true => allow access
// false => dont allow access
export class AccountGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  // next: ActivatedRouteSnapshot which is the next route that will be activated if the guard is allowing access,
  // state: RouterStateSnapshot which is the next router state if the guard is allowing access.
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    let url: string = state.url; // get next url want access
    return this.checkLogin(url); // check guard
    // true => allow access
    // false => navigate(['/login'])
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  checkLogin(url: string): boolean {
    // if login => true => access
    if (this.authService.isLoggedIn) { return true; }

    // Store the attempted URL for redirecting
    // this.authService.redirectUrl = url;

    // Navigate to the login page with extras
    // else navigate(['/login'])
    this.router.navigate(['/account']);
    return false;
  }
}
