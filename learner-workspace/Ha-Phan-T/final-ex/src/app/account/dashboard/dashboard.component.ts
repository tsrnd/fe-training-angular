import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LocalerService } from 'src/app/core/services/localer.service';

const USERS_KEY = "users";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  email;
  listUsers;
  userName;
  constructor(
    private cookieService: CookieService,
    private localerService: LocalerService
  ) { }

  ngOnInit() {
    this.email = this.cookieService.get('user_login');
    let listUsersString = this.localerService.getLocalStorage(USERS_KEY);
    this.listUsers = listUsersString ? JSON.parse(listUsersString) : [];
    this.listUsers.forEach(data => {
      if (data.email == this.email) {
        this.userName = data.lastName;
      }
    });
  }

}
