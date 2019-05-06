import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'final-project';
  constructor(
    private router: Router
  ) {
    this.router.events.subscribe( e => {
      if (e instanceof NavigationStart) {
        window.scroll(0, 0);
      }
    });
  }
}
