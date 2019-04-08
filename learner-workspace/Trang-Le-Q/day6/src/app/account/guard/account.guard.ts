import { Injectable } from '@angular/core';
import { CanActivate, Router, CanActivateChild } from '@angular/router';
import { AuthService } from '../../core/service/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AccountGuard implements CanActivate, CanActivateChild {
  constructor(
    private auth: AuthService,
    private router: Router

  ) {}
  canActivate() {
    if (!this.auth.checkLogin()) {
      this.router.navigate(['/login']);
    }
    return true;
  }

  canActivateChild() {
    return this.canActivate();
  }
}
