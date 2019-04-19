import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { KEY } from './localer.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cookieService: CookieService) { }

  // store the URL so we can redirect after logging in
  // redirectUrl: string;

  setCurrentUser(id): void {
    this.cookieService.set(KEY.currentUser, id);
  }

  getCurrentUser() {
    return this.cookieService.get(KEY.currentUser);
  }

  logout(): void {
    this.cookieService.delete(KEY.currentUser);
  }
}
