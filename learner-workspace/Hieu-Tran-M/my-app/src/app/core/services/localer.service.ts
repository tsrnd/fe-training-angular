import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalerService {
  saveLocalStorage(name: string, id: string): void {
    localStorage.setItem(id, name);
  }

  getLocalStorage(id: string): string {
    console.log(localStorage.getItem(id));
    return localStorage.getItem(id);
  }

  saveSessionStorage(name: string, id: string): void {
    sessionStorage.setItem(id, name);
  }

  getSessionStorage(id: string): string {
    console.log(sessionStorage.getItem(id));
    return sessionStorage.getItem(id);
  }

  constructor() { }
}
