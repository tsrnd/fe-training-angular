import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'final-ex';
  constructor(
    private route: Router
  ) {
    this.route.events.subscribe(e => {
      if (e instanceof NavigationStart) {
        window.scroll(0, 0)
      }
    });
  }

}
