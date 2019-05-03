import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';
import { LocalerService } from './localer.service';
import { from, of, Observable, Subject, BehaviorSubject } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Injectable({
  providedIn: CoreModule
})
export class AuthService {

  userSubj: BehaviorSubject<any>;

  constructor(
    private storage: LocalerService
  ) {
    const val = this.isLogin() ? this.storage.getLocalStorage('user') : null;
    this.userSubj = new BehaviorSubject<any>(val);
  }

  /**
   * Check is login or not
   */
  isLogin() {
    return !!this.storage.getCookie('login');
  }

  /**
   * Handle authenticate data
   * @param email : email requet
   * @param password : password request
   */
  authenticate(email: string, password: string) {
    const userList = this.storage.getLocalStorage('users');
    if (!userList) { return false; }
    return (userList as Array<any>).find(v => {
      return v.email === email && v.password === password;
    });
  }

  /**
   * Handle user data and add new user to database
   * @param user : new user data
   */
  register(user: any) {
    delete user.passwordConfirm;
    const users = this.storage.getLocalStorage('users') ? this.storage.getLocalStorage('users') : [];
    const newUser = {
      id: (users.length > 0) ? users[users.length - 1].id + 1 : 1,
      ...user
    };
    users.push(newUser);
    this.storage.setLocalStorage('users', users);
  }

  /**
   * Get authenticated user
   */
  getAuthUser(): BehaviorSubject<any> {
    return this.userSubj;
  }

  /**
   * Remove auth user when loggout
   */
  removeAuthUser() {
    this.storage.setCookie('login', true, 0);
    this.storage.removeLocalStorage('user');
  }
}
