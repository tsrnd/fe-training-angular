import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalerService {

  constructor() { }
  saveLocal(key,value) {
    if (typeof(value) === 'object') {
      value = JSON.stringify(value);
    }
    if (!this.getLocal(key)){
      localStorage.setItem(key, value);
      return true;
    }
    return false;
  }
  getLocal(key) {
    return localStorage.getItem(key);
  }
  saveSession(key, value) {
    if (typeof(value) === 'object') {
      value = JSON.stringify(value);
    }
    sessionStorage.setItem(key, value);
  }
  getSession(key) {
    return sessionStorage.getItem(key);
  }
}
