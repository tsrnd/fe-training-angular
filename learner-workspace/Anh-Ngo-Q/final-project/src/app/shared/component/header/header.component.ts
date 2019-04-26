import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  types;

  user;

  page1 = 1;

  constructor(
    private http: ApiService,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.http.get('/type').subscribe(v => this.types = v);
    this.auth.getAuthUser().subscribe(v => this.user = v);
  }

  /**
   * logout user
   */
  logout() {
    this.auth.removeAuthUser();
  }
}
