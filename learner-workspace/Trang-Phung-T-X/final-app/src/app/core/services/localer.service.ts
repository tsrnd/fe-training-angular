import { Injectable } from '@angular/core';


export const KEY = {
  listUser: 'userRegister',
  currentUser: 'currentUser',
  favorite: 'newFavorite'
};

@Injectable({
  providedIn: 'root'
})
export class LocalerService {

  constructor() { }
  saveLocalStorage(key: string, value: any) {
    // if (typeof value === 'object') {
    //   return localStorage.setItem(key, JSON.stringify(value));
    // }
    // check typeof value order to JSON.stringify(value)
    value = (typeof value === 'object') ? JSON.stringify(value) : value;
    return localStorage.setItem(key, value);
  }

  getLocalStorage(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }

  saveSessionStorage(key: string, value: any) {
    // if (typeof value === 'object') {
    //   return sessionStorage.setItem(key, JSON.stringify(value));
    // }
    // return sessionStorage.setItem(key, value);
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
