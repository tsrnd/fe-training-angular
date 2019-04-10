import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LocalerService } from './../../core/services/localer.service';
import { Router } from '@angular/router';
import { CookieService } from 'src/app/core/services/cookie.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  checkMail: any;
  checkSuccess: any;
  obj: any;

  constructor(
    private cookieService: CookieService,
    private localer: LocalerService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    console.log(f.value);
    this.checkAccount('Account', f.value);
  }

  checkAccount(key: string, account: any) {
    if (key) {
      this.obj = JSON.parse(this.localer.getLocalStorage(key));
      this.checkMail = this.obj.find((element) => element.email === account.email);
      this.checkSuccess = this.checkMail.password.includes(account.password);
      if (this.checkSuccess && typeof this.checkMail === 'object') {
        this.cookieService.setCookie('login', 1, 2);
        this.router.navigate(['profile', this.checkMail]);
      }
    }
  }
}
