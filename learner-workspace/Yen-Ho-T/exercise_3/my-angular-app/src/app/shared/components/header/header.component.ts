import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {  
  }
  ngOnInit() {
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
