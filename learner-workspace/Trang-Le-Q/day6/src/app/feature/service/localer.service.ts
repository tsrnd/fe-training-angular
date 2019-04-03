import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalerService {

  constructor() { }
  saveLocalStorage(key: string, input: string) {
    localStorage.setItem(key, JSON.stringify(input));
  }
  getLocalStorage(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }
  saveSessionStorage(key: string, input: string) {
    sessionStorage.setItem(key, JSON.stringify(input));
  }
  getSessionStorage(key: string) {
    return JSON.parse(sessionStorage.getItem(key));
  }
}
