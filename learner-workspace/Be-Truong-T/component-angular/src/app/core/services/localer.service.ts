import { Injectable } from '@angular/core';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalerService {

  constructor() { }
  saveLocalStorage(key: string, value: any) {
    if (typeof value === 'object' ) {
      return localStorage.setItem(key, JSON.stringify(value));
    }
    return localStorage.setItem(key, value);
  }
  getLocalStorage(key: string) {
    console.log(JSON.parse(localStorage.getItem(key)[0]));
  }
  saveSessionStorage(key: string, value: any) {
    if (typeof value === 'object' ) {
      return sessionStorage.setItem(key, JSON.stringify(value));
    }
    return sessionStorage.setItem(key, value);
  }
  getSessionStorage(key: string) {
    console.log(sessionStorage.getItem(key));
  }
}
