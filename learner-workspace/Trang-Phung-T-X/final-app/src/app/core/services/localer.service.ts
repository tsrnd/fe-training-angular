import { Injectable } from '@angular/core';


export const KEY = {
  listUser: 'userRegister',
  currentUser: 'currentUser',
  favorite: 'newFavorite',
};

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
    return JSON.parse(localStorage.getItem(key));
  }

  saveSessionStorage(key: string, value: any) {
    value = (typeof value === 'object') ? JSON.stringify(value) : value;
    return sessionStorage.setItem(key, value);
  }

  getSessionStorage(key: string) {
    return sessionStorage.getItem(key);
  }

  removeLocalStorage(key: string) {
    localStorage.removeItem(key);
  }

  clearLocalStorage() {
    localStorage.clear();
  }
}
