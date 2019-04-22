import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  show: boolean;

  constructor(
    public authService: AuthService,
    private router: Router,
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.show = !!this.authService.getCurrentUser();
  }

  logout() {
    this.authService.logout();
    this.show = !!this.authService.getCurrentUser();
    this.router.navigate(['/']);
  }

}
