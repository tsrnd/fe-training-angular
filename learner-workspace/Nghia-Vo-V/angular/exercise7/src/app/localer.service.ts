import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalerService {

  constructor() { }

  saveLocalStorage(key: string, value: any) {
    value = (typeof value === 'object') ? JSON.stringify(value) : value;
    return localStorage.setItem(key, value);
  }

  getLocalStorage(key: string) {
    return localStorage.getItem(key);
  }

  saveSessionStorage(key: string, value: any) {
    value = (typeof value === 'object') ? JSON.stringify(value) : value;
    return sessionStorage.setItem(key, value);
  }

  getSessionStorage(key: string) {
    return sessionStorage.getItem(key);
  }
}
