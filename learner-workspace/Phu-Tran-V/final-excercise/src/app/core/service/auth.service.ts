import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CoreModule } from '../core.module';

@Injectable({
  providedIn: CoreModule
})
export class AuthService {

  constructor(
    private router: Router
  ) { }
  /**
   * Set cookie
   * @param cname : cookie name
   * @param cvalue : cookie value
   * @param extimes : cookie expire
   */
  setCookie(cname, cvalue, extimes) {
    const d = new Date();
    d.setTime(d.getTime() + (extimes * 60 * 1000));
    const expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
  }


  /**
   * get cookie
   * @param cname : cookie name
   */
  getCookie(cname) {
    const name = cname + '=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }
  checkLogin() {
    return !!this.getCookie('isLogin');
  }

  logout() {
    this.setCookie('isLogin', 'false', -1);
    this.router.navigate(['/']);
  }
}