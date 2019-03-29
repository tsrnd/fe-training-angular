import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalerService {

  constructor() { }
  saveLocalStorage(input: string) {
    localStorage.setItem('local', input);
  }
  getLocalStorage() {
    return localStorage.getItem('local');
  }
  saveSessionStorage(input: string) {
    sessionStorage.setItem('session', input);
  }
  getSessionStorage() {
    return sessionStorage.getItem('session');
  }
}
