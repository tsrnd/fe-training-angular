import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.verifyLogin(state.url);
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(next, state);
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
      let status = false;
      if (localStorage.getItem('isLoggedIn') === 'true') {
        status = true;
      } else {
        status = false;
      }
      return status;
  }

}
