import { Injectable } from '@angular/core';

const STORAGE_KEY = 'current-value';

@Injectable({
  providedIn: 'root'
})
export class LocalerService {

  constructor() { }

  saveLocalStorage(v: any) {
    if (v) {
      // v = (v instanceof Object) ? JSON.stringify(v) : v;
      const storageData = this.getLocalStorage();
      console.log('new value', v);
      if (storageData) {
        storageData.push(v);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(storageData));
        return;
      }
      const saveData = [v];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(saveData));
    }
  }

  getLocalStorage() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY));
    } catch (e) {
      return localStorage.getItem(STORAGE_KEY);
    }
  }

  saveSessionStorage(v: any) {
    if (v) {
      v = (v instanceof Object) ? JSON.stringify(v) : v;
      sessionStorage.setItem(STORAGE_KEY, v);
    }
  }

  getSessionStorage() {
    try {
      return JSON.parse(sessionStorage.getItem(STORAGE_KEY));
    } catch (e) {
      return sessionStorage.getItem(STORAGE_KEY);
    }
  }
}
