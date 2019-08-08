import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LocalerService } from './../../core/services/localer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private checkMail: any;
  private checkSuccess: any;
  private obj: any;

  constructor(
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
        localStorage.setItem('isLoggedIn', 'true');
        this.router.navigate(['/profile', this.checkMail]);
      }
    }
  }
}
