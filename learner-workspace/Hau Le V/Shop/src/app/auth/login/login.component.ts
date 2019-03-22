import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router }      from '@angular/router';
import { AuthService } from '../../core/service/auth.service';
import { LocalerService } from '../../core/service/localer.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submited:boolean;
  isSusscess:boolean;
  constructor(
    public authService: AuthService,
    public router: Router,
    private localer: LocalerService
    ) { }

  ngOnInit() {
    this.isSusscess = true;
  }
  onLogin(ngForm: NgForm) {
    if ((this.authService.login(ngForm.value.email,ngForm.value.password))){
      this.router.navigate(['/account/profile']);
    }
    else{
      this.isSusscess = false;
    }
  }

}
