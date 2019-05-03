import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { LocalerService } from 'src/app/core/services/localer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errorMessage;

  constructor(
    private auth: AuthService,
    private localer: LocalerService,
    private router: Router
  ) { }

  user = {
    email: '',
    password: ''
  };

  ngOnInit() {
  }

  /**
   * Handle login value form
   * @param form : form data
   */
  loginSubmit() {
    const authenticateUser = this.auth.authenticate(this.user.email, this.user.password);
    if (authenticateUser) {
      this.localer.setLocalStorage('user', authenticateUser);
      this.localer.setCookie('login', 1, 100);
      this.router.navigateByUrl('/account/dashboard');
    } else {
      this.errorMessage = 'Authenticate fail';
    }
  }
}
