import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalerService } from '../../core/service/localer.service';
import { AuthService } from '../../core/service/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title = "Dash Board";
  cookieUser:any;
  user:any;
@Input() userData:any;
  constructor(
    private auth: AuthService,
    private cookieService: CookieService,
    private route: ActivatedRoute
     ) { }

  ngOnInit() {
    this.cookieUser = this.cookieService.get('user').split(",");
    this.user = this.auth.getProfile(this.cookieUser[0]);
  }

}
