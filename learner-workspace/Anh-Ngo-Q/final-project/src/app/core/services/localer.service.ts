import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalerService {

  constructor() { }

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
  getCookie(cname): any {
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

  /**
   * set object to localstorage
   * @param key : key of localstorage object
   * @param value : value of localstorage object
   */
  setLocalStorage(key: string, value: any) {
    if (value) {
      value = value instanceof Object ? JSON.stringify(value) : value;
    }
    localStorage.setItem(key, value);
  }

  /**
   * Get localstorage
   * @param key : localstorage key
   */
  getLocalStorage(key: string): any {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      return localStorage.getItem(key);
    }
  }

  /**
   * Remove item from localstorage
   * @param key : localstorage key
   */
  removeLocalStorage(key) {
    localStorage.removeItem(key);
  }
}
