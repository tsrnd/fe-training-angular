import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalerService {
  saveLocalStorage(key: any, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getLocalStorage(key: any): string {
    console.log(localStorage.getItem(key));
    return localStorage.getItem(key);
  }

  saveSessionStorage(key: any, value: any): void {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  getSessionStorage(key: any): string {
    console.log(sessionStorage.getItem(key));
    return sessionStorage.getItem(key);
  }

  constructor() { }
}
