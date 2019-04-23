import { Component } from '@angular/core';
import { AuthService } from './core/service/auth.service';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  value: any;
  title = 'exercise-final';
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.router.events.subscribe( e => {
      if (e instanceof NavigationStart) {
        window.scroll(0, 0);
      }
    });
  }
}
