import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalerService {

  constructor() { }
  saveLocalStorage(input: string) {
    localStorage.setItem('local', JSON.stringify(input));
  }
  getLocalStorage() {
    return JSON.parse(localStorage.getItem('local'));
  }
  saveSessionStorage(input: string) {
    sessionStorage.setItem('session', JSON.stringify(input));
  }
  getSessionStorage() {
    return JSON.parse(sessionStorage.getItem('session'));
  }
}
