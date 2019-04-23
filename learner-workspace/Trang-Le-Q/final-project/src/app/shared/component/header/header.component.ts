import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  checkLogin: boolean;
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.checkLogin = this.auth.checkLogin();
  }
  logOut() {
    this.auth.setCookie('isLogin', false, -1);
    this.router.navigate(['/home']);
  }
}
