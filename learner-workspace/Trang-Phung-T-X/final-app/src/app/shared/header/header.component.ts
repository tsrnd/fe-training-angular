import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { LocalerService, KEY } from 'src/app/core/services/localer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private router: Router,
    private localService: LocalerService
  ) { }

  isLoggedIn;
  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.localService.removeLocalStorage(KEY.currentUser);
    this.router.navigate(['/']);
  }

}
