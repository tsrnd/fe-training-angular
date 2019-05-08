import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  checkLogin: boolean;

  constructor(
    public auth: AuthService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.checkLogin = this.auth.checkLogin();
  }

  logOut() {
    this.auth.setCookie('isLogin', false, -1);
    this.router.navigate(['/login']);
    this.checkLogin = false;
  }

}
