import { Component } from '@angular/core';
import { asTextData } from '@angular/core/src/view';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'erxercise-angular';

  listTabTitle = ['Home', 'Profile', 'Contact'];
  currentTab = 0;

  clicked(event) {
    console.log('Current tab clinking: ');
    console.log(event.target.innerHTML);
    this.currentTab = event.target.id;
 }
}
