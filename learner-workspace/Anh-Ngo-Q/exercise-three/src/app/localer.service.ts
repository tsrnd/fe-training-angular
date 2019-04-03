import { Injectable } from '@angular/core';

const STORAGE_KEY = 'current-value';

@Injectable({
  providedIn: 'root'
})
export class LocalerService {

  constructor() { }

  saveLocalStorage(key, v: any) {
    if (v) {
      v = (v instanceof Object) ? JSON.stringify(v) : v;
      localStorage.setItem(key, v);
    }
  }

  getLocalStorage(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      return localStorage.getItem(key);
    }
  }

  saveSessionStorage(key, v: any) {
    if (v) {
      v = (v instanceof Object) ? JSON.stringify(v) : v;
      sessionStorage.setItem(STORAGE_KEY, v);
    }
  }

  getSessionStorage(key) {
    try {
      return JSON.parse(sessionStorage.getItem(key));
    } catch (e) {
      return sessionStorage.getItem(key);
    }
  }
}
