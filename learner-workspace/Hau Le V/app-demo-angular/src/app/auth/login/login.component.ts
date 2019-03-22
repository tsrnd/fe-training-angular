import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {LocalerService} from '../../core/service/localer.service';
import {AuthService} from '../auth.service';
import { Router }      from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  message: string;
 
  constructor(public authService: AuthService, public router: Router, private localer: LocalerService) {
    this.setMessage();
  }
  submited:boolean;
  ngOnInit() {
  }
  onSubmit(ngForm: NgForm) {
    let data = JSON.parse(this.localer.getLocal(ngForm.value.email))
    if (data&&(ngForm.value.email == data[2].email)&&(ngForm.value.password==data[3].password)){
      this.authService.isLoggedIn = true;
      this.router.navigate(['account/profile']);
    }
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
    let redirect = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : 'account/profile';
    this.router.navigateByUrl(redirect);
  }
 
  logout() {
    this.authService.logout();
    this.setMessage();
  }
}
