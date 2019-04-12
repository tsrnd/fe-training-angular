import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from './../../../core/service/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(
    public authService: AuthService,
  ) {
  }
  ngOnInit() {
  }
  logout() {
    this.authService.logout();
    location.reload();
  }
}
