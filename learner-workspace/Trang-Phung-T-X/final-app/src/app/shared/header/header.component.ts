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
  currentUser: any;
  show: boolean;

  constructor(
    public authService: AuthService,
    private router: Router,
    private localService: LocalerService
  ) { }

  ngOnInit() {
    this.currentUser = this.localService.getLocalStorage(KEY.currentUser);
    this.show = !this.currentUser;
  }

  logout() {
    this.show = !this.show;
    this.localService.removeLocalStorage(KEY.currentUser);
    this.currentUser = [];
    this.router.navigate(['/']);
  }

}
