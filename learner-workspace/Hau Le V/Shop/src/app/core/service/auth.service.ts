import { Injectable } from '@angular/core';
import { LocalerService } from './localer.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private localer: LocalerService,private cookieService: CookieService){}
  redirectUrl: string;
  listData: any[];
  
  getProfile(email){
    this.listData = JSON.parse(this.localer.getLocal()) || [];
    return this.listData.find((item) => {
      return (item.email==email)
    });
  }
  isLoggedIn():boolean{
    var user = this.cookieService.get('user');
    if (!user){
      return false;
    }
    else{
      var infoUser = user.split(",");
      this.listData = JSON.parse(this.localer.getLocal()) || [];
      return !!this.listData.find((item) => {
        return (item.email==infoUser[0] && item.password == infoUser[1])
      });
    }
  };
  login(email, password){
    this.listData = JSON.parse(this.localer.getLocal()) || [];
    var user = this.listData.find((item) => {
      return (item.email == email) && (item.password == password)
    });
    if(user){
      this.cookieService.set('user',email + "," + password,1);
    }
    return user;
  }
  logout(): void {
    this.cookieService.delete('user');
  }
}