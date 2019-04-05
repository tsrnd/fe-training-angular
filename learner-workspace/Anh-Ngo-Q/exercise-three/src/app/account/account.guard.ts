import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { AccountModule } from './account.module';
import { AuthService } from '../core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AccountGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  canActivate() {
    if (!!this.auth.getCookie('login')) {
      return true;
    }
    this.router.navigate(['/login']);
  }
}
