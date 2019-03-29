import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalerService {

  constructor() { }
  saveLocalStorage(key: string, value: any) {
    if (typeof value === 'object') {
      return localStorage.setItem(key, JSON.stringify(value));
    } else {
      return localStorage.setItem(key, value);
    }
  }
  getLocalStorage(key: string) {
    return localStorage.getItem(key);
  }
  saveSessionStorage(key: string, value: any) {
    if (typeof value === 'object') {
      return sessionStorage.setItem(key, JSON.stringify(value));
    } else {
      return sessionStorage.setItem(key, value);
    }
  }
  getSessionStorage(key: string) {
    return sessionStorage.getItem(key);
  }
}
