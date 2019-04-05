import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LocalerService } from 'src/app/core/services/localer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isAuthenticate = false;

  constructor(
    private localer: LocalerService
  ) { }

  ngOnInit() {
  }

  /**
   * Authenticate handle
   * @param loginForm : form instance
   */
  login(loginForm: NgForm) {
    this.isAuthenticate = this.localer.getLocalStorage('users').some((user) => {
      return user.email === loginForm.value.email && user.password === loginForm.value.password;
    });
  }
}
