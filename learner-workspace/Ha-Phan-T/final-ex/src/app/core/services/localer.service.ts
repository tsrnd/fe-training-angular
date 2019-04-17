import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalerService {

  constructor() { }
  saveLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
  getLocalStorage(key) {
    return localStorage.getItem(key);
  }
  saveSessionStorage(key, data) {
    sessionStorage.setItem(key, JSON.stringify(data));
  }
  getSessionStorage(key) {
    return sessionStorage.getItem(key);
  }
}
