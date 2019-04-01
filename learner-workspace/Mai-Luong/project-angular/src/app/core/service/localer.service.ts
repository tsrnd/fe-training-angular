import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
// tslint:disable-next-line:component-class-suffix
export class LocalerService {

  constructor() { }

  saveLocal(keyLocal: any, valueLocal: any) {
    if (typeof(valueLocal) === 'object') {
      valueLocal = JSON.stringify(valueLocal);
    } else {
      localStorage.setItem(keyLocal, valueLocal);
    }
  }

  getLocal(keyLocal: any): string {
    return localStorage.getItem(keyLocal);
  }

  saveSession(keyLocal: string, valueLocal: any) {
    if (typeof(valueLocal) === 'object') {
      valueLocal = JSON.stringify(valueLocal);
    } else {
      sessionStorage.setItem(keyLocal, valueLocal);
    }
  }
  getSession(keyLocal: any): string {
    return sessionStorage.getItem(keyLocal);
  }
}
