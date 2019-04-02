import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalerService {
  saveLocalStorage(key: string, value: string): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getLocalStorage(key: string): string {
    console.log(localStorage.getItem(key));
    return localStorage.getItem(key);
  }

  saveSessionStorage(key: string, value: string): void {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  getSessionStorage(key: string): string {
    console.log(sessionStorage.getItem(key));
    return sessionStorage.getItem(key);
  }

  constructor() { }
}
