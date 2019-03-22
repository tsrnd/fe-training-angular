import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../core/service/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { RouterStateSnapshot, Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  cookieUser:any;
  user:any;
  title:string;
  constructor(
    private auth: AuthService,
    private cookieService: CookieService,
    private route: ActivatedRoute) 
    {
      this.cookieUser = this.cookieService.get('user').split(",");
      this.user = this.auth.getProfile(this.cookieUser[0]);
    }

  ngOnInit() {
  }
  getTitle(e){
    this.title = e.title;
  }
}
