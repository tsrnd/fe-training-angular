import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLogin: boolean;
  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.isLogin = this.auth.checkLogin();
  }
  logout() {
    this.auth.logout();
  }

}
